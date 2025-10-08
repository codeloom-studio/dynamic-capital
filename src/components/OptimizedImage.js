import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    loading = 'lazy',
    priority = false,
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
    ...props
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [imageSrc, setImageSrc] = useState(placeholder);
    const imgRef = useRef(null);

    // Convert relative paths to absolute paths
    const getImageSrc = (src) => {
        if (src.startsWith('./assets/')) {
            return `${process.env.PUBLIC_URL}/${src.replace('./', '')}`;
        }
        if (src.startsWith('/assets/')) {
            return `${process.env.PUBLIC_URL}${src}`;
        }
        return src;
    };

    const finalSrc = getImageSrc(src);

    useEffect(() => {
        if (priority) {
            // For priority images, load immediately
            setImageSrc(finalSrc);
        } else {
            // For non-priority images, use intersection observer
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setImageSrc(finalSrc);
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (imgRef.current) {
                observer.observe(imgRef.current);
            }

            return () => observer.disconnect();
        }
    }, [finalSrc, priority]);

    const handleLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleError = () => {
        setImageError(true);
        setImageLoaded(false);
        // Fallback to a default image or placeholder
        setImageSrc('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+');
    };

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
            <img
                src={imageSrc}
                alt={alt}
                loading={priority ? 'eager' : loading}
                onLoad={handleLoad}
                onError={handleError}
                className={`transition-opacity duration-300 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-70'
                    } ${className}`}
                {...props}
            />
            {!imageLoaded && !imageError && imageSrc !== placeholder && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
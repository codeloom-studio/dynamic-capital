// Image preloader utility to preload critical images
export const preloadImages = (imageUrls) => {
    const promises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => reject(url);

            // Convert relative paths to absolute paths
            if (url.startsWith('./assets/')) {
                img.src = `${process.env.PUBLIC_URL}/${url.replace('./', '')}`;
            } else if (url.startsWith('/assets/')) {
                img.src = `${process.env.PUBLIC_URL}${url}`;
            } else {
                img.src = url;
            }
        });
    });

    return Promise.allSettled(promises);
};

// Critical images that should be preloaded
export const criticalImages = [
    './assets/logo.svg',
    './assets/hero-image.svg',
    './assets/home-loan-hero.svg',
    './assets/business-loan-hero.svg',
    './assets/personal-loan-hero.svg',
    './assets/car-loan-hero.svg'
];

// Preload critical images on app start
export const preloadCriticalImages = () => {
    return preloadImages(criticalImages);
};
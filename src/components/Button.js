import React from 'react'

const Button = ({ label, border = false, text = "white", bgColor = "lightBlue", onClick }) => {

    return (
        <button onClick={onClick} className={`w-fit bg-${bgColor} text-${text} font-inter text-[15px] font-medium rounded-[3px] px-8 py-4 hover:bg-blue-700 ${border ? "border border-blue" : ""}`}>
            {label}
        </button>
    )
}

export default Button
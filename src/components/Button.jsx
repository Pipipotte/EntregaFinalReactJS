import React from 'react'
import "./Button.css";

const CustomButton = ({ onClick, children }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
        );
    };

    export default CustomButton;
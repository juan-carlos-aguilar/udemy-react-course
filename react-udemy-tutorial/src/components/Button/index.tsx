import React from "react";
import { act } from "react-dom/test-utils";
import { ButtonProps } from "./interface";
import './style.css'

export const Button: React.FC<ButtonProps> = ({ type='default', onClick, children }) => {
    const className = type === 'primary' ? 'primary' 
        : 'secondary' ? 'secondary' 
        : '';

    return(
        <button className={className} onClick={onClick}>{children}</button>
    )
}
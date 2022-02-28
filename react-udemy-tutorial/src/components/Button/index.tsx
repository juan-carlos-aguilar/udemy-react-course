import React from "react";
import { ButtonProps } from "./interface";
import './style.css'

export const Button: React.FC<ButtonProps> = ({ type, className, children, onClick }) => {
    const buttonType = type || 'default';

    return(
        <button className={`button-${buttonType} ${className || ''}`} onClick={onClick}>{children}</button>
    )
}
import React from "react";
import { Navigate } from "react-router-dom";

interface SpecialLinkProps {
    href: string;
    navigate(): void;
}

export const SpecialLink: React.FC<SpecialLinkProps> = props => {
    return (
        <button onClick={props.navigate}>{props.children}</button>
    )
}
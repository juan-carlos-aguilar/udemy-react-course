import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const SuperComponent: React.FC = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h1>Super Component</h1>
            <p>Theme: {theme}</p>
        </div>
    );
}
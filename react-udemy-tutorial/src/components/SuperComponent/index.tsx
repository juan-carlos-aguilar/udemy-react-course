import React, { useRef, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../Button";

const factorial = () => {
    return 5;
}

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    const [ buttonWidth, setButtonWidth ] = useState(0);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    const buttonCallbackRef = (element: HTMLButtonElement | null) => {
        console.log(element);
        if(element !== null) {
            setButtonWidth(element.clientWidth); 
        }
    }

    return (
        <div className="App">
            <h1>Super Component</h1>
            <p>Counter: {counter}</p>
            <p>Button Width: {buttonWidth}</p>
            <button ref={buttonCallbackRef} onClick={handleButtonClick}>Update Counter</button>
        </div>
    )
}

export default SuperComponent;
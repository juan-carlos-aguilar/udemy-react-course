import React, { useRef, useCallback, useEffect, useLayoutEffect, useState } from "react";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <h1>Super Component</h1>
            <p>Counter: {counter}</p>
            <button ref={buttonRef} onClick={handleButtonClick}>Update Counter</button>
        </div>
    )
}

export default SuperComponent;
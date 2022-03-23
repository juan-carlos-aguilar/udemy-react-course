import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../Button";

const factorial = () => {
    return 5;
}

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    
    const handleButtonClick = () => {
        console.log('counter:', counter)
        setCounter((prevState) => prevState + 1);
    }

    const memoizedHandleButtonClick = useCallback(handleButtonClick, [counter]);

    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <Button onClick={memoizedHandleButtonClick} />
        </div>
    )
}

export default SuperComponent;
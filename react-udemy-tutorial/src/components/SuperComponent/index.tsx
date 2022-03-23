import React, { useRef, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useEffectOnUpdates } from "../../customHooks/useEffectOnUpdate";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    useEffectOnUpdates(() => {
        console.log('Component Did Update');
    })
    return (
        <div className="App">
            <h1>Super Component</h1>
            <p>Counter: {counter}</p>
            <button onClick={handleButtonClick}>Update Counter</button>
        </div>
    )
}

export default SuperComponent;
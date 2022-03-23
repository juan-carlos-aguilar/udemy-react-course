import React, { useRef, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useEffectOnUpdates } from "../../customHooks/useEffectOnUpdate";
import { usePrevious } from "../../customHooks/usePrevious";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    const previousValue = usePrevious(counter);
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    useEffectOnUpdates(() => {
        console.log('Previous Value:', previousValue);
        console.log('Current Value:', counter);
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
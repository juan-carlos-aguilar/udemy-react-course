import React, { useEffect, useLayoutEffect, useState } from "react";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    const [ newValue, setNewValue ] = useState(0);
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    const handleNewValueButtonClick = () => {
        setNewValue(newValue + 1);
    }

    

    /**
     * It runs after React paints the changes in the DOM
     * Runs asynchronousy - non blocking
     */
    // useEffect(() => {
    //         if(counter === 0) {
    //             setCounter(5);
    //         }
    // }, [ counter, ]);
    
    /**
     * Runs before React paints the changes in the DOM
     * Runs Synchronous - blocking
     * Updates scheduledi nside will be flushed synchronously
     */
    useLayoutEffect(() => {
        if(counter === 0) {
            setCounter(5);
        }
    }, []);

    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <button onClick={handleButtonClick}>Add Value</button>
            <button onClick={handleNewValueButtonClick}>Add Value</button>
        </div>
    )
}

export default SuperComponent;
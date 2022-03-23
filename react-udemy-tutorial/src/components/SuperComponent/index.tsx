import React, { useState } from "react";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    
    // Increase Counter Handle function
    const handleIncreaseCounter = () => {
        setCounter(counter + 1);
        // To change 3 times
        // setCounter(prevstate + 1);
    }

    // Just to check console logs
    console.log('render');

    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <button onClick={handleIncreaseCounter}>Add Value</button>
        </div>
    )
}

export default SuperComponent;
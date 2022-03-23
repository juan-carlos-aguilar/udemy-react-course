import React, { useEffect, useState } from "react";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <button onClick={handleButtonClick}>Add Value</button>
        </div>
    )
}

export default SuperComponent;
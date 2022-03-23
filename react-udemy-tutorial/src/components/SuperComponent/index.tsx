import React, { useEffect, useState } from "react";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    const [ otherValue, setOtherValue ] = useState(0);
    
    // Increase Counter Handle function
    const handleButtonClick = () => {
        setOtherValue(otherValue + 1);

        // To use 3 times
        // setCounter(prevstate + 1);
    }

    // Two params 2nd one is optional
    useEffect(() => {
        console.log('useEffect triggered');
    });
    
    useEffect(() => {
        console.log('Component Didmount');
    }, [])
    
    useEffect(() => {
        console.log('OtherValue');
    }, [otherValue])
    
    useEffect(() => {
        window.addEventListener('click', handleButtonClick);

        return function cleanup() {
            window.removeEventListener('click', handleButtonClick);
        }
    })

    // Just to check console logs
    console.log('render');

    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <button onClick={handleButtonClick}>Add Value</button>
        </div>
    )
}

export default SuperComponent;
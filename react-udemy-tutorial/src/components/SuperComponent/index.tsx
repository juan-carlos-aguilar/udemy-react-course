import React, { useRef, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { ChildComponent } from "../ChildComponent";
import { ChildCompRef } from "../ChildComponent/interface";

const SuperComponent: React.FC = () => {
    const [ counter, setCounter ] = useState(0);
    const ChildCompRef = useRef<ChildCompRef>(null);
    
    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    const handleChildButtonClick = () => {
        ChildCompRef.current && ChildCompRef.current.handleButtonClick();
    }

    return (
        <div className="App">
            <h1>Super Component</h1>
            <p>Counter: {counter}</p>
            <button onClick={handleButtonClick}>Update Counter</button>
            <button onClick={handleChildButtonClick}>Update Child Component Counter</button>
            <ChildComponent ref={ChildCompRef}/>
        </div>
    )
}

export default SuperComponent;
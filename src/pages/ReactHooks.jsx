import {React, useState} from 'react'

const ReactHooks = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        // counter = ;
        setCounter(counter + 1);
    }
    return <div>{counter}<button onClick = {increment}>Increment</button></div>;
    
};

export default ReactHooks;
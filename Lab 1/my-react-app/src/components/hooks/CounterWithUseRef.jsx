import React, {use, useState, useRef} from 'react'

function CounterWithUseRef() {
    const [count, setCount] = useState(0);
    const buttonClickRef = useRef(0);
    let clickCount = 0;

    const increment = () => {
        setCount(count + 1);
        buttonClickRef.current += 1;
        clickCount += 1;
        console.log("Count state:", count);
        console.log("Button clicked Ref", buttonClickRef.current);
        console.log("Click count variable:", clickCount);
        
    }

    const decrement = () => {
        setCount(count - 1);
        buttonClickRef.current += 1;
        clickCount += 1;
        console.log("Count state:", count);  
        console.log("Button clicked Ref", buttonClickRef.current);
        console.log("Click count variable:", clickCount);
        
    }


  return (
    <div>
        <h2>Counter With useREF</h2>
        <p>Count: {count} </p>
        <p>Button clicked: {buttonClickRef.current} times</p>
        <p>Click count variable: {clickCount} times</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default CounterWithUseRef
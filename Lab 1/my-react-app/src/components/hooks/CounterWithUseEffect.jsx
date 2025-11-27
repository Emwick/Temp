import React, {useEffect, useState} from 'react'

function CounterWithUseEffect() {
    const [count, setCount] = useState(0);
    const [countStep2, setCountStep2] = useState(0);

    const increment = () => {
        setCount(count + 1);
        setCountStep2(countStep2 + 2);
        console.log("Count:", count);
        console.log("CountStep2:", countStep2);
    }
    const decrement = () => {
       // setCount(count - 1);
        setCountStep2(countStep2 - 2);
        console.log("Count:", count);
        console.log("CountStep2:", countStep2);
    }

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Document title updated to:", document.title);

    },[count])

    

  return (
    <div>
        <h2>Counter With useEffect</h2>
        <p>Count: {count} </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default CounterWithUseEffect
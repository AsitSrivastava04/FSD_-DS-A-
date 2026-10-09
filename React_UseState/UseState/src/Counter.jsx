import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    if(count >= 10) {
      alert("Count cannot go above 10");
    }
    else
    setCount(count + 1);
  }

  function decrement() {
    if(count > 0) {
      setCount(count - 1);
    }
    else {
      alert("Count cannot go below 0");
    }
  }

  return (
    <div>
      <h3>Counter App</h3>
      <br />
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>

    </div>
  )
}

export default Counter

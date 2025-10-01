import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  const Increase = () =>{
    if( count < 20){
      setCount(count + 1);
    }
  }
  const Decrease = () =>{
    if( count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>First Assignment</h1>
      <br />
      <h3>Add a button throung which counter can increase(not more than 20)  and decrease(not less than 0) and default conter value is 15</h3>
      <div className="card">
        <h2>Count : {count}</h2>
        <button onClick={Increase}>
          Increase
        </button>
        <button onClick={Decrease}>
          Decrease
        </button>
      </div>
    </>
  )
}

export default App

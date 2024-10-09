import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] = useState(0)
  
  
  const addValue =()=>{
    
    counter = counter+1
    setCounter(counter)
   if(counter>20){
    setCounter(counter=20)
   }
   console.log("Clicked",counter )
  }
  
    
    
  

  const removeValue= ()=>{
    counter = counter-1
    setCounter(counter);
    if(counter<=0){
      setCounter(counter=0)
    }
    console.log("clicked",counter)
  }


  return (
    <>
      
        <h1>Counter with react </h1>
        <h2>counter value: {counter}</h2>
        <button onClick={addValue}>Increase count</button>
        <br />
        <button onClick={removeValue}>Decrease count</button>

      
    </>
  )
}

export default App

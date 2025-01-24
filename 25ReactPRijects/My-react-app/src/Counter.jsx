
import React, {useState} from "react"


function Counter(){

    const [count,setCount]=useState(0)

    const Increment = () =>{
        setCount(count + 1)
    }

    const Decrement = () =>{
        setCount(count - 1)
    }

    const reset = () =>{
        setCount(0)
    }


    return(
            <div className="Counter-Container">
                <p className="count-Display">Count : {count}</p>
                <button className="count-button" onClick={Decrement}>Decrement</button>
                <button className="count-button" onClick={reset}>Reset</button>
                <button className="count-button" onClick={Increment}>Increment</button>
            </div>
           
           )

}

export default Counter
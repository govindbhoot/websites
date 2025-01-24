import { useState,useEffect } from "react";



function Counterprogram(){
    const [count,setCount] = useState(0)
    const [color,setColor] = useState("green")

    useEffect(() => {
        document.title = `count: ${count} ${color}`
    },[count,color]);

    function AddButton(){
        setCount(c => c+1)
    }
    function subtract(){

        if (count>0){
        setCount(c => c-1)
        }
    }
    function changeColor(){
        setColor(c => c==="green" ? "red" : "green")
    }




    return(<div>
          <p style={{color: color}}>Count : {count}</p>
          <button onClick={AddButton}>Add</button>
          <button onClick={subtract}>subtract</button><br />
          <button onClick={changeColor}>Change color</button>
    </div>)
}

export default Counterprogram
import { useState,useEffect } from "react";


function MyComponent3(){
    const[width,setWidth] = useState(window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)
    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("Event Listener Added")



        return() =>{
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener removed")
        }
    

    },[]);

    useEffect(()=>{
        document.title =`size: ${width} ${height}`
    },[width,height])

   
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


    return(<>
           <p>Window width : {width} px</p>
           <p>Window Height : {height} px</p>
        
        
        </>)

}
export default MyComponent3
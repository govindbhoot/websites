import {useState} from "react"
function App() {
  const [color,setColor]=useState('olive')

  return (
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >

      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-full"
        style={{backgroundColor:"Background"}}>
          <button onClick={()=>setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"red"}}
          >Red
          </button>

          <button onClick={()=> setColor("White")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
           style={{backgroundColor:"White"}}
          >White
          </button>
          <button onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"black"}}
          >Black
          </button>

          <button onClick={()=>setColor("Green")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Green"}}
          >Green
          </button>

          <button onClick={()=>setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Blue"}}
          >Blue
          </button>
          <button onClick={()=>setColor("Olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Olive"}}
          >default
          </button>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default App

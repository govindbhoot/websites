import { useState } from "react";


function MyComponent1(){

    const [car,setCar] = useState({year :2024 , Make: "Ford" , Model: "Mustang" })


    function handleyearChange(e){
        setCar(c=>({...c, year:e.target.value}))
    }

    function handlemakeChange(e){
        setCar(c=> ({...c, Make:e.target.value}))
    }
    function handlemodelChange(e){
        setCar(c=> ({...c, Model:e.target.value}))
    }




    return(<div>
           <p>Your Favourite Car is: {car.year} {car.Make} {car.Model}  </p>
           <input type="number" value={car.year} onChange={handleyearChange} /><br />
           <input type="text" value={car.Make} onChange={handlemakeChange}/><br />
           <input type="text" value={car.Model} onChange={handlemodelChange} />


    </div>)



}

export default MyComponent1
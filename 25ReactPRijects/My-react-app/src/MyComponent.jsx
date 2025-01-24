import React,{useState} from "react"

function MyComponent(){

    const [name,setName] = useState("Guest")

    const[quantity,setQuantity] = useState(1)

    const [comment,setComment] = useState("")
    
    const [payment,setPayment] = useState("Visa")

    const [shipping,setShipping] = useState("")








    const handlenameChange=(event) => {
        setName(event.target.value)
    }
    const handlequantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handlecommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlepayment = (event) => {
        setPayment(event.target.value)
    }

    const handleShipping = (event) => {
        setShipping(event.target.value)
    }




    return(<div>

        <input type="text" value={name} onChange={handlenameChange} />
        <p>Name:{name}</p>

        <input type="number" value={quantity} onChange={handlequantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea type="text" value={comment} placeholder="Enter Delievery Instruction" onChange={handlecommentChange} />
        <p>Instruction : {comment}</p>

        <select value={payment} onChange={handlepayment}>
            <option value="" >Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="UPI">UPI</option>
        </select>
        <p>Payment : {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick Up" checked = {shipping === "Pick Up" } onChange={handleShipping} />
            Pick Up
            </label>
            <br />
        <label htmlFor="">
        <input type="radio" value="Dilevry" checked = {shipping === "Dilevry" } onChange={handleShipping} />
            Delivery
        </label>

        <p>Shipping: {shipping}</p>




         </div>)



}

export default MyComponent
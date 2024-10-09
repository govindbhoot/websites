import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 const obj={
  userName: "Govind",
  age: 22
 }

 let myArr=[3,4,45,6]

  return (
    <>
      <h1 className='bg-green-300 text-black rounded-xl p-4'>Tailwind Test</h1>
      <Card userName="Bhoot" btnTxt="visit here"/>
      <Card userName="Govind" btnTxt="click me!"/>
    </>
  )
}

export default App

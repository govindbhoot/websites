import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1><b>Learning About Redux</b></h1>
      <AddTodo/>
      <Todos/>
      
      
    </>
  )
}

export default App

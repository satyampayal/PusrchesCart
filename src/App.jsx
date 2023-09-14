import { useState } from 'react'
import './App.css'
import Header from './Componenets/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './Componenets/Home'
import Cart from './Componenets/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </>
  )
}

export default App

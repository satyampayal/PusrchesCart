import { useState } from 'react'
import './App.css'
import Header from './Componenets/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './Componenets/Home'
import Cart from './Componenets/Cart'

function App() {
  const [count, setCount] = useState(0);
  
const addItemHandler=(addItem)=>{
  setCount(addItem);
  //console.log(addItem);

}
  return (
    <>
    <Header  addCart3={count} />
    <Routes>
    <Route path='/' element={<Home addCart2={(addItem)=>addItemHandler(addItem)}/>}/>
       <Route path='/yourcart' element={<Cart/>}/>

    </Routes>
    </>
  )
}

export default App

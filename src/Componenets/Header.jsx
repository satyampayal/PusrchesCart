import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
function Header({addCart3}) {
  const [toAdd,setToAdd]=useState(false);
  return (
    <div className='fixed top-0 w-[100%] h-[100px] bg-gray-800 flex justify-around items-center z-[999]'>
        <h1 className='text-[24px] text-white '>Shooping cart</h1>
        <input className='w-[40%] px-[16px] py-[6px] rounded-[5px]' type="text" name="ser_pro" id="" placeholder='Search a Produt' />
        <Link to={toAdd?'/yourcart':'/'} onClick={()=>setToAdd(!toAdd)}  className='bg-green-700 text-white px-[20px] py-[6px] rounded-[5px]'>
        <i   className="fa-solid fa-cart-shopping ">{' '+addCart3}</i>
        </Link>

    </div>
  )
}

export default Header
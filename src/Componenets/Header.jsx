import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='w-[100%] h-[100px] bg-gray-800 flex justify-around items-center'>
        <h1 className='text-[24px] text-white '>Shooping cart</h1>
        <input className='w-[40%] px-[16px] py-[6px] rounded-[5px]' type="text" name="ser_pro" id="" placeholder='Search a Produt' />
        <Link path='/yourcart' className='bg-green-700 text-white px-[20px] py-[6px] rounded-[5px]'>
        <i className="fa-solid fa-cart-shopping ">{' 0'}</i>
        </Link>

    </div>
  )
}

export default Header
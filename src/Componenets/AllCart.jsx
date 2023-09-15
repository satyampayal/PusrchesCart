import React from 'react'
import { useState } from 'react';
function AllCart({ image,category,rate,item,addInCart}) {
    const [add, setAdd] = useState(false);
    const addHandler=(item)=>{
        setAdd(!add);
        if(add){
        addInCart(item,add);
        }
        else{
        addInCart(item,add);
        }
    }
    return (
        <div className='border-[1px] border-gray-300 bg-white rounded-[8px] flex flex-col justify-center  gap-[5px] hover:scale-[102%] hover:rounded-none z-[0] ' >
            <img className='w-[50%] h-[40%] mx-auto' src={image} alt="image of products" />
            <h1 className='text-[24px] italic  mx-auto'>{category}</h1>
            <h1 className='bg-green-600 text-white rounded-[5px] text-center w-[80%] mx-auto'>Rate {rate}</h1>
            <h1 onClick={() => addHandler(item)}
                className={`${add?'bg-red-600':'bg-blue-600'} text-white rounded-[5px] text-center w-[80%]  mx-auto cursor-pointer ${add?'hover:bg-red-500 hover:scale-[97%]':'hover:bg-blue-500 hover:scale-[97%]'} `}>
                {add ? 'Remove from cart' : 'Add into cart'}
            </h1>
        </div>
    )
}

export default AllCart
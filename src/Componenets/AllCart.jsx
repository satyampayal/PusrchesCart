import React from 'react'
import { useState } from 'react';
function AllCart({ image,category,rate,item }) {
    const [add, setAdd] = useState(false);
    //console.log(item)

    const addHandler=(item)=>{
        setAdd(!add)

    }
    return (
        <div className='border-[1px] border-gray-300 rounded-[5px] flex flex-col justify-center  gap-[5px] ' >
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
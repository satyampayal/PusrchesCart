import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import AllCart from './AllCart';
function Home() {
    const [cart, setCart] = useState([]);
    const [addItem, setAddItem] = useState(0);
    const [add, setAdd] = useState(false);
    // const [addMessage, setAddMessage] = useState('Add into cart');
    const downloadCart = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        //console.log(response)
        const cartData = response.data;
        // console.log(cartData);
        setCart(() => cartData);
        console.log(cart)
        // const cartDiv = cartData.map((item) => {
        //     return (<div>
        //         <img src={item.image} alt="image of products" />
        //         <h1>{item.category}</h1>
        //         <h1>Rate {item.rating.rate}</h1>
        //     </div>)
        // })

        //console.log(cart)
    }
    useEffect(() => {
        downloadCart();
    }, [])

    const cartDiv = cart.map((item) => {
        // const add=false;
        // return (
        // <div 
        // key={item.id}
        // className='border-[1px] border-gray-300 rounded-[5px] flex flex-col justify-center  gap-[5px] ' >
        //     <img className='w-[50%] h-[40%] mx-auto' src={item.image} alt="image of products" />
        //     <h1 className='text-[24px] italic  mx-auto'>{item.category}</h1>
        //     <h1 className='bg-green-600 text-white rounded-[5px] text-center w-[80%] mx-auto'>Rate {item.rating.rate}</h1>
        //     <h1 onClick={() =>setAdd(!add)}
        //         className='bg-blue-600 text-white rounded-[5px] text-center w-[80%]  mx-auto cursor-pointer hover:bg-blue-400'>
        //         {add ? 'Remove from cart' : 'Add into cart'}
        //     </h1>
        // </div>)

        // <AllCart
        //     key={item.id}
        //     item={item}
        // />
    })
    return (
        <div className=' px-[30px] mt-[20px] grid grid-cols-5 gap-[20px]'>{
            cart.map((item) => {
                <AllCart
                    key={item.id}
                    image={item.image}
                    rate={item.rating.rate}
                />
            })
        }
        </div>
    )
}

export default Home
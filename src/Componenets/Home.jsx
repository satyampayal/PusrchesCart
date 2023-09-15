import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import AllCart from './AllCart';
function Home({ addCart2 }) {
    const [cart, setCart] = useState([]);
    const [addItem, setAddItem] = useState(0);
    // const [addMessage, setAddMessage] = useState('Add into cart');
    const downloadCart = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        //console.log(response)
        const cartData = await response.data;
        // console.log(cartData);
        setCart(() => cartData);
    }
    useEffect(() => {
        downloadCart();
    }, [])

    // const cartDiv = cart.map((item) => {
    //     // const add=false;
    //      return (
    //     <div 
    //     key={item.id}
    //     className='border-[1px] border-gray-300 rounded-[5px] flex flex-col justify-center  gap-[5px] ' >
    //         <img className='w-[50%] h-[40%] mx-auto' src={item.image} alt="image of products" />
    //         <h1 className='text-[24px] italic  mx-auto'>{item.category}</h1>
    //         <h1 className='bg-green-600 text-white rounded-[5px] text-center w-[80%] mx-auto'>Rate {item.rating.rate}</h1>
    //         <h1 onClick={() =>setAdd(!add)}
    //             className='bg-blue-600 text-white rounded-[5px] text-center w-[80%]  mx-auto cursor-pointer hover:bg-blue-400'>
    //             {add ? 'Remove from cart' : 'Add into cart'}
    //         </h1>
    //     </div>)

    //     // <AllCart
    //     //     key={item.id}
    //     //     item={item}
    //     // />
    // })
    const addCart = (cartItem, add) => {
        if (add === true) {
            console.log('remove');
            if (addItem > 0){
                setAddItem(addItem - 1);
            }
            
            console.log('value of addItem is', addItem);
            addCart2(addItem-1);


        } 
        
        else {
            setAddItem(addItem + 1);
            console.log(cartItem);
            console.log('value of addItem is by in else', addItem);
            addCart2(addItem+1);

        }
    }
    return (
        <div className=' px-[30px] mt-[20px] grid grid-cols-5 gap-[20px]'>{
            // i am do one mistake jiski vajahh se 1 night jyada lagi AllCart componenet ko {} me kar diya
            cart.map((item) =>
                <AllCart
                    key={item.id}
                    image={item.image}
                    rate={item.rating.rate}
                    category={item.category}
                    item={item}
                    addInCart={(cartItem, add) => addCart(cartItem, add)}
                />
            )
        }
        </div>
    )
}

export default Home
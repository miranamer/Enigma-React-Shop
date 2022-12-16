import React, { useEffect, useState } from 'react'
import {BsCart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const Cart = ({cart}) => {
    const navigate = useNavigate()

    const [total, setTotal] = useState(0);

    useEffect(() => {
        for(var i = 0; i < cart.length; i++){
            setTotal(total + cart[i].price)
        }
    }, [cart]) // TODO: fix this!


  return (
    <>
    
    <div className="bg-[#FFE600] w-full min-h-screen bg-cover bg-no-repeat bg-center">
        <div className=" flex items-center justify-between w-full px-20 h-[120px] javanese">
            <h1 className='text-4xl hover:cursor-pointer'>Help</h1>
            <h1 onClick={() => navigate('/')} className=' text-5xl hover:cursor-pointer'>Enigma</h1>
            <div className=" flex">
                <h1 onClick={() => navigate('/cart')} className=' text-4xl hover:cursor-pointer'><BsCart /></h1>
                <p className='text-center text-2xl mt-2 ml-1'>{cart.length}</p>
            </div>
        </div>
        <div className=" flex flex-col gap-5 items-center justify-center relative top-[70px]">
        {cart.map((item) => 
        <div className=' min-w-[800px] flex gap-2 border-b-2  border-black'>
            <img src={item.img} alt="" className=' aspect-[3/2] object-contain max-w-[300px] max-h-[300px]' />
            <div className=" ml-[160px] flex flex-col gap-2 ">
                <h1 className=' text-2xl relative top-[70px]'>{item.name}</h1>
                <h1 className=' text-2xl relative top-[70px] bold'>${item.price}</h1>
            </div>
        </div>)}
        <h1 className=' ml-[80px] mt-10 reg text-3xl'>Total: ${total} </h1>
        
        </div>
    </div>
    
    </>
  )
}

export default Cart
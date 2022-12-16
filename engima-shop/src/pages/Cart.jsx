import React from 'react'
import {BsCart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const Cart = ({cart}) => {
    const navigate = useNavigate()
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
        <div className='flex gap-2'>
            <img src={item.img} alt="" className=' max-w-[300px] max-h-[300px]' />
            <div className=" flex flex-col gap-2">
                <h1 className=' text-2xl relative top-[70px]'>{item.name}</h1>
                <h1 className=' text-2xl relative top-[70px] bold'>${item.price}</h1>
            </div>
        </div>)}
        
        </div>
    </div>
    
    </>
  )
}

export default Cart
import React, { useEffect, useState } from 'react'
import {BsCart} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'


const Cart = ({cart, total, setCart, setTotal}) => {
    const navigate = useNavigate()
    //relative right-[200px]
    //console.log(cart)

    const deleteItem = (id, item) => {
        setTotal(total - item[0].price)
        setCart(cart.filter(item => item[1] !== id))
    }

    //<h1 className=' text-center text-3xl javanese pt-2 italic'>Cart</h1>

  return (
    <>
    
    <div className="bg-[#FFE600] w-full h-screen overflow-auto pb-[100px]">
        <div className=" flex items-center justify-between w-full px-20 h-[120px] javanese">
            <h1 className='text-4xl hover:cursor-pointer'>Help</h1>
            <img src={Logo} onClick={() => navigate('/')} className=" hover:cursor-pointer w-[300px]" alt="" />
            <div className=" flex">
                <h1 onClick={() => navigate('/cart')} className=' text-4xl hover:cursor-pointer'><BsCart /></h1>
                <p className='text-center text-2xl mt-2 ml-1'>{cart.length}</p>
            </div>
        </div>
        <div className=" flex flex-col gap-5 items-center justify-center relative top-[70px]">
        {cart.map((item) => 
        <div className=' min-w-[800px] flex gap-2 '>
            <h1 onClick={() => deleteItem(item[1], item)} className='mt-[15%] mr-[10%] bold text-2xl text-red-700 hover:cursor-pointer'><AiOutlineClose /></h1>
            <img src={item[0].img} alt="" className=' aspect-[3/2] object-contain max-w-[300px] max-h-[300px]' />
            <div className=" ml-[120px] flex flex-col gap-2 mb-3 w-full h-[250px] ">
                <h1 className=' text-2xl relative top-[70px] reg'>{item[0].name} ({item[3]})</h1>
                <h1 className=' text-2xl relative top-[70px] mt-[20px] bold'>${item[0].price}</h1>
                <h1 className=' text-2xl relative top-[70px] mt-[20px] bold'><span className='reg'>Color: </span><span className=' drop-shadow-lg' style={{color: item[2]}}>{item[2].charAt(0).toUpperCase() + item[2].slice(1)}</span></h1>
            </div>
        </div>)}
        </div>
        {total > 0 ? <div className=" flex justify-center mt-[120px] items-center">
            <h1 className='relative top-0  mt-5 mr-[100px] reg text-3xl italic'>Total: <span className='bold text-green-600 drop-shadow-lg'>${total}</span> </h1>
            <div onClick={() => navigate('/contact')} className=" hover:cursor-pointer hover:bg-black hover:text-white relative flex items-center mt-[20px] justify-center h-[50px] w-[130px] border-2 border-black">
                <h1 className='javanese absolute top-[31%] text-2xl '>Next</h1>
            </div>
        </div> : <h1 className='reg text-4xl ml-[43%]  mt-[100px]'>Cart Is Empty!</h1>}
    </div>
    
    </>
  )
}

export default Cart
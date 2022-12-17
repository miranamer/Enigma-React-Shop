import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {BsCart} from 'react-icons/bs'

const Contact = ({cart}) => {
    const navigate = useNavigate();
  return (
    <>
    
        <div className="bg-[#FFE600] w-full h-screen overflow-auto pb-[100px]">
            <div className=" flex items-center justify-between w-full px-20 h-[120px] javanese">
                <h1 className='text-4xl hover:cursor-pointer'>Help</h1>
                <h1 onClick={() => navigate('/')} className=' text-5xl hover:cursor-pointer'>Enigma</h1>
                <div className=" flex">
                    <h1 onClick={() => navigate('/cart')} className=' text-4xl hover:cursor-pointer'><BsCart /></h1>
                    <p className='text-center text-2xl mt-2 ml-1'>{cart.length}</p>
                </div>
            </div>
        
            <h1 className=' text-center text-3xl javanese pt-2 italic'>Contact Details</h1>
            
            <form className=' flex items-center justify-center mt-[140px] flex-col gap-[170px]'>
                <div className=" flex items-center h-full">
                    <h1 className=' reg relative right-[100px] top-[8px] text-2xl'>Email:</h1>
                    <input type="email" className=' relative right-[30px] w-[600px] bg-white/0 text-2xl text-center reg border-b-2 border-black/40 py-2 focus:border-black focus:outline-none' />
                </div>
                <div className=" flex items-center h-full">
                    <h1 className=' reg relative right-[100px] top-[8px] text-2xl'>First Name:</h1>
                    <input type="text" className=' relative right-[65px] w-[600px] bg-white/0 text-2xl text-center reg border-b-2 border-black/40 py-2 focus:border-black focus:outline-none' />
                </div>
                <div className=" flex items-center h-full">
                    <h1 className=' reg relative right-[100px] top-[8px] text-2xl'>Last Name:</h1>
                    <input type="text" className=' relative right-[60px] w-[600px] bg-white/0 text-2xl text-center reg border-b-2 border-black/40 py-2 focus:border-black focus:outline-none' />
                </div>
                <div className=" hover:cursor-pointer hover:bg-black hover:text-white relative bottom-[100px] left-[10px] flex items-center justify-center h-[50px] w-[130px] border-2 border-black">
                    <h1 className='javanese absolute top-[31%] text-2xl '>Next</h1>
                </div>
            </form>

        </div>

    </>
  )
}

export default Contact
import React from 'react'
import hoodie from '../assets/hoodie.png'
import { AiOutlineCaretRight, AiOutlineCaretLeft, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import {BsCart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Item from '../components/Item';

const Shop = () => {

    const navigate = useNavigate()

  return (
    <>

    <div className="bg-[#FFE600] w-full h-screen">
        <div className=" flex items-center justify-between w-full px-20 h-[120px] javanese">
            <h1 className='text-4xl hover:cursor-pointer'>Help</h1>
            <h1 onClick={() => navigate('/')} className=' text-5xl hover:cursor-pointer'>Enigma</h1>
            <div className=" flex">
                <h1 className=' text-4xl hover:cursor-pointer'><BsCart /></h1>
                <p className='text-center text-2xl mt-2 ml-1'>0</p>
            </div>
        </div>
        <div className=" flex items-center justify-center">
            <img className='mt-10 w-[700px] relative'  src={hoodie} alt="" />
            <p className='absolute left-[15%] text-5xl hover:cursor-pointer'><AiOutlineLeft /></p>
            <p className='absolute right-[15%] text-5xl hover:cursor-pointer'><AiOutlineRight /></p>
        </div>
        <Item />
    </div>

    </>
  )
}

export default Shop
import React, { useState } from 'react'
import {BsCart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Item from '../components/Item';
import NavBar from '../components/NavBar';
import Logo from '../assets/logo.png'

const Shop = ({cart, setCart, setTotal, total, keyA, setKeyA}) => {

    const navigate = useNavigate()
    // <h1 onClick={() => navigate('/')} className=' text-5xl hover:cursor-pointer'>Enigma</h1>


  return (
    <>

    <div className="bg-[#FFE600] w-full h-screen">
        <div className=" flex items-center justify-between w-full px-20 h-[120px] javanese">
            <h1 className='text-4xl hover:cursor-pointer'>Help</h1>
            <img src={Logo} onClick={() => navigate('/')} className=" hover:cursor-pointer w-[300px]" alt="" />
            <div className=" flex">
                <h1 onClick={() => navigate('/cart')} className=' text-4xl hover:cursor-pointer'><BsCart /></h1>
                <p className='text-center text-2xl mt-2 ml-1'>{cart.length}</p>
            </div>
        </div>
        <Item cart={cart} setCart={setCart} setTotal={setTotal} total={total} keyA={keyA} setKeyA={setKeyA} />
    </div>

    </>
  )
}

export default Shop
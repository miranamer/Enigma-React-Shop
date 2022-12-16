import React from 'react'
import {BsCart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const NavBar = ({cart}) => {

    const navigate = useNavigate();
  return (
    <>
    
    <div className="bg-[#FFE600] w-full h-screen">
        <div className=" flex items-center justify-between w-full px-20 h-[120px] javanese">
            <h1 className='text-4xl hover:cursor-pointer'>Help</h1>
            <h1 onClick={() => navigate('/')} className=' text-5xl hover:cursor-pointer'>Enigma</h1>
            <div className=" flex">
                <h1 className=' text-4xl hover:cursor-pointer'><BsCart /></h1>
                <p className='text-center text-2xl mt-2 ml-1'>{cart.length}</p>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default NavBar
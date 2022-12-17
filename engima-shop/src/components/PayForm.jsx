import React, {useState} from 'react'
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import {BsCart} from 'react-icons/bs'


const PayForm = ({cart}) => {

    const navigate = useNavigate();
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()

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

        <div className=" flex items-center justify-center h-screen">
            <div className="flex flex-col w-[500px] h-[700px] bg-white relative bottom-[90px] rounded-md"></div>
        </div>
    
    </div>
    
    </>
  )
}

export default PayForm
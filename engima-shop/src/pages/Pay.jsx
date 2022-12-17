import React from 'react'
import {BsCart} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import {CardElement, Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PayForm from '../components/PayForm'

const Pay = ({cart}) => {
    const navigate = useNavigate()

    const PUBLIC_KEY = "pk_test_51MG4YpE8xcPBKxmRqNwVYGQ6wCIsVAJxyXiWwQl2oWhCGXiLjL5XnolbOk8DVd0ja5QUvmlLlmBFhTw5j68HHPNB003HgofBFu"
    const stripeTestPromise = loadStripe(PUBLIC_KEY)


  return (
    <>
    
        <Elements stripe={stripeTestPromise}>
            <PayForm cart={cart} />
        </Elements>
    
    
    </>
  )
}

export default Pay
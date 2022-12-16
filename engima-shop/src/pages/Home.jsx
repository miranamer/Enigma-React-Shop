import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Home = ({time}) => {

  const navigate = useNavigate()

  return (
    <>
        <div className="bg-[#FFE600] w-full h-screen">

            <div className=" flex flex-col items-center justify-center h-screen">
              <h1 className="javanese text-5xl">Enigma</h1>
              <h1 className=" text-5xl jeju mt-7 ">{time.hours}:{time.minutes}:{time.seconds}</h1>
              <p className=" reg mt-2 text-[15px] relative">Until Deletion</p>
              <button onClick={() => navigate('/shop')} className=" border-2 border-black px-[50px] py-4 absolute bottom-20 javanese text-center text-xl">Enter</button>
            </div>

        </div>
    </>
  )
}

export default Home
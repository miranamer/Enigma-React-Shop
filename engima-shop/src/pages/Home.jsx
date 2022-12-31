import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'

const Home = ({time}) => {

  const navigate = useNavigate()
  //<div className=" hover:cursor-pointer hover:bg-black hover:text-white relative flex items-center justify-center h-[50px] w-[130px] border-2 border-black">
  //<h1 className='javanese absolute top-[31%] text-2xl '>Add</h1>
  //</div>

  // <button onClick={() => navigate('/shop')} className=" border-2 border-black px-[50px] py-4 absolute bottom-20 javanese text-center text-xl">Enter</button>
  // <h1 className="javanese text-5xl">Enigma</h1> <-- Text Logo

  return (
    <>
        <div className="bg-[#FFE600] w-full h-screen">

            <div className=" flex flex-col items-center justify-center h-screen">
              <img src={Logo} className=" w-[320px]" alt="" />
              <h1 className=" text-5xl jeju mt-7 ">{time.hours}:{time.minutes}:{time.seconds}</h1>
              <p className=" reg mt-2 text-[15px] relative">Until Deletion</p>
              <div className="absolute bottom-20">
                <div onClick={() => navigate('/shop')} className=" hover:cursor-pointer hover:bg-black hover:text-white relative flex items-center justify-center h-[50px] w-[130px] border-2 border-black">
                  <h1 className='javanese absolute top-[31%] text-2xl '>Enter</h1>
                </div>
              </div>
            </div>

        </div>
    </>
  )
}

export default Home
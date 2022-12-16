import React from 'react'

const Item = () => {
  return (
    <>
    
    <div className=" flex flex-col gap-8 items-center">
            <h1 className='text-2xl reg'>Supreme Hoodie</h1>
            <div className=" flex  gap-10">
                <div className=" w-[30px] h-[30px] bg-red-500 hover:cursor-pointer hover:border-2 hover:border-black"></div>
                <div className=" w-[30px] h-[30px] bg-orange-500 hover:cursor-pointer hover:border-2 hover:border-black"></div>
                <div className=" w-[30px] h-[30px] bg-blue-500 hover:cursor-pointer hover:border-2 hover:border-black"></div>
            </div>
            <div className="flex gap-10 reg text-xl">
                <h1 className='hover:font-bold hover:cursor-pointer hover:border-b-2 hover:border-b-black'>xsm</h1>
                <h1 className='hover:font-bold hover:cursor-pointer hover:border-b-2 hover:border-b-black'>sm</h1>
                <h1 className='hover:font-bold hover:cursor-pointer hover:border-b-2 hover:border-b-black'>md</h1>
                <h1 className='hover:font-bold hover:cursor-pointer hover:border-b-2 hover:border-b-black'>lg</h1>
                <h1 className=' text-black/60'><strike>xlg</strike></h1>
            </div>
            <div className=" flex gap-20 items-center">
                <h1 className=' bold text-4xl'>$150</h1>
                <button className=" border-2 border-black px-[50px] py-2 javanese text-center text-2xl">Add</button>
            </div>
    </div>

    </>
  )
}

export default Item
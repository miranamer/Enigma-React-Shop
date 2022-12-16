import React from 'react'

const ColorBlock = ({color}) => {
  return (
    <>
    
    <div className={` w-[30px] h-[30px] hover:cursor-pointer hover:border-[3px] ${color === 'black' ? 'hover:border-white' : 'hover:border-black'}`} style={{backgroundColor: color}}></div>

    </>
  )
}

export default ColorBlock
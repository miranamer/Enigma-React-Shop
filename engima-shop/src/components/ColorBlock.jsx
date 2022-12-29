import React from 'react'

const ColorBlock = ({color, mainColor, setMainColor}) => {
  const handleColor = (color) => {
    if(mainColor === color){
      setMainColor('')
    }
    else{
      setMainColor(color);
    }
  }
  
  return (
    <>
      <div onClick={() => handleColor(color)} className={` w-[30px] h-[30px] ${mainColor === color ? color !== 'black' ? 'border-[3px] border-black' : 'border-[3px] border-white' : null} hover:cursor-pointer hover:border-[3px] ${color === 'black' ? 'hover:border-white' : 'hover:border-black'}`} style={{backgroundColor: color}}></div>
    </>
  )
}

export default ColorBlock
import React from 'react'

const SizeBlock = ({size, mainSize, setMainSize}) => {

  const handleSize = () => {
    setMainSize(size)
  }

  return (
    <>
    
        <h1 onClick={() => handleSize()} className={` ${mainSize === size ? 'font-bold border-b-2 border-black' : null} hover:font-bold hover:cursor-pointer hover:border-b-2 hover:border-b-black`}>{size}</h1>

    </>
  )
}

export default SizeBlock
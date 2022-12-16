import React, {useState} from 'react'
import hoodie from '../assets/hoodie.png'
import amiri from '../assets/amiri.png'
import balenciaga from '../assets/balenciaga.png'
import { AiOutlineCaretRight, AiOutlineCaretLeft, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import ColorBlock from './ColorBlock';
import SizeBlock from './SizeBlock';
import NaSize from './naSize';

const Item = ({cart, setCart}) => {

  const allSizes = ['xs', 'sm', 'md', 'lg', 'xlg']
  const [slider, setSlider] = useState([{id: 0, name: 'Supreme Hoodie', price: 150, img: hoodie, colors: ['red', 'orange', 'blue'], sizes: ['xs', 'sm', 'md', 'lg']},
                                        {id: 1, name: 'Amiri Jacket', price: 1500, img: amiri, colors: ['pink', 'green', 'black'], sizes: ['md', 'lg', 'xlg']},
                                        {id: 2, name: 'Balenciaga T-shirt', price: 450, img: balenciaga, colors: ['black', 'white'], sizes: ['xs', 'sm', 'lg']}]);

    const [index, setIndex] = useState(0);

    const handleSliderRight = () => {
        if(index === slider.length - 1){
            return null;
        }
        else{
            setIndex(index + 1);
        }   
    }

    const handleSliderLeft = () => {
        if(index === 0){
            return null;
        }
        else{
            setIndex(index - 1);
        }   
    }

    const handleAdd = () => {
      setCart([...cart, slider[index]])
    }



  return (
    <>
    <div className="bg-[#FFE600] w-full max-h-screen">
      <div className=" relative flex items-center justify-center">
              <img className='mt-[1%] max-w-[700px] max-h-[500px] relative'  src={slider[index].img} alt="" />
              <p onClick={handleSliderLeft} className={`absolute left-[15%] text-5xl hover:cursor-pointer ${index === 0 ? 'text-black/40' : 'text-black'}`}><AiOutlineLeft /></p>
              <p onClick={handleSliderRight} className={`absolute right-[15%] text-5xl hover:cursor-pointer ${index === slider.length - 1 ? 'text-black/40' : 'text-black'}`}><AiOutlineRight /></p>
      </div>
      <div className="absolute bottom-10 left-[39%] flex flex-col gap-8 items-center">
              <h1 className='text-2xl reg'>{slider[index].name}</h1>
              <div className=" flex  gap-10">
                {slider[index].colors.map((color) => <ColorBlock color={color} />)}
              </div>
              <div className="flex gap-10 reg text-xl">
                  {allSizes.map((size) => {
                    if(slider[index].sizes.includes(size)){
                      return <SizeBlock size={size} />;
                    }
                    else{
                      return <NaSize size={size} />;
                    }
                  })}
              </div>
              <div className=" flex gap-20 items-center">
                  <h1 className=' bold text-4xl'>${slider[index].price}</h1>
                  <div className=" hover:cursor-pointer hover:bg-black hover:text-white relative flex items-center justify-center h-[50px] w-[130px] border-2 border-black">
                    <h1 onClick={handleAdd} className='javanese absolute top-[31%] text-2xl '>Add</h1>
                  </div>
              </div>
      </div>
      </div>

    </>
  )
}

export default Item
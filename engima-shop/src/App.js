import Home from "./pages/Home";
import { useState } from "react";
import Shop from "./pages/Shop";
import {Routes, Route} from 'react-router-dom';
import Cart from "./pages/Cart";

function App() {

  const [time, setTime] = useState({hours: 12, minutes: 1, seconds: 15});
  const [cart, setCart] = useState([]);


  return (
    <>
      <Routes>
        <Route path='/' element={<Home time={time} />} />
        <Route path='/shop' element={<Shop cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;

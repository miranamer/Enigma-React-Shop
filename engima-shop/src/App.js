import Home from "./pages/Home";
import { useState } from "react";
import Shop from "./pages/Shop";
import {Routes, Route} from 'react-router-dom';
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Pay from "./pages/Pay";

function App() {

  const [time, setTime] = useState({hours: 12, minutes: 1, seconds: 15});
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);
  const [keyA, setKeyA] = useState(1);


  return (
    <>
      <Routes>
        <Route path='/' element={<Home time={time} />} />
        <Route path='/shop' element={<Shop cart={cart} setCart={setCart} total={total} setTotal={setTotal} keyA={keyA} setKeyA={setKeyA} />} />
        <Route path='/cart' element={<Cart cart={cart} total={total} setCart={setCart} setTotal={setTotal} />} />
        <Route path='/contact' element={<Contact cart={cart} />} />
        <Route path="/pay" element={<Pay cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;

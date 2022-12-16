import Home from "./pages/Home";
import { useState } from "react";
import Shop from "./pages/Shop";
import {Routes, Route} from 'react-router-dom';

function App() {

  const [time, setTime] = useState({hours: 12, minutes: 1, seconds: 15});


  return (
    <>
      <Routes>
        <Route path='/' element={<Home time={time} />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;

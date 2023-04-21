import React from "react";
import { Routes, Route } from 'react-router-dom';
import  Home  from './routes/Home';
import Contactus from "./routes/contactus";



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}    />
      <Route path='/pricing' element={<Contactus />}    />
    </Routes>
    </>
  );
}

export default App;

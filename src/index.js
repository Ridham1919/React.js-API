import React from 'react';
import ReactDOM from 'react-dom/client';
import Insert from './Insert';
import Api1 from './Api1';
import Delete from './Delete';
import Update from './Update';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
 <>
  <BrowserRouter>
  <Routes>
        {/* <Route path="/" element={<Insert/>} /> */}
        <Route path="/" element={ <Delete/> } />
        <Route path="/Login" element={ <Login/> } />
        {/* <Route path="/Api1" element={<Api1/>} /> */}
        <Route path="/edit/:id" element={ <Update/>} />
  </Routes>
  </BrowserRouter>
 </>
   

);


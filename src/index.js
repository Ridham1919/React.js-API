import React from 'react';
import ReactDOM from 'react-dom/client';
import Insert from './Insert';
import Api1 from './Api1';
import Delete from './Delete';
import InsertDelete from './InsDel';
import Update from './Update';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
 <>
  <BrowserRouter>
  <Login/>
  <Routes>
        <Route path="/" element={ <Delete/> } />
        <Route path="/edit/:id" element={ <Update/>} />
  </Routes>
  </BrowserRouter>
 </>
   

);


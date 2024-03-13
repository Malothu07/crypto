
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import "./style.scss";
import Login1 from './login/Login1';
import Frontend from './login/Frontend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Frontend />} />
      <Route path='/login1' element={<Login1 />} />
      <Route path='/home' element={<Home/>} />
      <Route  path='/:id' element={<Show />} />
    </Routes>
    
  </BrowserRouter>
);





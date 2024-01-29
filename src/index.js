import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from'./component/home/home.js';
import Detail from './component/detail/detail.js'; 
import reportWebVitals from './reportWebVitals';
import Login from './component/login/login.js';
import Explore from './component/explore/explore.js';
import Reels from './component/reels/reels.js';
import Message from './component/message/message.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/detail/' element={<Detail/>} />
    <Route path="/detail/:name" element={<Detail />} /> 
    <Route path='/login' element={<Login/>}/>
    <Route path='/explore' element={<Explore/>}></Route>
    <Route path='/reels' element={<Reels/>}></Route>
    <Route path='/message' element={<Message/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

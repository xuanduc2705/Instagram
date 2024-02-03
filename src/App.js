import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from'./component/home/home.js';
import Detail from './component/detail/detail.js'; 
import reportWebVitals from './reportWebVitals';
import Login from './component/login/login.js';
import Explore from './component/explore/explore.js';
import Reels from './component/reels/reels.js';
import Message from './component/message/message.js';
import { getTokenFromSessionStorage } from "./component/Util/storageUtil.js";
import { useState, useEffect } from 'react';
function App() {
  const [change,setChange] = useState(false)
  useEffect(() => {
    const token = getTokenFromSessionStorage();
    if (token) {
      setChange(true);
    }
  }, []);
  return (
    <div className="App">
      <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={change ? <Home /> : <Login />} />
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
    </div>
  );
}

export default App;

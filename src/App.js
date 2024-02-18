import React from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from'./component/home/home.js';
import Detail from './component/detail/detail.js'; 
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
    <Route path="/" element={<Login/> } />
    <Route path='/home' element={change ?<Home/>:<Login/>} />
    <Route path='/detail/' element={change ?<Detail/>:<Navigate to={'/login'}/>} />
    <Route path="/detail/:name" element={change ?<Detail />:<Navigate to={'/login'}/>} /> 
    <Route path='/login' element={change ?<Login/>:<Login/>}/>
    <Route path='/explore' element={change ?<Explore/>:<Navigate to={'/login'}/>}></Route>
    <Route path='/reels' element={change ?<Reels/>:<Navigate to={'/login'}/>}></Route>
    <Route path='/message' element={change ?<Message/>:<Navigate to={'/login'}/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
    </div>
  );
}

export default App;

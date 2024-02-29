import React from "react";
import '../explore/explore.css'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import '../reels/reels.css'
import { Link } from 'react-router-dom';
import { reel } from "../../data/reelsdata";
import { FaMusic } from 'react-icons/fa';
import { Avatar } from "@mui/material";
import { Element, scroller } from 'react-scroll';
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { MdOutlineMoreHoriz } from "react-icons/md";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useState,useEffect,useRef } from 'react';
import '../home/Home.css'

function Reels() {

  const inputRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showAnotherNav, setShowAnotherNav] = useState(false);
  const [showAnotherNavi, setShowAnotherNavi] = useState(false);
  const handleClose = () =>{
    setIsNavVisible(true);
    setShowAnotherNav(false);
      setShowAnotherNavi(false);
  }
  const scrollToNextVideo = (index) => {

    const nextIndex = index + 1;
    scroller.scrollTo(String(nextIndex), {
      duration: 500,
      smooth: true,
      offset: -20, 
    });
  };
  const scrollToPastVideo = (index) => {
    const nextIndex = index - 1;
    scroller.scrollTo(String(nextIndex), {
      duration: 100,
      smooth: true,
      offset: -20, 
    });
  };
  useEffect(() => {
    const handleWheelScroll = (event) => {
      event.preventDefault();
    };

    document.body.style.overflow = 'hidden';

    const reelpage = document.querySelector('.reelslist');
    const reelTop = reelpage.getBoundingClientRect().top;
    reelpage.style.overflow = 'auto';
    reelpage.addEventListener('wheel', handleWheelScroll, { passive: false });

    window.scrollTo({ top: reelTop, behavior: 'smooth' });

    return () => {
      document.body.style.overflow = 'auto';
      reelpage.style.overflow = 'auto';
      reelpage.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);

  return (
    <div className="reelpage" >
      <div className="reelslist" onClick={handleClose}>
        <div className="videolist">
          {reel.map((post, index) => (
            <div className="video-page" key={index} id={index}>
              <div className="video" >
              <video
                className="videoanh"
                src={post.src}
                loop
                autoPlay
                muted
              />
              <div className="gocduoi">
                <div className="tenreel">
                  <Avatar>
                    <img src={post.avatar} style={{ width: '100%' }} alt="Avatar" />
                  </Avatar>
                  <div className="tentaikhoan">
                    <span className="tennick">{post.name}</span>
                    <li></li>
                    <button className="followbutton" >Follow</button>
                  </div>
                </div>
                <div className="contentreel">{post.content}</div>
                <div className="musicreel" >
                  <FaMusic className="musicicon" />
                  {post.music}
                  <li style={{ fontSize: '8px', marginTop: '6px', marginLeft: '6px' }}></li>
                  <span>Original audio</span>
                </div>
              </div>
            </div>

            <div className="buton"
            
            style={{display:'flex',flexDirection:'column',marginTop:'180px'}}
            >
            {index===0?(<></>):(
              <button onClick={() => scrollToPastVideo(index)}
              style={{ border: "none", background: "none",fontSize:"30px" }}
             >
               <LuArrowUpToLine/>
               </button>
            )}
              <button onClick={() => scrollToNextVideo(index)}
             style={{ border: "none", background: "none",fontSize:"30px" , marginBottom:'25px'}}
            >
              <LuArrowDownToLine/>
              </button>
                <FavoriteBorderIcon
                className='postIcons'
                style={{fontSize:"40px", marginBottom:'20px'}}/>

                <ChatBubbleOutlineIcon className='postIcons'style={{fontSize:"40px", marginBottom:'20px'}}/>
                <TelegramIcon className='postIcons' style={{fontSize:"40px", marginBottom:'20px'}}/>
                <BookmarkIcon className='postIcons'style={{fontSize:"40px", marginBottom:'20px'}}/>
                <MdOutlineMoreHoriz className='postIcons'style={{fontSize:"40px", marginBottom:'20px'}}/>
                <img src={post.avatar} width={"25px"} height={"25px"} style={{marginLeft:'7px',borderRadius:'5px',border:'1px solid black'}}/>
              </div>
            
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Reels;
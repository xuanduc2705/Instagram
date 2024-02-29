import React from "react";
import '../explore/explore.css'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { reel } from "../../data/reelsdata";
import { useState,useEffect,useRef } from 'react';
import '../home/Home.css'

function Explore(){
  const explore=false
  const reels=true
  const [ten,setTens] = useState([{
    stoava:'https://i.ibb.co/qkhmRLp/418758070-2278354819026761-6414880944565960628-n.jpg',
    name:'hathu_87',
    fullname:'Pham Thu Ha'
  },
  {
    stoava:'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/177549202_320774429402765_4463919220949422685_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGDmc0saVSUmf0AXUm77tjZcfAnf2O5bX1x8Cd_Y7ltfYj9vqtg0P2s6p3pOdP0mjxwbgBGuMURUFRHrpdWCseT&_nc_ohc=zS7IXsaXazQAX-gdvxW&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB9MX7giHeCewTjwAjiYo8iCCYIZ5rLxXkkYOUDl5Y4LQ&oe=65D05C38',
    name:'chuyencuahanoi.official',
    fullname:'Chuyen cua Ha Noi'
  },
  {
    stoava:'https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj',
    name:'sontungmtp',
    fullname:'Son Tung MTP'
  },
  {
    stoava:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1280px-Manchester_United_FC_crest.svg.png',
    name:'manchesterunitedoficial',
    fullname:'Manchester United'
  },
  {
    stoava:'https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg',
    name:'judebellingham',
    fullname:'Jude Bellingham'
  },
  {
    stoava:'https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg',
    name:'leomessi',
    fullname:'Lionel Messi'
  },
  {
    stoava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s',
    name:'cristiano',
    fullname:'Cristiano Ronaldo'
  }])
  const inputRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showAnotherNav, setShowAnotherNav] = useState(false);
  const [showAnotherNavi, setShowAnotherNavi] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    setIsNavVisible(false);
    setShowAnotherNav(true);
  };
  const handleNofiClick = () => {
    setIsNavVisible(false);
    setShowAnotherNavi(true);
  };

  const handleNavClose = () => {
    setIsNavVisible(true);
    setShowAnotherNav(false);
  };
  const handleNofiClose = () => {
    setIsNavVisible(true);
    setShowAnotherNavi(false);
  };
  const handleCancelClick = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  const isResult = query !== '' && inputRef.current.value!== '';
  const handleClose = () =>{
    setIsNavVisible(true);
    setShowAnotherNav(false);
      setShowAnotherNavi(false);
  }
  const closenav = () => {
    setShowAnotherNav(false);
      setShowAnotherNavi(true);
  }
  const closenavi = () => {
    setShowAnotherNav(true);
      setShowAnotherNavi(false);
  }
return(
<div className="explore">
        <div className="reelslist" onClick={handleClose}>
        <div className="baidanggreel">
          {reel.map((post, index) => (
            <div className="baidang1">
              <div className="baidang11" >
              <img key={index} src={post.avatar} className="heto" alt="" />
                <h3 className="reelview">{post.like}</h3>
                <PlayArrowRoundedIcon className="reelicon" style={{fontSize:'40px'}}/>
                <div className="overlay">
                  <div className="caption">
                    <div className="like">
                      <FavoriteBorderRoundedIcon className="icontym" style={{marginBottom:'40px'}}/>
                    <h3 className="tym">{post.like}</h3>
                    </div>
                    <div className="cmt">
                      <ModeCommentOutlinedIcon className="icontym"/>
                    <h3 className="tym">{post.cmt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    
</div>
);
}
export default Explore
import React from 'react';
import '../nav/nav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar } from '@mui/material';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TbBrandMessenger } from "react-icons/tb";
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone';

function Nav({ explore,reels}) {
  const [ten,setTens] = useState([{
    stoava:'https://i.ibb.co/qkhmRLp/418758070-2278354819026761-6414880944565960628-n.jpg',
    name:'hathu_87',
    fullname:'Pham Thu Ha'
  },
  {
    stoava:'https://image.viettimes.vn/1200x630/Uploaded/2024/livospwi/2020_07_03/chipu-910143_372020.jpg',
    name:'chipupu',
    fullname:'ChiPu'
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
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    setIsNavVisible(false);
    setShowAnotherNav(true);
  };

  const handleNavClose = () => {
    setIsNavVisible(true);
    setShowAnotherNav(false);
  };
  const handleCancelClick = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  const isResult = query !== '' && inputRef.current.value!== '';
  return (
    <>
    <div className={`Nav ${isNavVisible ? '' : 'hide-nav'}`}>
    <Link to='/home' >
    <img className='nav_logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' 
        alt=''
        />
    </Link>
        
        <div className='nav_buttons'>
              <Link to='/home' style={{ textDecoration: 'none' }}>
            <button className='sidenav_button'>
              <HomeOutlinedIcon/>
             <span className='spann' >Home</span>
            </button>
            </Link>
            <button className='sidenav_button'onClick={handleSearchClick} >
              <SearchIcon/>
              <span className='spann'>Search</span>
            </button>
            <Link to='/explore' style={{ textDecoration: 'none' }}>
              {explore ? (<button className='sidenav_button'>
               <ExploreOutlinedIcon />
                <span className='spann'>Explore</span>
                
              </button>):(
                <button className='sidenav_button23'>
                <ExploreIcon />
                <span className='spann'>Explore</span>
                
              </button>
              )}
                
              </Link>
              <Link to='/reels' style={{ textDecoration: 'none' }}>
              {reels ? (<button className='sidenav_button'>
              <SlideshowIcon/>
              <span className='spann'>Reels</span>
            </button>):(
                <button className='sidenav_button23'>
                <SlideshowTwoToneIcon/>
                <span className='spann'>Reels</span>
              </button>
              )}
                
              </Link>
              
            <button className='sidenav_button'>
              <TbBrandMessenger className='messicon' /> 
              <span className='spann'>Messages</span>
            </button>
              
            <button className='sidenav_button'>
              <FavoriteBorderIcon/>
              <span className='spann'>Notifications</span>
            </button>
            <button className='sidenav_button'>
              <AddCircleOutlineIcon/>
              <span className='spann'>Create</span>
            </button>
            <div className='sidenav_more'>
            <button className='sidenav_button' onClick={handleNavClose}>
              <MenuIcon/>
              <span className='spann'>More</span>
            </button>
            </div>
            
        </div>
    
    </div>
    {showAnotherNav && (
        <div className='slide-in-nav'>
          <div className='AnotherNav'>
          
        <div className="bentraii">
        <div className='nav_logo' style={{width:'50px'}}>
          <InstagramIcon style={{fontSize:'25px',marginLeft:'11px'}}/>
        </div>
        <div className='nav_buttons' style={{marginTop:'43px',marginLeft:'10px'}}>
              <Link to='/home' className='buts' style={{ textDecoration: 'none' }}>
            <button className='sidenav_button2' onClick={handleNavClose}>
              <HomeOutlinedIcon style={{fontSize:'27px'}} />
            </button>
            </Link>
            <button className='sidenav_button2'onClick={handleNavClose} style={{width:'40px',height:'40px',border:'1px lightgrey solid',justifyContent:'center',marginLeft:'13px'}}>
              <SearchIcon className='buts' />
            </button>
            <button className='sidenav_button2'>
            <ExploreOutlinedIcon className='buts' />
            </button>   
            <button className='sidenav_button2'>
              <SlideshowIcon className='buts'/>
            </button>
              
            <button className='sidenav_button2'>
              <ChatIcon className='buts'/>
            </button>
              
            <button className='sidenav_button2'>
              <FavoriteBorderIcon className='buts'/>
            </button>
            <button className='sidenav_button2'>
              <AddCircleOutlineIcon className='buts'/>
            </button>
            <div className='sidenav_more'>
            <button className='sidenav_button2' >
              <MenuIcon className='buts'/>
            </button>
            </div>
            
        </div>
        </div>
        <div className='benphai'>
          <div className="benphaitren">
            <h1>Search</h1>
            <div className="inputsize">
            <input
            className='searchinput'
            placeholder='Search'
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            ref={inputRef}
            />
            <CancelIcon className='x' style={{fontSize:'17px',color:'grey',marginTop:'3px'}} 
             onClick={handleCancelClick}
            />
            </div>
            
          </div>
          <div className="benphaiduoi">
            {isResult? (
              
              <ul className='listt'>
              {ten.filter((asd) =>
               asd.name.toLowerCase().includes(query)
             ).map((item) => (
              <Link to={`/detail/${item.name}`} className='post_authorr'>
                <div className="listItem" key={item.id}>
                 <Avatar>
           <img src={item.stoava} alt={item.name} className='heo'/>
           </Avatar>
           <div className="namesearch">
           <span className='tensearch'>{item.name}</span>
           <span className='fullnamesearch'>{item.fullname}</span>
           </div>
           
               </div>
              </Link>
             ))}
           </ul>
              
            ):(
              <div className='searcher'>
              <span>No recent searches.</span>
          </div>
            )}
          
        </div>
        </div>
        
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
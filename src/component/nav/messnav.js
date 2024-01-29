import React from "react"
import '../nav/nav.css';
import SearchIcon from '@mui/icons-material/Search';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { PiMessengerLogoFill } from "react-icons/pi";
import './messnav.css'

function Messnav(){

return(
    <div className="messnav">
        <div className="bentraii">
        <Link to='/home'style={{ textDecoration: 'none' }} >
        <div className='nav_logo' style={{width:'50px'}} >
          <InstagramIcon style={{fontSize:'25px',textDecoration:'none'}} className='igicon' />
        </div>
        </Link>
        <div className='nav_buttons' style={{marginTop:'43px',marginLeft:'10px'}}>
              <Link to='/home' className='buts' style={{ textDecoration: 'none' }}>
            <button className='sidenav_button2' >
              <HomeOutlinedIcon style={{fontSize:'27px'}} />
            </button>
            </Link>
            <button className='sidenav_button2' style={{width:'40px',height:'40px',justifyContent:'center',marginLeft:'3px'}}>
              <SearchIcon className='buts' />
            </button>
            <Link to='/explore' style={{ textDecoration: 'none' }}>
            <button className='sidenav_button2'>
            <ExploreOutlinedIcon className='buts' />
            </button>  
            </Link>
             <Link to='/reels' style={{ textDecoration: 'none' }}>
            <button className='sidenav_button2'>
              <SlideshowIcon className='buts'/>
            </button>
            </Link>
            <button className='sidenav_button2'>
              <PiMessengerLogoFill className='buts' style={{fontSize:'24px'}}/>
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
        
    </div>
)
}

export default Messnav;
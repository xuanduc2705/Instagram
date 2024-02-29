import React from 'react';
import '../nav/nav.css';
import SearchIcon from '@mui/icons-material/Search';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Avatar } from '@mui/material';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { TbBrandMessenger } from "react-icons/tb";
import FavoriteIcon from '@mui/icons-material/Favorite';

const NofiNav = props =>{
    return(
            <div className='slide-in-nav'>
              <div className='AnotherNav'>
            <div className="bentraii">
            <Link to='/home' style={{ textDecoration: 'none'}}>
            <button className='sidenav_button' style={{marginTop:"25px",marginBottom:"25px"}}>
            <InstagramIcon/>
            </button>
            </Link>
            <div className='nav_buttons' style={{marginLeft:'10px'}}>
                  <Link to='/home' className='buts' style={{ textDecoration: 'none' }}>
                <button className='sidenav_button2'>
                  <HomeOutlinedIcon style={{fontSize:'27px'}} />
                </button>
                </Link>
                <button className='sidenav_button2' onClick={props.onClick2} style={{width:'40px',height:'40px',border:'1px lightgrey solid',justifyContent:'center',marginLeft:'3px'}}>
                  <SearchIcon className='buts' />
                </button>
                <button className='sidenav_button2'>
                <ExploreOutlinedIcon className='buts' />
                </button>   
                <button className='sidenav_button2'>
                  <SlideshowIcon className='buts'/>
                </button>
                <Link to='/message' style={{ textDecoration: 'none' }}>
                <button className='sidenav_button2'>
                <TbBrandMessenger className='messicon' /> 
                </button>
                  </Link>
                <button className='sidenav_button2' onClick={props.onClick}>
                  <FavoriteIcon className='buts'/>
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
              <div className="benphaitren" style={{paddingTop:'20px',display:'flex',flexDirection:'column'}}>
                <span className='nofi' style={{fontWeight:'bolder',fontSize:'25px',marginBottom:'20px'}}>Notifications</span>
                <div className="ttreq">
                <Avatar >
                  <img
                  src='https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds'
                  alt=''
                  style={{width:'100%'}}
                  />
                </Avatar>
                <div className="tongtineq">
                <span className="reqtt">
                  Follow Request
                </span>
                <span className='markk'>
                  Mark Zuckerberg
                </span>
                </div>
                </div>
              </div>
              <div className="benphaiduoi">
                <h1>Hi</h1>
            </div>
            </div>
              </div>
            </div>
          )
}
export default NofiNav
import React from "react"
import Messnav from "../nav/messnav"
import '../nav/nav.css';
import './message.css'
import { PiNotePencil } from "react-icons/pi";
import { posts } from "../../data/detaildata";
import { Avatar } from "@mui/material";
import { useParams } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdOutlineInfo } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
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
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TbBrandMessenger } from "react-icons/tb";
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PiMessengerLogoFill } from 'react-icons/pi';
function Message(){
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
    const{name} = useParams();
    
    const tin = posts.find(post => post.sname === name);
    const [selectedNick, setSelectedNick] = useState(null);

    const handleNickClick = (sname, ava,chat,ten2,online) => {
      setSelectedNick({ sname, ava,chat,ten2,online});
    };
    const inputRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showAnotherNav, setShowAnotherNav] = useState(false);
  const [showAnotherNavi, setShowAnotherNavi] = useState(false);
  const [query, setQuery] = useState("");

    const handleClose = () =>{
      setShowAnotherNav(false);
        setShowAnotherNavi(false);
    }
  console.log(showAnotherNav)
  console.log(showAnotherNavi)
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
  const closenav = () => {
    setShowAnotherNav(false);
      setShowAnotherNavi(true);
  }
  const closenavi = () => {
    setShowAnotherNav(true);
      setShowAnotherNavi(false);
  }
return(
    
    <div className="message" style={{marginLeft:'0px'}}>
        <div className="messnavv">
        <div className="messnav" id='main-nav'>
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
              <SearchIcon className='buts' onClick={handleSearchClick}/>
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
              
            <button className='sidenav_button2' onClick={handleNofiClick}>
              <FavoriteBorderIcon className='buts' />
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
    {showAnotherNav && (
      <div className='slide-in-nav'>
        <div className='AnotherNav'>
        
      <div className="bentraii">
  <Link to='/home' >
      <div className='nav_logo' style={{width:'50px'}}>
        <InstagramIcon style={{fontSize:'25px'}} className='igicon'/>
      </div>
      </Link>
      <div className='nav_buttons' style={{marginTop:'43px',marginLeft:'10px'}}>
            <Link to='/home' className='buts' style={{ textDecoration: 'none' }}>
          <button className='sidenav_button2' onClick={handleNavClose}>
            <HomeOutlinedIcon style={{fontSize:'27px'}} />
          </button>
          </Link>
          <button className='sidenav_button2'onClick={handleNavClose} style={{width:'40px',height:'40px',border:'1px lightgrey solid',justifyContent:'center',marginLeft:'3px'}}>
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
            <ChatIcon className='buts'/>
          </button>
            </Link>
          <button className='sidenav_button2' onClick={closenav}>
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
    {showAnotherNavi && (
      <div className='slide-in-nav'>
        <div className='AnotherNav'>
        
      <div className="bentraii">
      <Link to='/home' >
      <div className='nav_logo' style={{width:'50px'}} >
        <InstagramIcon style={{fontSize:'25px'}} className='igicon' />
      </div>
      </Link>
      <div className='nav_buttons' style={{marginTop:'43px',marginLeft:'10px'}}>
            <Link to='/home' className='buts' style={{ textDecoration: 'none' }}>
          <button className='sidenav_button2' onClick={handleNofiClose}>
            <HomeOutlinedIcon style={{fontSize:'27px'}} />
          </button>
          </Link>
          <button className='sidenav_button2' style={{width:'40px',height:'40px',border:'1px lightgrey solid',justifyContent:'center',marginLeft:'3px'}} onClick={closenavi}>
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
          <button className='sidenav_button2' onClick={handleNofiClose}>
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
    )}
        </div>
        <div className="messbenphai" >
            <div className="danhsachchat">
                <div className="daudanhsach">
                    <span className="tenchunickmess">s.pinkduck_03</span>
                    <PiNotePencil
                    className="noteicon"
                    style={{fontSize:'30px',cursor:'pointer'}}
                    />
                </div>
                <div className="giuadanhsach">
                    <span className="mesmid">
                        Messages
                    </span>
                    <span className="reques">
                        Requests
                    </span>
                </div>
                <div className="danhsachnick">
                {posts.map((po,index)=>(
                        <div className="nick"
                        onClick={() => handleNickClick(po.sname,po.ava,po.chat,po.ten2,po.online)}
                        key={index}
                        >
                            <img 
                            className="avanickchat"
                            src={po.ava}
                            alt=""
                            />
                            <div className="tennick1">
                            <span className="tennickchat">
                            {po.ten2}
                            </span>
                            <span className="online">
                                {po.online}
                            </span>
                            </div>
                       
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
        <div className="messbentrai" style={{width:'100%'}} onClick={handleClose}>
        {selectedNick ? (
          <>
          <div className="fullbenphai">
            <div className="chatbar">
            <div className="nick"
                        >
                            <img 
                            className="avanickchat"
                            src={selectedNick.ava}
                            alt=""
                            />
                            <div className="tennick1">
                            <span className="tennickchat">
                            {selectedNick.ten2}
                            </span>
                            <span className="online">
                                {selectedNick.online}
                            </span>
                            </div>
                       
                        </div>
                <div className="iconme">
                    <IoCallOutline className="micon"/>
                    <FiVideo className="micon"/>
                    <MdOutlineInfo className="micon" />
                </div>
            </div>
             
            <div
  className="dinbox"
  style={{
    padding: "10px",
    display: "flex",
    flexDirection: "column"
  }}
>
  {selectedNick.chat.map((message, index) => (
    <div
      key={index}
      className="inbox"
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        className="message home"
        style={{
          padding: "10px 15px",
          backgroundColor: "rgb(55, 151, 240)",
          borderRadius: "20px",
          marginBottom: "10px",
          maxWidth: "30vw",
          width: "fit-content",
          display: "inline-block",
          marginLeft: "auto",
          textAlign: "right",
          color:'white'
        }}
      >
        {message.home}
      </div>
      <div
        className="message away"
        style={{
          marginLeft: "0",
          textAlign: "left"
        }}
      >
        <div className="away"
        style={{display:'flex',
        flexDirection:'row'
    }}
        
        >
        <Avatar src={selectedNick.ava} style={{marginRight:'10px'}}>

        </Avatar>
        <div className="span" style={{padding: "10px 15px",
          backgroundColor: "lightgrey",
          borderRadius: "20px",
          marginBottom: "10px",
          maxWidth: "30vw",
          width: "fit-content",
          display: "inline-block",}}>
            {message.away}
        </div>
        </div>
      </div>
    </div>
      ))}
</div>
            
          </div>
          <div className="inputmess"
          style={{border:'1px solid lightgrey', borderRadius:'100px',padding:'10px',display:'grid',gridTemplateColumns:''}}
          >
            <input type="text" placeholder="Message" 
            style={{border:'none'}}
            />
          </div>
          </>
        ) : (
          <div className="noselect"
          style={{}}
          >
           <span style={{width:'100%',height:"100%"}}>No one selected</span>
          </div>
        )}
        </div>
    </div>
)
}

export default Message
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../time/index.css'
import Suggestion from './suggestion';
import Story from './story';
import Post from './post';
import { useState,useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getTokenFromSessionStorage } from '../Util/storageUtil';
import { pot } from '../../data/homepost';
import Modal from 'react-bootstrap/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TimeLine() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [token, setToken] = useState('');
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login")
  };
  useEffect(() => {
    const storedToken = getTokenFromSessionStorage();
    setToken(storedToken);
  }, []);
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  const name = 's.pinkduck_03';
  const[stos,setStos] = useState([
    {
      stoava:'https://i.ibb.co/qkhmRLp/418758070-2278354819026761-6414880944565960628-n.jpg',
      name:'hathu_87'
    },
    {
      stoava:'https://image.viettimes.vn/1200x630/Uploaded/2024/livospwi/2020_07_03/chipu-910143_372020.jpg',
      name:'chipupu'
    },
    {
      stoava:'https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj',
      name:'sontungmtp'
    },
    {
      stoava:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1280px-Manchester_United_FC_crest.svg.png',
      name:'manchester...'
    },
    {
      stoava:'https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg',
      name:'judebellin...'
    },
    {
      stoava:'https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg',
      name:'leomessi'
    },
    {
      stoava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s',
      name:'cristiano'
    },
  ])
  return (
    <div className='timeline'>
    <div className="time">
        <div className='timeline_left'>
        <div className='story_left'>
        <div className='story'>
        {stos.map(sto=>(
          <Story
          stoava={sto.stoava}
          name={sto.name}
          />
        ))}
        </div>
        <NavigateNextIcon className='nextIcon' />
        </div>
          <div className='timeline_post'>
            {pot.map((post)=>(
              <Post
              ava={post.ava}
              image={post.image}
              sname={post.sname}
              like={post.like}
              time={post.time}
              content={post.content}
              postt={post.posts}
              following={post.following}
              followers={post.followers}
              pos1={post.pos1}
              pos2={post.pos2}
              pos3={post.pos3}
              cmt={comments} 
              onAddComment={handleAddComment}
              />
            ))}


          </div>
        </div>
        <div className='timelibe_right'>
        <div className='profile'>
          <div className='pro'>
          <div className='file'>
                <span className='avat'>
                  <Avatar>
                  <img src='https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg' className='hero' alt=''/>
                  </Avatar>
                </span>
                <div className='profileinfo'>
                  <Link to={`/detail/${name}`}  className='usernamee' >{name}</Link>
                  <span className='relationn'>🅳🆄🅺🅴</span>
                </div>
                </div>
                <button className='Follow_button'onClick={handleShow} >Switch</button>
                </div>
                
        </div>
            <Suggestion/>
        </div>
       
    </div>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'14px',textAlign:'center',marginLeft:'36%'}}>Switch accounts</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:'160px'}}>

        <span className='avatt' >
           
           <div className="thongtin" style={{display:'flex',flexDirection:'row',marginLeft:"10px"}}>
           <Avatar className='hero'>
               <img src='https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg' style={{width:'100%'}}  alt=''/>
               </Avatar>
               <div className='profileinfoo'
                 style={{display:'flex',flexDirection:'row',width:'80%',marginLeft:'10px',marginTop:'4px'}}
               >
               <Link to={`/detail/${name}`}  className='usernameee'style={{textDecoration:'none',color:'black', marginRight:'6px'}} >{name}
               </Link>
               <CheckCircleIcon className="checkicon"/>
              
             </div>
           </div>
          
             </span>

        </Modal.Body>
        <Modal.Footer>
        <Link to={`/login`} style={{textDecoration:'none', marginRight:'6px',margin:'0 auto'}} className='usernameeee'onClick={handleLogout}>
          <span className="logout"  >Log in to an existed account</span>
          </Link>

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TimeLine;
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import Modal from '../time/modal';
import '../time/time.css'
import Suggestion from './suggestion';
import Story from './story';
import Post from './post';
import { useState,useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getTokenFromSessionStorage } from '../Util/storageUtil';
import { pot } from '../../data/homepost';

function TimeLine() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = getTokenFromSessionStorage();
    setToken(storedToken);
  }, []);
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  const name = 's.pinkduck_03';
  const [modalOpen, setModalOpen] = useState(false);
  const [newSto, setNewSto] = useState("");
 

const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
setIsHovered(true);
};

const handleMouseLeave = () => {
setIsHovered(false);
};

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
  const [likeCount, setLikeCount] = useState(pot.map(() => false));
  const handleAddSto = () => {
    if (newSto.trim() === "") {
      return; // Skip if the input is empty or contains only whitespace
    }
  
    const newItem = {
      stoava: newSto,
      name: "Custom Name"
    };
  
    setStos((prevStos) => [...prevStos, newItem]);
    setNewSto(""); // Clear the input value after adding the item
  };
  return (
    <div>
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
              cmt={comments} onAddComment={handleAddComment}
              />
              
            ))}


          </div>
        </div>
        <div className='timelibe_right'>
        <div className='story-right'>
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
              <button className='Follow_button' onClick={() => {
          setModalOpen(true);
        }}>Switch</button>
              </div>
              
          </div>
          
        </div>
            <Suggestion/>
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
    </div>
  );
}

export default TimeLine;
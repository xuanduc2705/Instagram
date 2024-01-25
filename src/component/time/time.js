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

function TimeLine() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve the token from session storage
    const storedToken = getTokenFromSessionStorage();
    setToken(storedToken);
  }, []);
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    // Update the comments array with the new comment
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
  const[posts, setPosts] = useState([
    {
      ava:"https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg",
      image:'https://static.independent.co.uk/2023/12/18/19/GettyImages-1693541710.jpg?width=1200&height=1200&fit=crop',
      sname:'judebellingham',
      like:696969,
      time:'39m',
      content:'+3💪🏼 Game on🔥 ! Vamos, Hala Madrid!!!🤍',
      posts:'340',
      followers:'26M',
      following:'723',
      pos1:'https://static.independent.co.uk/2023/12/18/19/GettyImages-1693541710.jpg?width=1200&height=1200&fit=crop',
      pos2:'https://www.aljazeera.com/wp-content/uploads/2022/12/SOR01310.jpg?resize=1800%2C1800',
      pos3:'https://nld.mediacdn.vn/291774122806476800/2023/9/21/jude-bellingham-motm-1695266759489733697002.jpg',
      cmt:[{
        author:'hello',
        text:'xinchao'
      }]
      
  },
    {
      ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s",
      image:'https://static.independent.co.uk/2022/10/27/21/1437086710.jpg?width=1200&height=1200&fit=crop',
      sname:'cristiano',
      like:2705707,
      time:'1h',
      content:'Amazing night at Old Tralford. Thanks to everyone. Sir Alex, you deserved this! Siuuuuu👊❤️',
      posts:'340',
          followers:'26M',
          following:'723',
          pos1:'https://static.independent.co.uk/2022/10/27/21/1437086710.jpg?width=1200&height=1200&fit=crop',
          pos2:'https://media.newyorker.com/photos/63826120196c8ef692b4eba5/1:1/w_1707,h_1707,c_limit/Ronaldo_WC22.png',
          pos3:'https://pbs.twimg.com/media/F-rox7_W8AAPiac.jpg:large'
  },
  {
      ava:"https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg",
      image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-three_four.jpg?VersionId=bC.F3bXDnv.tllvg4xShTny9qKH0ny0U',
      sname:'leomessi',
      like:999999,
      time:'2h',
      content:'CAMPEONES DEL MUNDO!!!!!!! 🌎🏆',
      posts:'340',
          followers:'26M',
          following:'723',
          pos1:'https://fotos.perfil.com/2022/12/18/cropped/696/696/center/lionel-messi-world-cup-kiss-1475219.jpg',
          pos2:'https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/15/messiaustralia-15-6-1-16868403493231277771165-0-0-1047-2000-crop-16868405136381951409690.jpg',
          pos3:'https://media.architecturaldigest.com/photos/637949b3407644b8cdc8947f/1:1/w_2896,h_2896,c_limit/1442809583'
  },
  {
      ava:"https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/177549202_320774429402765_4463919220949422685_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGDmc0saVSUmf0AXUm77tjZcfAnf2O5bX1x8Cd_Y7ltfYj9vqtg0P2s6p3pOdP0mjxwbgBGuMURUFRHrpdWCseT&_nc_ohc=zS7IXsaXazQAX-gdvxW&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB9MX7giHeCewTjwAjiYo8iCCYIZ5rLxXkkYOUDl5Y4LQ&oe=65D05C38",
      image:'https://i.ibb.co/YQ5KS77/419569827-1117415399425122-521516947774380838-n.jpg',
      sname:'chuyencuahanoi.official',
      like:6969,
      time:'3h',
      content:'Van Mieu Quoc Tu Giam ❤️',
      posts:'340',
          followers:'26M',
          following:'723',
          pos1:'https://i.ibb.co/YQ5KS77/419569827-1117415399425122-521516947774380838-n.jpg',
          pos2:'https://cdnphoto.dantri.com.vn/UKs2txxUSzn692pzyTNggKnXX8M=/thumb_w/1020/2022/08/24/2-edit-dan-tri-hanh-trinh-kien-tao-chuyen-cua-ha-noi-25-8docx-1661339168505.jpeg',
          pos3:'https://vcdn-kinhdoanh.vnecdn.net/2022/08/11/image001-7191-1660213353.jpg'
  },
  {
      ava:"https://i.ibb.co/3m0cnrp/418758070-2278354819026761-6414880944565960628-n.jpg",
      image:'https://i.ibb.co/hCDC5cZ/68019a4adcb977e72ea8.jpg',
      sname:'hathu_87',
      like:2705,
      time:'1d',
      content:'❤️',
      posts:'340',
          followers:'26M',
          following:'723',
  }
  ]);
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
  const [likeCount, setLikeCount] = useState(posts.map(() => false));
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
            {posts.map((post)=>(
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
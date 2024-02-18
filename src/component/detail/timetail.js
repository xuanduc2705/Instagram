import React from "react";
import { useState } from "react";
import '../detail/timetail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import GridOnIcon from '@mui/icons-material/GridOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PortraitIcon from '@mui/icons-material/Portrait';
import { useParams } from 'react-router-dom';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { posts } from "../../data/detaildata";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Avatar } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone';

function Timetail() {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleShow = (data) => {
    setModalData(data);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const{name} = useParams();
  
      const tenn = posts.find(post => post.sname === name);
      const anhs = tenn.post;
      const [activeSection, setActiveSection] = useState('baidang');

  const handleButtonClick = (section) => {

    setActiveSection(section);
  };

  return (
    <div className="timetailpage">
      <div className="buto">
      <button
        className={`buto1 ${activeSection === 'baidang' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidang')}
      >
        <GridOnIcon style={{ fontSize: '11px' }} /> POSTS
      </button>
      <button
        className={`buto1 ${activeSection === 'baidangg' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidangg')}
      >
        <InstagramIcon style={{ fontSize: '11px' }} /> REELS
      </button>
      <button
        className={`buto1 ${activeSection === 'baidanggg' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidanggg')}
      >
        <PortraitIcon style={{ fontSize: '11px' }} /> TAGGED
      </button>
    </div>
    <div className="butohide">
      <button
        className={`buto1 ${activeSection === 'baidang' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidang')}
      >
        <GridOnIcon style={{ fontSize: '20px' }} /> 
      </button>
      <button
        className={`buto1 ${activeSection === 'baidangg' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidangg')}
      >
        <InstagramIcon style={{ fontSize: '20px' }} /> 
      </button>
      <button
        className={`buto1 ${activeSection === 'baidanggg' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidanggg')}
      >
        <PortraitIcon style={{ fontSize: '20px' }} /> 
      </button>
    </div>
    <Modal size="xl"
        aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose} animation={false} centered >
      <div className="modal-container" style={{width:'1100px',height:'700px'}}>
        <Modal.Body style={{height:"100%"}}>
          <div className="modalbody" style={{height:"100%",display:"flex",flexDirection:'row'}}>
            <div className="modalleft" style={{width:'65%',justifyContent:'center',alignItems:'center',display:'flex',height:"100%",backgroundColor:'black'}}>
              <img src={modalData.src}
              alt=""
              style={{maxWidth:'100%',margin:'auto',maxHeight:"100%"}}
              />
            </div>
            <div className="modalright" style={{width:'35%'}}>
              <div className="modalright-heading" style={{padding:'10px',display:'flex',flexDirection:'row',borderBottom:'1px solid lightgrey'}}>
                <Avatar src={tenn.ava}/>
                <div style={{display:'flex',flexDirection:'row',marginTop:'5px',marginLeft:'10px'}}>
                <span style={{fontSize:"15px",fontWeight:'bold'}}>
                  {tenn.sname}
                </span>
                <DoneIcon className='done' style={{ fontSize: '15',marginTop:'5px',borderRadius: '50%', color:'white',backgroundColor:'blue',marginRight:'30px' }} />
                </div>
              </div>
              <div className="modalright-body" style={{padding:"10px"}}>
                <div className="modalrightcontent" style={{display:"flex",flexDirection:'row',marginBottom:"20px"}}>
                <Avatar src={tenn.ava}/>
                <div style={{display:'flex',flexDirection:'row',marginTop:'5px',marginLeft:'10px'}}>
                <span style={{fontSize:"15px",fontWeight:'bold'}}>
                  {tenn.sname}
                </span>
                <DoneIcon className='done' style={{ fontSize: '15',marginTop:'5px',borderRadius: '50%', color:'white',backgroundColor:'blue',marginRight:'10px' }} />
                </div>
                <span style={{fontSize:'15px',marginTop:"5px"}}>
                  {modalData.content}
                </span>
                </div>
                <div className="modalrightcmt">
                  {modalData.cmts && modalData.cmts.map((cmt,index)=>(
                    <div className="modalrightcontent" style={{display:"flex",flexDirection:'row',marginBottom:'15px'}} key={index}>
                    <Avatar src={cmt.avatar}/>
                    <div style={{display:"flex",flexDirection:'column'}}>
                      <div style={{display:'flex',flexDirection:'row',marginLeft:'10px'}}>
                      <span style={{fontSize:"15px",marginRight:'10px',fontWeight:'600'}}>
                        {cmt.author}
                      </span>
                      <span style={{fontSize:'15px'}}>
                        {cmt.comment}
                      </span>
                      </div>

                      <div style={{marginLeft:'10px'}}>
                        <span style={{fontSize:"12px",marginRight:'10px',color:"grey"}}>
                          {cmt.time}
                        </span>
                        <span style={{fontSize:"12px",marginRight:'10px',color:"grey"}}>
                          {cmt.likes} likes
                        </span>
                        <span style={{fontSize:"12px",marginRight:'10px',color:"grey"}}>
                          Reply
                        </span>
                      </div>
                    </div>
                    
                    
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </Modal.Body>
      </div>
      <div className="modal-overlay" /> {/* Apply the CSS class */}
    </Modal>
      {activeSection === 'baidang' && (
        <div className="baidang">
          {anhs.map((post, index) => (
            <div className="baidang1" onClick={() => handleShow(post)}>
              <div className="baidang11">
                <img key={index} src={post.src} className="heto" alt="" />
                <div className="overlay">
                  <div className="caption">
                    <div className="like">
                      <FavoriteBorderRoundedIcon className="icontym"/>
                    <p className="tym">{post.like}</p>
                    </div>
                    <div className="cmt">
                      <ModeCommentOutlinedIcon className="icontym"/>
                    <p className="tym">{post.cmt}</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      )}
      {activeSection === 'baidangg' && (
        <div className="baidangg">
          {tenn.reel.map((post, index) => (
            <div className="baidangg1">
              <div className="baidangg11">
              <img key={index} src={post.src} className="heto" alt="" />
                <p className="reelview">{post.view}</p>
                <PlayArrowRoundedIcon className="reelicon"/>
                <div className="overlay">
                  <div className="caption">
                    <div className="like">
                      <FavoriteBorderRoundedIcon className="icontym"/>
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
      )}
      {activeSection === 'baidanggg' && (
        <div className="baidanggg">
          {tenn.tagged.map((post, index) => (
            <div className="baidang1">
              <div className="baidang11">
                <img key={index} src={post} className="heto" alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
    
  );
}

export default Timetail;
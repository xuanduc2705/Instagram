import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import "./modal.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { removeTokenFromSessionStorage } from '../Util/storageUtil';

function Modal({ setOpenModal }) {
    const name = 's.pinkduck_03';
    const [modalOpen, setModalOpen] = useState(false);
    const handleLogout = () => {
      // Remove the token from session storage
      removeTokenFromSessionStorage();
  
      // Additional logout logic if needed
  
      // Close the modal and navigate to the login page
      setOpenModal(false);
    };
 
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <div className="Switch"> Switch account</div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <span className='avatt' >
            
            <div className="thongtin">
            <Avatar className='heror'>
                <img src='https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg'  alt=''/>
                </Avatar>
                <div className='profileinfoo'
                  style={{display:'flex',flexDirection:'row',width:'80%'}}
                >
                <Link to={`/detail/${name}`}  className='usernameee' >{name}
                </Link>
                <CheckCircleIcon className="checkicon"/>
                
              </div>
            </div>
            
              </span>
              
        <div className="footer">
          <Link to={`/login`}  className='usernameeee'onClick={handleLogout}>
          <span className="logout" style={{textDecoration:'none'}} >Log in to an existed account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
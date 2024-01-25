import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import Modal from '../time/modal';

import '../time/profile.css';


function Profile() {
  const name = 's.pinkduck_03';
  const [modalOpen, setModalOpen] = useState(false);


  return (
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
              {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
  );
}


export default Profile;
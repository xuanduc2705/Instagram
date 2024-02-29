import { IoIosSettings } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import { HiOutlineBookmark } from "react-icons/hi";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoReport } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avatar } from '@mui/material';
import { IoIosArrowDown } from "react-icons/io";

const Move = props =>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.reload();
      navigate("/login")
    };
    return(
        <>
        <div className="" style={{display:'flex',flexDirection:'row',padding:'10px 0 10px 0',borderBottom:'2px solid lightgrey'}}>
            <div className="col-2" style={{display:'flex',margin:'0 auto',justifyContent:'center'}}>
                <IoIosSettings style={{fontSize:"30px"}}/>
            </div>
            <div className="col-8"style={{display:'flex',margin:'0 auto',justifyContent:'center'}} >
                <span style={{fontWeight:'600',cursor:'pointer'}} onClick={handleShow}>{props.name}<IoIosArrowDown /></span>
            </div>
            <div className="col-2"style={{display:'flex',margin:'0 auto',justifyContent:'center'}}>
                <IoPersonAddOutline style={{fontSize:"28px"}}/>
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
               <Link to={`/detail/s.pinkduck_03`}  className='usernameee'style={{textDecoration:'none',color:'black', marginRight:'6px'}} >s.pinkduck_03
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
        </>
    )
}
export default Move
import React from "react"
import Messnav from "../nav/messnav"
import './message.css'
import { PiNotePencil } from "react-icons/pi";
import { posts } from "../../data/detaildata";
import { Avatar } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdOutlineInfo } from "react-icons/md";
function Message(){
    const{name} = useParams();
  
    const tin = posts.find(post => post.sname === name);
    const [selectedNick, setSelectedNick] = useState(null);

    const handleNickClick = (sname, ava,chat,ten2,online) => {
      setSelectedNick({ sname, ava,chat,ten2,online});
    };
return(
    
    <div className="message" style={{marginLeft:'0px'}}>
        <div className="messnavv">
        <Messnav/>
        </div>
        <div className="messbenphai">
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
        <div className="messbentrai">
        {selectedNick ? (
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
             
            <div className="dinbox">
            {selectedNick.chat.map((message, index) => (
          <div key={index} className="inbox">
            <span className="fromme">{message.home}</span>
            <span className="fromher">{message.away}</span>
          </div>
        ))}
            </div>
            
          </div>
        ) : (
          <span>No nick selected</span>
        )}
        </div>
    </div>
)
}

export default Message
import Nav from "../nav/nav";
import React from "react";
import '../explore/explore.css'
import { useState } from "react";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import '../reels/reels.css'
import { Avatar } from "@mui/material";
import { reel } from "../../data/reelsdata";
import { FaMusic } from "react-icons/fa";
function Reels(){
return(
<div className="explore">
        <div className="reelnav">
        <Nav 
        explore={true}
        reels={false}
        />
        </div>
        <div className="reelslist">
        <div className="videolist">
          {reel.map((post, index) => (
            <div className="video">
                
                <img
                className="videoanh"
                alt=""
                src={post.src}
                />
                <div className="gocduoi">
                    <div className="tenreel">
                    <Avatar>
                        <img src={post.avatar} style={{width:'100%'}}/>
                    </Avatar>
                    <div className="tentaikhoan">
                    <span className="tennick">
                        {post.name}
                    </span>
                    <li></li>
                    <button className="followbutton">
                      Follow
                    </button>
                    </div>
                    </div>
                    <div className="contentreel">
                      {post.content}
                    </div>
                    <div className="musicreel">
                      <FaMusic className="musicicon"/>
                      {post.music}
                      <li style={{fontSize:'8px',marginTop:'6px',marginLeft:'6px'}}></li>
                      <span>
                        Original audio
                      </span>
                    </div>
                    
                </div>
            </div>
          ))}
        </div>
        </div>
    
</div>
);
}
export default Reels
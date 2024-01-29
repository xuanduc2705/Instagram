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
                        <img src={post.src}/>
                    </Avatar>
                    <span className="tentaikhoan">
                        {post.name}
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
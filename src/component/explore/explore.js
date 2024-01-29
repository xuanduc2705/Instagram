import Nav from "../nav/nav";
import React from "react";
import '../explore/explore.css'
import { useState } from "react";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { reel } from "../../data/reelsdata";

function Explore(){
return(
<div className="explore">
        <div className="reelnav">
        <Nav 
        explore={false}
        reels={true}
        />
        </div>
        <div className="reelslist">
        <div className="baidanggreel">
          {reel.map((post, index) => (
            <div className="baidangg1">
              <div className="baidangg11" style={{height:'320px'}}>
              <img key={index} src={post.src} className="heto" alt="" />
                <h3 className="reelview">{post.like}</h3>
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
        </div>
    
</div>
);
}
export default Explore
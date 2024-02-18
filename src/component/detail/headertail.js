import React from "react";
import { useState } from "react";
import '../detail/headertail.css';
import { useParams } from 'react-router-dom';
import DoneIcon from "@mui/icons-material/Done";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { posts } from "../../data/detaildata";

function Headertail() {
    const { name } = useParams();
    const tenn = posts.find(post => post.sname === name);
    const text = tenn.ten2;
  return (
    <div className="headertailpage">
        <div className="htrai">
        <div className="himage">
        <img 
        className="anh"
        src={tenn.ava} 
        alt=""
        />
        </div>
        <div className="iinfo1">
          <div className="detailname">
          <span className="infoname">
                {name}
          </span>
          <DoneIcon className='done' style={{ fontSize: '16',marginRight:'10',borderRadius: '50%', color:'white',backgroundColor:'blue',marginRight:'30px' }} />
          </div>
          <div className="detailbutt">
            <button className="but">Following</button>
            <button className="but">Message</button>
            <MoreHorizIcon style={{color:'black',fontSize:'25px'}} className="but2"/>
          </div>
        </div>
        </div>
        <div className="hinfo">
        <div className="info1">
            <span className="infoname">
                {name}
            </span>
            <DoneIcon className='done' style={{ fontSize: '16',marginRight:'10',borderRadius: '50%', color:'white',backgroundColor:'blue',marginRight:'30px' }} />
            <button className="but">Following</button>
            <button className="but">Message</button>
            <MoreHorizIcon style={{color:'black',fontSize:'25px'}} className="but2"/>
        </div>
        <div className="info2">
            <span className="info21">{tenn.posts}</span><span className="info22"> posts</span>
            <span className="info21">{tenn.followers}</span><span className="info22"> followers</span>
            <span className="info21">{tenn.following}</span><span className="info22"> following</span>
        </div>
        <div className="info3">
        <span className="info31">{tenn.ten2}</span>
  {tenn.tieusu ? (
    <span className="info32">
      {tenn.tieusu.split("\n").map((line, index) => (
        <div key={index} style={{ marginTop: '5px' }}>
          {line}
        </div>
      ))}
    </span>
  ) : null}
        </div>
        <div className="info4"></div>
        </div>
    </div>
  );
}

export default Headertail;
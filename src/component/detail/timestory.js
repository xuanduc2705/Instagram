import React from 'react';
import { useState } from "react";
import '../detail/timestory.css'
import { useParams } from 'react-router-dom';
import { posts } from '../../data/detaildata';


function TimeStory() {
    const{name} = useParams();
   
      const tenn = posts.find(post => post.sname === name);
      const anhs = tenn.image;
  return (
      <div className='timestory'>
        {anhs.map((post, index) => (
            <div className='yes'>
            <div className='covercover'>
             <div className='coverimage1'>
             <img key={index} src={post.src} className='heto' alt=''/>
             
             </div>
             
             </div>
             <div className='storyname'>{post.name}</div>
             </div>
        ))}
      </div>
  );
}

export default TimeStory;
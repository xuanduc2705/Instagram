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
    {anhs.slice(0, window.innerWidth < 600 ? 5 : anhs.length).map((post, index) => (
      <div className='yes' key={index}>
        <div className='covercover'>
          <div className='coverimage1'>
            <img src={post.src} className='heto' alt=''/>
          </div>
        </div>
        <div className='storyname'>{post.name}</div>
      </div>
    ))}
  </div>
  );
}

export default TimeStory;
import React from "react";
import Nav from "../nav/nav";
import '../detail/detail.css'
import Timetail from "./timetail";
import Headertail from "./headertail";
import TimeStory from "./timestory";

function Detail() {
  return (
    <div className="detailpage">
      <div className="detailpage_nav">
        <Nav 
        explore={true}
        reels={true}
        />
      </div>
      <div className="detailpage_time">
        <div className="header_tail">
          <Headertail/>
        </div>
        <div className="time_tail">
          <div className="time_story">
          <TimeStory className="time_story1"/>
          </div>
          <div className="time_tail2">
          <Timetail/>
          </div>
        
        </div>
        
        
      </div>
    </div>
  );
}

export default Detail;
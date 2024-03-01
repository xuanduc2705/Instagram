import React from "react";
import "../detail/detail.css";
import Timetail from "./timetail";
import Headertail from "./headertail";
import TimeStory from "./timestory";
import "bootstrap/dist/css/bootstrap.min.css";
import Move from "./move";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  return (
    <div className="detailpage">
      <div className="detailpage_time">
        <div className="header_tail">
          <div className="move">
            <Move
              name={location.pathname.substring(8, location.pathname.length)}
            />
          </div>
          <Headertail />
        </div>
        <div className="time_tail">
          <div className="time_story">
            <TimeStory className="time_story1" />
          </div>
          <div className="time_tail2">
            <Timetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

import React, { useEffect } from "react";
import { useState, useRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { Avatar } from "@mui/material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbBrandMessenger } from "react-icons/tb";
import SlideshowTwoToneIcon from "@mui/icons-material/SlideshowTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TimeLine from "../time/time";
import "../home/Home.css";

function Home() {
  return (
    <div className="homepage">
      <div className="homepage_time">
        <TimeLine />
      </div>
    </div>
  );
}

export default Home;

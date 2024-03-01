import React from "react";
import "../nav/nav.css";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { Avatar } from "@mui/material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { posts } from "../../data/detaildata";

const SearchNav = (props) => {
  const [ten, setTens] = useState(posts);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const handleCancelClick = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const isResult = query !== "" && inputRef.current.value !== "";
  return (
    <div className="slide-in-nav">
      <div className="AnotherNav">
        <div className="bentraii">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button
              className="sidenav_button"
              style={{ marginTop: "25px", marginBottom: "25px" }}
            >
              <InstagramIcon />
            </button>
          </Link>
          <div className="nav_buttons" style={{ marginLeft: "10px" }}>
            <Link
              to="/home"
              className="buts"
              style={{ textDecoration: "none" }}
            >
              <button className="sidenav_button2">
                <HomeOutlinedIcon style={{ fontSize: "27px" }} />
              </button>
            </Link>
            <button
              className="sidenav_button2"
              onClick={props.onClick}
              style={{
                width: "40px",
                height: "40px",
                border: "1px lightgrey solid",
                justifyContent: "center",
                marginLeft: "3px",
              }}
            >
              <SearchIcon className="buts" />
            </button>
            <Link to={"/explore"}>
              <button className="sidenav_button2">
                <ExploreOutlinedIcon className="buts" />
              </button>
            </Link>
            <Link to={"/reels"}>
              <button className="sidenav_button2">
                <SlideshowIcon className="buts" />
              </button>
            </Link>
            <Link to="/message" style={{ textDecoration: "none" }}>
              <button className="sidenav_button2">
                <ChatIcon className="buts" />
              </button>
            </Link>
            <button className="sidenav_button2" onClick={props.onClick2}>
              <FavoriteBorderIcon className="buts" />
            </button>
            <button className="sidenav_button2">
              <AddCircleOutlineIcon className="buts" />
            </button>
            <div className="sidenav_more">
              <button className="sidenav_button2">
                <MenuIcon className="buts" />
              </button>
            </div>
          </div>
        </div>
        <div className="benphai">
          <div className="benphaitren">
            <h1>Search</h1>
            <div className="inputsize">
              <input
                className="searchinput"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                ref={inputRef}
              />
              <CancelIcon
                className="x"
                style={{ fontSize: "17px", color: "grey", marginTop: "3px" }}
                onClick={handleCancelClick}
              />
            </div>
          </div>
          <div className="benphaiduoi">
            {isResult ? (
              <ul className="listt">
                {ten
                  .filter((asd) => asd.sname.toLowerCase().includes(query))
                  .map((item) => (
                    <Link to={`/detail/${item.sname}`} className="post_authorr">
                      <div className="listItem" key={item.id}>
                        <Avatar>
                          <img
                            src={item.ava}
                            alt={item.sname}
                            className="heo"
                          />
                        </Avatar>
                        <div className="namesearch">
                          <span className="tensearch">{item.sname}</span>
                          <span className="fullnamesearch">{item.ten2}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </ul>
            ) : (
              <div className="searcher">
                <span>No recent searches.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchNav;

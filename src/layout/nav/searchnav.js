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

const SearchNav = (props) => {
  const [ten, setTens] = useState([
    {
      stoava:
        "https://i.ibb.co/qkhmRLp/418758070-2278354819026761-6414880944565960628-n.jpg",
      name: "hathu_87",
      fullname: "Pham Thu Ha",
    },
    {
      stoava:
        "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/177549202_320774429402765_4463919220949422685_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGDmc0saVSUmf0AXUm77tjZcfAnf2O5bX1x8Cd_Y7ltfYj9vqtg0P2s6p3pOdP0mjxwbgBGuMURUFRHrpdWCseT&_nc_ohc=zS7IXsaXazQAX-gdvxW&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB9MX7giHeCewTjwAjiYo8iCCYIZ5rLxXkkYOUDl5Y4LQ&oe=65D05C38",
      name: "chuyencuahanoi.official",
      fullname: "Chuyen cua Ha Noi",
    },
    {
      stoava:
        "https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj",
      name: "sontungmtp",
      fullname: "Son Tung MTP",
    },
    {
      stoava:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1280px-Manchester_United_FC_crest.svg.png",
      name: "manchesterunitedoficial",
      fullname: "Manchester United",
    },
    {
      stoava:
        "https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg",
      name: "judebellingham",
      fullname: "Jude Bellingham",
    },
    {
      stoava:
        "https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg",
      name: "leomessi",
      fullname: "Lionel Messi",
    },
    {
      stoava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s",
      name: "cristiano",
      fullname: "Cristiano Ronaldo",
    },
  ]);
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
                  .filter((asd) => asd.name.toLowerCase().includes(query))
                  .map((item) => (
                    <Link to={`/detail/${item.name}`} className="post_authorr">
                      <div className="listItem" key={item.id}>
                        <Avatar>
                          <img
                            src={item.stoava}
                            alt={item.name}
                            className="heo"
                          />
                        </Avatar>
                        <div className="namesearch">
                          <span className="tensearch">{item.name}</span>
                          <span className="fullnamesearch">
                            {item.fullname}
                          </span>
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

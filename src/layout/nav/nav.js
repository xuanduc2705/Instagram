import React from "react";
import "../nav/nav.css";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
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
import { TbBrandMessenger } from "react-icons/tb";
import SlideshowTwoToneIcon from "@mui/icons-material/SlideshowTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup, DropdownButton } from "react-bootstrap";
import { IoIosSettings } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { HiOutlineBookmark } from "react-icons/hi";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoReport } from "react-icons/go";
import Modal from "react-bootstrap/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import ModalLogin from "./modalLogin";

const Nav = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("avatar");
    window.location.reload();
    navigate("/login");
  };
  return (
    <>
      <div className="Nav">
        <Link to="/home">
          <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="nav_buttons">
          <Link
            to="/home"
            style={{ textDecoration: "none" }}
            className="showing"
          >
            <button
              className="sidenav_button showing"
              style={{ marginTop: "25px", marginBottom: "25px" }}
            >
              <InstagramIcon />
              <span className="spann">Home</span>
            </button>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button className="sidenav_button">
              <HomeOutlinedIcon />
              <span className="spann">Home</span>
            </button>
          </Link>
          <button className="sidenav_button hidding" onClick={props.onClick}>
            <SearchIcon />
            <span className="spann">Search</span>
          </button>
          <Link to="/explore" style={{ textDecoration: "none" }}>
            {true ? (
              <button className="sidenav_button">
                <ExploreOutlinedIcon />
                <span className="spann">Explore</span>
              </button>
            ) : (
              <button className="sidenav_button23">
                <ExploreIcon />
                <span className="spann">Explore</span>
              </button>
            )}
          </Link>
          <Link to="/reels" style={{ textDecoration: "none" }}>
            {true ? (
              <button className="sidenav_button">
                <SlideshowIcon />
                <span className="spann">Reels</span>
              </button>
            ) : (
              <button className="sidenav_button23">
                <SlideshowTwoToneIcon />
                <span className="spann">Reels</span>
              </button>
            )}
          </Link>
          <Link to="/message" style={{ textDecoration: "none" }}>
            <button className="sidenav_button">
              <TbBrandMessenger className="messicon" />
              <span className="spann">Messages</span>
            </button>
          </Link>
          <button className="sidenav_button hidding" onClick={props.onClick2}>
            <FavoriteBorderIcon />
            <span className="spann">Notifications</span>
          </button>

          <Link to={"/detail/s.pinkduck_03"}>
            <div className="profileava">
              <Avatar
                src="https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg"
                alt=""
                style={{ margin: "7px 40px 0 0" }}
              />
            </div>
          </Link>
          <div className="sidenav_more hidding">
            {["up"].map((direction) => (
              <DropdownButton
                className="sidenav_button"
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title={
                  <span>
                    <MenuIcon />
                    <span className="spann" style={{ color: "white" }}>
                      More
                    </span>
                  </span>
                }
                style={{
                  backgroundColor: "white",
                  background: "none",
                  color: "white",
                }}
              >
                <Dropdown.Item eventKey="1">
                  <IoIosSettings
                    style={{ fontSize: "25px", margin: "0 8px 0 5px" }}
                  />{" "}
                  Setting
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <VscGraphLine
                    style={{ fontSize: "25px", margin: "0 8px 0 5px" }}
                  />{" "}
                  Your activity
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  <HiOutlineBookmark
                    style={{ fontSize: "25px", margin: "0 8px 0 5px" }}
                  />{" "}
                  Saved
                </Dropdown.Item>
                <Dropdown.Item eventKey="4">
                  <MdOutlineWbSunny
                    style={{ fontSize: "25px", margin: "0 8px 0 5px" }}
                  />{" "}
                  Switch Appearance
                </Dropdown.Item>
                <Dropdown.Item eventKey="5">
                  <GoReport
                    style={{ fontSize: "25px", margin: "0 8px 0 5px" }}
                  />{" "}
                  Report a problem!
                </Dropdown.Item>
                <Dropdown.Divider style={{ width: "300px" }} />
                <Dropdown.Item eventKey="6" onClick={handleShow}>
                  Switch Accounts
                </Dropdown.Item>
                <Dropdown.Divider style={{ width: "300px" }} />

                <Dropdown.Item eventKey="7" onClick={handleLogout}>
                  Log out
                </Dropdown.Item>
              </DropdownButton>
            ))}
          </div>
        </div>
      </div>
      <ModalLogin show={show} onClick={handleClose} />
    </>
  );
};

export default Nav;

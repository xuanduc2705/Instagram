import React from "react";
import "../nav/nav.css";
import HomeIcon from "@mui/icons-material/Home";
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
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { Avatar } from "@mui/material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbBrandMessenger } from "react-icons/tb";
import SlideshowTwoToneIcon from "@mui/icons-material/SlideshowTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PiMessengerLogoFill } from "react-icons/pi";
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
const Messnav = (props) => {
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
      <div className="messnav">
        <div className="bentraii">
          <Link
            to="/home"
            style={{ textDecoration: "none" }}
            className="messshowing"
          >
            <button
              className="sidenav_button messshowing"
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
              className="sidenav_button2 hidding"
              style={{
                width: "40px",
                height: "40px",
                justifyContent: "center",
                marginLeft: "3px",
              }}
            >
              <SearchIcon className="buts" onClick={props.onClick} />
            </button>
            <Link to="/explore" style={{ textDecoration: "none" }}>
              <button className="sidenav_button2">
                <ExploreOutlinedIcon className="buts" />
              </button>
            </Link>
            <Link to="/reels" style={{ textDecoration: "none" }}>
              <button className="sidenav_button2">
                <SlideshowIcon className="buts" />
              </button>
            </Link>
            <button className="sidenav_button2">
              <PiMessengerLogoFill
                className="buts"
                style={{ fontSize: "24px" }}
              />
            </button>

            <button
              className="sidenav_button2 hidding"
              onClick={props.onClick2}
            >
              <FavoriteBorderIcon className="buts" />
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
            <div className="sidenav_more">
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
                    </span>
                  }
                  style={{
                    backgroundColor: "white",
                    background: "none",
                    color: "white",
                    margin: "0",
                    padding: "0",
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
      </div>
      <ModalLogin show={show} onClick={handleClose} />
    </>
  );
};

export default Messnav;

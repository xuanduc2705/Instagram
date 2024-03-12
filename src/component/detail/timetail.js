import React, { useEffect } from "react";
import { useState } from "react";
import "../detail/timetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GridOnIcon from "@mui/icons-material/GridOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useParams } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { posts } from "../../data/detaildata";
import ModalPost from "./modalPost";
import { getListUser, DeleteUser } from "../../lib/axios";
import { Button } from "react-bootstrap";

function Timetail() {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleShow = (data) => {
    setModalData(data);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const { name } = useParams();
  const tenn = posts.find((post) => post.sname === name);
  const anhs = tenn.post;
  const [activeSection, setActiveSection] = useState("baidang");
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  const [userdata, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getListUser();
      if (response?.data) setData(response.data);
    };
    fetchData();
  }, []);
  const handleDeleteUser = async (userId) => {
    try {
      await DeleteUser(userId);
      // Remove the deleted user from the userdata state
      setData((prevData) => prevData.filter((user) => user.id !== userId));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };
  return (
    <div className="timetailpage">
      <div className="buto">
        <button
          className={`buto1 ${activeSection === "baidang" ? "active" : ""}`}
          onClick={() => handleButtonClick("baidang")}
        >
          <GridOnIcon style={{ fontSize: "11px" }} /> POSTS
        </button>
        <button
          className={`buto1 ${activeSection === "baidangg" ? "active" : ""}`}
          onClick={() => handleButtonClick("baidangg")}
        >
          <InstagramIcon style={{ fontSize: "11px" }} /> REELS
        </button>
        <button
          className={`buto1 ${activeSection === "baidanggg" ? "active" : ""}`}
          onClick={() => handleButtonClick("baidanggg")}
        >
          <PortraitIcon style={{ fontSize: "11px" }} /> TAGGED
        </button>
      </div>
      <div className="butohide">
        <button
          className={`buto1 ${activeSection === "baidang" ? "active" : ""}`}
          onClick={() => handleButtonClick("baidang")}
        >
          <GridOnIcon style={{ fontSize: "20px" }} />
        </button>
        <button
          className={`buto1 ${activeSection === "baidangg" ? "active" : ""}`}
          onClick={() => handleButtonClick("baidangg")}
        >
          <InstagramIcon style={{ fontSize: "20px" }} />
        </button>
        <button
          className={`buto1 ${activeSection === "baidanggg" ? "active" : ""}`}
          onClick={() => handleButtonClick("baidanggg")}
        >
          <PortraitIcon style={{ fontSize: "20px" }} />
        </button>
      </div>
      <ModalPost
        show={show}
        onClick={handleClose}
        modalData={modalData}
        tenn={tenn}
      />
      {activeSection === "baidang" && (
        <div className="baidang">
          {anhs.map((post, index) => (
            <div className="baidang1" onClick={() => handleShow(post)}>
              <div className="baidang11">
                <img key={index} src={post.src} className="heto" alt="" />
                <div className="overlay">
                  <div className="caption">
                    <div className="like">
                      <FavoriteBorderRoundedIcon className="icontym" />
                      <p className="tym">{post.like}</p>
                    </div>
                    <div className="cmt">
                      <ModeCommentOutlinedIcon className="icontym" />
                      <p className="tym">{post.cmt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeSection === "baidangg" && (
        <div className="baidangg">
          {tenn.reel.map((post, index) => (
            <div className="baidangg1">
              <div className="baidangg11">
                <img key={index} src={post.src} className="heto" alt="" />
                <p className="reelview">{post.view}</p>
                <PlayArrowRoundedIcon className="reelicon" />
                <div className="overlay">
                  <div className="caption">
                    <div className="like">
                      <FavoriteBorderRoundedIcon className="icontym" />
                      <h3 className="tym">{post.like}</h3>
                    </div>
                    <div className="cmt">
                      <ModeCommentOutlinedIcon className="icontym" />
                      <h3 className="tym">{post.cmt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeSection === "baidanggg" && (
        <div className="baidanggg">
          {userdata &&
            userdata[0] &&
            userdata.map((user, index) => (
              <>
                <Button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </Button>
                <h1>{user.name}</h1>
              </>
            ))}
        </div>
      )}
    </div>
  );
}

export default Timetail;

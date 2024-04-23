import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "../time/index.css";
import Suggestion from "./suggestion";
import Story from "./story";
import Post from "./post";
import { useState, useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { getTokenFromSessionStorage } from "../Util/storageUtil";
import ModalLogin from "../../layout/nav/modalLogin";
import { Button } from "react-bootstrap";
import { IoAddCircleOutline } from "react-icons/io5";
import { getListPost, getPostbyId } from "../../lib/axios";
import ModalPost from "../detail/modalPost";
function TimeLine(props) {
  const { setShowCreate, load, setLoad } = props;
  const [show, setShow] = useState(false);
  const [showpost, setShowPost] = useState(false);
  const [postid, setPostId] = useState();
  const [datapost, setDataPost] = useState();
  const handleClickImg = async (item) => {
    setDataPost(item);
    setShowPost(true);
    setPostId(item.id);
  };
  const handleShow = () => setShow(true);
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = getTokenFromSessionStorage();
    setToken(storedToken);
  }, []);
  const [comments, setComments] = useState([]);
  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  const name = localStorage.getItem("nickname");
  const ten2 = localStorage.getItem("name");
  const ava = localStorage.getItem("avatar");
  const [listpost, setListPost] = useState();
  const fetchListPost = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const lpost = await getListPost();
      setListPost(lpost);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchListPost = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const lpost = await getListPost();
        setListPost(lpost);
      } catch (error) {
        console.error(error);
      }
    };
    const Loading = async () => {
      const data = await getPostbyId(postid);
      setDataPost(data);
    };
    fetchListPost();
    Loading();
  }, [load]);
  const [stos, setStos] = useState([
    {
      stoava:
        "https://i.ibb.co/qkhmRLp/418758070-2278354819026761-6414880944565960628-n.jpg",
      name: "hathu_87",
    },
    {
      stoava:
        "https://image.viettimes.vn/1200x630/Uploaded/2024/livospwi/2020_07_03/chipu-910143_372020.jpg",
      name: "chipupu",
    },
    {
      stoava:
        "https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj",
      name: "sontungmtp",
    },
    {
      stoava:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1280px-Manchester_United_FC_crest.svg.png",
      name: "manchester...",
    },
    {
      stoava:
        "https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg",
      name: "judebellin...",
    },
    {
      stoava:
        "https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg",
      name: "leomessi",
    },
    {
      stoava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s",
      name: "cristiano",
    },
  ]);
  const calculateTimeFromNow = (createdAt) => {
    const currentTime = new Date();
    const postCreatedAt = new Date(createdAt);
    const timeDiff = Math.round((currentTime - postCreatedAt) / 60000);

    if (timeDiff < 60) {
      if (timeDiff == 0) {
        return "just now";
      }
      return `${timeDiff} minutes ago`;
    } else if (timeDiff < 1440) {
      const hoursDiff = Math.floor(timeDiff / 60);
      return `${hoursDiff} hours ago`;
    } else {
      const daysDiff = Math.floor(timeDiff / 1440);
      return `${daysDiff} days ago`;
    }
  };

  return (
    <div className="timeline">
      <div className="time">
        <div className="timeline_left">
          <div className="story_left">
            <div className="story">
              {stos.map((sto) => (
                <Story stoava={sto.stoava} name={sto.name} />
              ))}
            </div>
            <NavigateNextIcon className="nextIcon" />
          </div>
          <div className="d-flex justify-content-center py-4">
            <Button
              style={{ color: "black", backgroundColor: "transparent" }}
              className="mx-auto button_create"
              onClick={() => setShowCreate(true)}
            >
              <IoAddCircleOutline
                style={{ fontSize: "3vh", margin: "0 5px 3px 0" }}
              />
              ADD POST
            </Button>
          </div>
          <div className="timeline_post">
            {listpost
              ?.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((post) => (
                <>
                  <Post
                    ava={post.User.avatar}
                    image={post.img}
                    sname={post.User.nickname}
                    like={post.likes}
                    time={calculateTimeFromNow(post.createdAt)}
                    content={post.title}
                    postt="340"
                    following="3m"
                    followers="27.052.003"
                    pos1=""
                    pos2=""
                    pos3=""
                    cmt=""
                    onAddComment={handleAddComment}
                    comment={post?.Comments}
                    data={post}
                    handleClickImg={() => handleClickImg(post)}
                    fetchListPost={fetchListPost}
                  />
                  {/* <button onClick={() => handleClickImg(post)}>hhhhh</button> */}
                </>
              ))}
          </div>
        </div>
        <div className="timelibe_right">
          <div className="profile">
            <div className="pro">
              <div className="file">
                <span className="avat">
                  <Avatar>
                    <img src={ava} className="hero" alt="" />
                  </Avatar>
                </span>
                <div className="profileinfo">
                  <Link to={`/detail/${name}`} className="usernamee">
                    {name}
                  </Link>
                  <span className="relationn">{ten2}</span>
                </div>
              </div>
              <button className="Follow_button" onClick={handleShow}>
                Switch
              </button>
            </div>
          </div>
          <Suggestion />
        </div>
      </div>
      <ModalLogin show={show} onClick={() => setShow(true)} />
      <ModalPost
        showpost={showpost}
        setShowPost={setShowPost}
        modaldata={datapost}
        time={calculateTimeFromNow(datapost?.createdAt)}
        setLoad={setLoad}
        fetchListPost={fetchListPost}
        postid={postid}
      />
    </div>
  );
}

export default TimeLine;

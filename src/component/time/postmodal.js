import { Avatar, Input, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { GoArrowLeft } from "react-icons/go";
import { addPost } from "../../lib/axios";
import firebase from "firebase/app";
import { firebaseConfig } from "../../firsebase/firebase";
import "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const PostModal = (props) => {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyANV6rDt49GXTo4jneVGNu_w1Qsk8G6fuM",
  //   authDomain: "insta-cee90.firebaseapp.com",
  //   projectId: "insta-cee90",
  //   storageBucket: "insta-cee90.appspot.com",
  //   messagingSenderId: "828888752375",
  //   appId: "1:828888752375:web:91312ef6360fbfdda373f2",
  //   measurementId: "G-TSVL2YVHQ7",
  // };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const { setShowCreate, show, setLoad } = props;
  const [title, setTitle] = useState("");
  const [imageList, setImageList] = useState();
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const imageListRef = storageRef.child("images/");
  const [imageupload, setImageUpload] = useState(null);
  useEffect(() => {
    if (!show) {
      setImageList("");
      setLoad(false);
    }
  }, [show]);
  const ava = localStorage.getItem("avatar");
  const nickname = localStorage.getItem("nickname");
  const id = localStorage.getItem("id");
  const handleCreate = async () => {
    if (title !== null && title != "") {
      await addPost(id, imageList, title);
      setShowCreate(false);
      setLoad(true);
    }
  };
  const uploadImage = () => {
    if (imageupload === null) return;

    const imageRef = storageRef.child(`images/${imageupload.name + uuidv4()}`);
    imageRef.put(imageupload).then(() => {
      alert("Select image successfully!!!");

      imageRef.getDownloadURL().then((downloadURL) => {
        setImageList(downloadURL);
      });
    });
  };
  const handleClose = () => {
    setShowCreate(false);
    setImageUpload();
  };
  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title style={{ fontSize: "14px" }}>
          <div
            className="d-flex justify-content-between w-full"
            style={{ width: "770px" }}
          >
            <span>
              <GoArrowLeft style={{ fontSize: "3vh" }} />
            </span>
            <span>Create Post</span>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={handleCreate}
            >
              Create
            </span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          height: "60vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="flex flex-column"
          style={{ width: "50%", paddingLeft: "20px" }}
        >
          {!imageList ? (
            <>
              <input
                type="file"
                onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}
              />
              {imageupload && (
                <button onClick={uploadImage}>Accept Image</button>
              )}
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "2vh",
                }}
              >
                <Avatar alt="Remy Sharp" src={ava} />
                <span className="px-3 py-1">{nickname}</span>
              </div>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={10}
                style={{ width: "80%" }}
                onChange={(e) => setTitle(e.target.value.trim())}
              />
            </>
          )}
        </div>
        <img src={imageList} style={{ width: "50%" }} />
      </Modal.Body>
    </Modal>
  );
};

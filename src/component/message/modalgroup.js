import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useNavigate } from "react-router-dom";

const ModalGroup = (props) => {
  const navigate = useNavigate();

  const nickname = sessionStorage.getItem("nickname");
  return (
    <Modal show={props.show} onHide={props.onClick} centered>
      <Modal.Header closeButton>
        <Modal.Title
          style={{ fontSize: "20px", textAlign: "center", marginLeft: "23%" }}
        >
          Add to new Group Chatbox?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "600px" }}>
        {/* <div style={{ display: "flex" }}>
          <input
            className="searchinput"
            placeholder="Create groupname"
            style={{
              width: "70%",
              margin: "0 auto",
            }}
          />
        </div> */}

        <span className="avatt">
          <div
            className="thongtin"
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "10px",
            }}
          >
            <Avatar className="hero">
              <img src={{}} style={{ width: "100%" }} alt="" />
            </Avatar>
            <div
              className="profileinfoo"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                marginLeft: "10px",
                marginTop: "4px",
              }}
            >
              <Link
                to={`/detail/s.pinkduck_03`}
                className="usernameee"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "6px",
                }}
              >
                ???
              </Link>
              <CheckCircleIcon className="checkicon" />
            </div>
          </div>
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Link>
          <Button onClick={props.onClick2}>Add</Button>
        </Link>
        <Button onClick={props.onClick}>Exit</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalGroup;

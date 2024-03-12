import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useNavigate } from "react-router-dom";

const ModalAdd = (props) => {
  const navigate = useNavigate();

  const nickname = sessionStorage.getItem("nickname");
  return (
    <Modal show={props.show} onHide={props.onClick} centered>
      <Modal.Header closeButton>
        <Modal.Title
          style={{ fontSize: "14px", textAlign: "center", marginLeft: "36%" }}
        >
          Add {props.name.nickname} to new chatbox?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "100px" }}>
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
              <img src={props.name.avatar} style={{ width: "100%" }} alt="" />
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
                {props.name.nickname}
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
export default ModalAdd;

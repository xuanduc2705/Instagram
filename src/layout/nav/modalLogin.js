import React from "react";
import "../nav/nav.css";
import { Modal } from "react-bootstrap";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useNavigate } from "react-router-dom";

const ModalLogin = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  };
  return (
    <Modal show={props.show} onHide={props.onClick} centered>
      <Modal.Header closeButton>
        <Modal.Title
          style={{ fontSize: "14px", textAlign: "center", marginLeft: "36%" }}
        >
          Switch accounts
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "160px" }}>
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
              <img
                src="https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg"
                style={{ width: "100%" }}
                alt=""
              />
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
                s.pinkduck_03
              </Link>
              <CheckCircleIcon className="checkicon" />
            </div>
          </div>
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Link
          to={`/login`}
          style={{
            textDecoration: "none",
            marginRight: "6px",
            margin: "0 auto",
          }}
          className="usernameeee"
          onClick={handleLogout}
        >
          <span className="logout">Log in to an existed account</span>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalLogin;

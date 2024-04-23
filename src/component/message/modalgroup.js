import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { createBoxchat } from "../../lib/axios";
const ModalGroup = ({
  showAddGroup,
  handleGroupClose,
  accountt,
  listadd,
  handleRemove,
  setListadd,
  setListaddmem,
  setAccountt,
  setQuerygroup,
  listaddmem,
  querygroup,
  id,
  setShow,
  setSelectuser,
}) => {
  const navigate = useNavigate();
  const inputReff = useRef(null);
  console.log(accountt);
  const [queryf, setQueryf] = useState("");
  const handleAddtoGroup = (item) => {
    setListaddmem((prevListadd) => [...prevListadd, item.nickname]);
    setListadd((prevListadd) => [...prevListadd, item]);
    setAccountt((prevListadd) =>
      prevListadd.filter((listItem) => listItem !== item)
    );
    setQueryf("");
  };
  const handleAddnewGroup = async () => {
    try {
      const host = id;
      const partner = listaddmem.concat(id);
      const isg = true;
      const avatar1 = "";
      const avatar2 = "";
      let groupname = querygroup;
      if (querygroup == "" || querygroup == null) {
        groupname = "unnamed_group";
      }
      const response = await createBoxchat(
        host,
        partner,
        isg,
        avatar1,
        avatar2,
        groupname
      );
      setShow(false);
      console.log("Boxchat added successfully:", response);
    } catch (error) {
      console.error("Failed to add boxchat:", error);
    }
    setSelectuser("");
    setQuerygroup("");
    window.location.reload();
  };
  const isResultf = queryf !== "" && inputReff.current?.value !== "";
  const nickname = sessionStorage.getItem("nickname");
  return (
    <Modal show={showAddGroup} onHide={handleGroupClose} centered>
      <Modal.Header closeButton>
        <Modal.Title
          style={{ fontSize: "20px", textAlign: "center", marginLeft: "23%" }}
        >
          Add to new Group Chatbox?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "600px" }}>
        <div style={{ display: "flex" }}>
          <input
            className="searchinput"
            placeholder="Create groupname"
            style={{
              width: "70%",
              margin: "0 auto",
              marginBottom: "30px",
            }}
            onChange={(e) => setQuerygroup(e.target.value.toLowerCase())}
            ref={inputReff}
          />
          <input
            className="searchinput"
            placeholder="Add member"
            style={{
              width: "70%",
              margin: "0 auto",
              marginBottom: "30px",
            }}
            onChange={(e) => setQueryf(e.target.value.toLowerCase())}
            ref={inputReff}
          />
          {isResultf ? (
            <ul
              className="listt"
              style={{
                position: "absolute",
                top: "50px",
                left: "30px",
                backgroundColor: "white",
                width: "80%",
                padding: "10px",
              }}
            >
              {accountt
                .filter((asd) => asd.nickname.toLowerCase().includes(queryf))
                .map((item) => (
                  <div
                    className="listItem"
                    style={{ width: "100%" }}
                    onClick={() => handleAddtoGroup(item)}
                  >
                    <Avatar>
                      <img src={item.avatar} alt={item.name} className="heo" />
                    </Avatar>
                    <div className="namesearch">
                      <span className="tensearch">{item.nickname}</span>
                      <span className="fullnamesearch">{item.name}</span>
                    </div>
                  </div>
                ))}
            </ul>
          ) : (
            <>
              <ul
                className="listt"
                style={{
                  position: "absolute",
                  top: "50px",
                  backgroundColor: "white",
                  width: "97%",
                  padding: "10px",
                }}
              >
                {listadd.map((item) => (
                  <div
                    className="listItem"
                    style={{
                      width: "70%",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Avatar>
                        <img
                          src={item.avatar}
                          alt={item.host}
                          className="heo"
                        />
                      </Avatar>
                      <div className="namesearch">
                        <span className="tensearch">{item.nickname}</span>
                        <span className="fullnamesearch">{item.name}</span>
                      </div>
                    </div>
                    <MdCancel
                      onClick={() => handleRemove(item)}
                      style={{ fontSize: "23px" }}
                    />
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>

        <span className="avatt"></span>
      </Modal.Body>
      <Modal.Footer>
        <Link>
          <Button onClick={handleAddnewGroup}>Add</Button>
        </Link>
        <Button onClick={handleGroupClose}>Exit</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalGroup;

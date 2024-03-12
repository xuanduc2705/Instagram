import React from "react";
import Messnav from "../../layout/nav/messnav";
import "../../layout/nav/nav.css";
import "./message.css";
import { MdCancel } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { posts } from "../../data/detaildata";
import { Avatar } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { MdOutlineInfo } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect, useRef } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import socketIOClient from "socket.io-client";
import "./socket.css";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineGroupAdd } from "react-icons/md";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Modal } from "react-bootstrap";
import {
  createBoxchat,
  getListAccount,
  getListBoxchat,
  getMessage,
} from "../../lib/axios";
import ModalAdd from "./modaladd";
import ModalGroup from "./modalgroup";
const host = "http://localhost:8000";
function Message() {
  const { name } = useParams();
  const [selectedNick, setSelectedNick] = useState(null);
  const [avachose, setAvachose] = useState("");
  const [select, setSelect] = useState();
  const [choosing, setChoosing] = useState();
  const [chatid, setChatid] = useState();
  const [mess, setMess] = useState([]);
  const [messes, setMesses] = useState([]);
  const handleChoose = (item, ava, fa) => {
    setChoosing(item);
    setAvachose(ava);
    setSelect(fa);
  };
  const [commentText, setCommentText] = useState("");
  const [IsSend, SetIsSend] = useState(true);
  const handleSendText = (event) => {
    const inputValue = event.target.value;
    setCommentText(inputValue);
    SetIsSend(inputValue.length <= 0);
  };
  const handleSendSubmit = () => {
    if (commentText !== "") {
      const newComment = {
        home: commentText,
      };
      const updatedChat = [...selectedNick.chat, newComment];
      setSelectedNick((prevNick) => ({
        ...prevNick,
        chat: updatedChat,
      }));
      setCommentText("");
      SetIsSend(true);
    }
  };
  const [messchose, setMesschose] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(localStorage.getItem("nickname"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const socketRef = useRef();
  console.log("mess>>" + mess);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getListBoxchat();
      if (response) setMesschose(response);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const ress1 = messchose.filter((item) => item.isGroupchat === false);
    const ress2 = messchose.filter((item) => item.isGroupchat === true);

    const ress = messchose.filter((item) => item.boxchatid == choosing);

    const ressgroup = ress2.filter((item) => item.boxchatid == choosing);

    if (ress.length > 0) {
      setMess(ress);
    }
  }, [messchose, choosing]);

  const [account, setAccount] = useState([]);
  const [accountt, setAccountt] = useState([]);
  const [messacount, setMessAccount] = useState([]);
  const [messgroup, setMessGroup] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getListAccount();
      if (response) {
        const filteredResponse = response.filter(
          (item) => item.nickname !== id
        );
        setAccount(filteredResponse);
        setAccountt(filteredResponse);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getListAccount();
      const response2 = await getListBoxchat();

      if (response) {
        const nicknames = response.filter((item) => item);
        const member1 = response2.map((item) => item);
        const member2 = response2.map((item) => item);
        const mem1 = member1.filter(
          (item) => item.member.includes(id) && item.isGroupchat === false
        );
        const mem2 = member2.filter(
          (item) => item.host == id && item.isGroupchat === false
        );
        const mergedMembers = [...mem1, ...mem2];
        const merge = response.filter((item) =>
          mergedMembers.includes(item.nickname)
        );
        const group = response2.filter((item) => item.isGroupchat == true);
        setMessAccount(mergedMembers);
        setMessGroup(group);
      }
    };
    fetchData();
  }, []);
  console.log("acc>>>" + mess);

  const [hello, setHello] = useState([]);
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
      setId(data);
    });
    socketRef.current.on("sendDataServer", (dataGot) => {
      setHello((oldMsgs) => [...oldMsgs, dataGot.data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  console.log("hello>>" + hello);
  const [selectuser, setSelectuser] = useState("");
  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        isGroupchat: select,
        boxchatid: choosing,
        content: message,
        id: id,
        avatar: avatar,
      };
      socketRef.current.emit("sendDataClient", msg);
      setMessage("");
    }
  };
  const [ava1, setAva1] = useState("");
  useEffect(() => {
    setAva1(localStorage.getItem("avatar"));
  }, []);
  const [ava2, setAva2] = useState("");
  console.log("chosing>>" + choosing);
  const handleAdd = async () => {
    try {
      const host = id;
      const partner = selectuser;
      const isg = false;
      const avatar1 = ava1;
      const avatar2 = ava2;
      const groupname = "";
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
    window.location.reload();
  };
  console.log("messacount" + messacount);
  const renderMess = mess.map((m, index) => (
    <div key={index} className={`${"other-people"} chat-item`}>
      {m.content}
    </div>
  ));

  const handleChange = (e) => {
    setMessage(e.target.value);
    const inputValue = e.target.value;
    setCommentText(inputValue);
    SetIsSend(inputValue.length <= 0);
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      sendMessage();
    }
  };
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const inputReff = useRef(null);
  const [queryf, setQueryf] = useState("");
  const [querygroup, setQuerygroup] = useState("");
  const handleCancelClick = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  console.log(querygroup);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const [useradd, setUseradd] = useState({});
  const handleShowAdd = (item) => {
    setShow(true);
    setUseradd(item);
    setSelectuser(item.nickname);
    setAva2(item.avatar);
  };
  const [showAddGroup, setShowAddGroup] = useState(false);
  const handleGroupClose = () => {
    setShowAddGroup(false);
  };
  const handleShowAddGroup = () => {
    setShowAddGroup(true);
  };
  const [listadd, setListadd] = useState([]);
  const [listaddmem, setListaddmem] = useState([]);
  const handleAddtoGroup = (item) => {
    setListaddmem((prevListadd) => [...prevListadd, item.nickname]);
    setListadd((prevListadd) => [...prevListadd, item]);
    setAccountt((prevListadd) =>
      prevListadd.filter((listItem) => listItem !== item)
    );
    setQueryf("");
  };
  const handleRemove = (item) => {
    setListadd((prevListadd) =>
      prevListadd.filter((listItem) => listItem !== item)
    );
    setListaddmem((prevListadd) =>
      prevListadd.filter((listItem) => listItem !== item.nickname)
    );
  };
  useEffect(() => {
    console.log("Updated listadd:", listadd);
    console.log("Updated listadd:", listaddmem);
  }, [listadd, listaddmem]);
  const handleAddnewGroup = async () => {
    try {
      const host = id;
      const partner = listaddmem.concat(id);
      const isg = true;
      const avatar1 = "";
      const avatar2 = "";
      const groupname = querygroup;
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
  const isResult = query !== "" && inputRef.current.value !== "";
  const isResultf = queryf !== "" && inputReff.current.value !== "";
  return (
    <div className="message" style={{}}>
      <div className="messbenphai">
        <div className="danhsachchat">
          <div className="daudanhsach">
            <input
              className="searchinput"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              ref={inputRef}
            />
            <MdOutlineGroupAdd
              className="noteicon"
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={handleShowAddGroup}
            />
          </div>
          <div className="giuadanhsach anten">
            <span className="mesmid">Messages</span>
            <span className="reques">Requests</span>
          </div>
          <div className="danhsachnick">
            <div className="nick" style={{ position: "relative" }}>
              {isResult ? (
                <ul
                  className="listt"
                  style={{
                    position: "absolute",
                    top: "0",
                    backgroundColor: "white",
                    width: "97%",
                    padding: "10px",
                  }}
                >
                  {account
                    .filter((asd) => asd.nickname.toLowerCase().includes(query))
                    .map((item) => (
                      <div
                        className="listItem"
                        style={{ width: "100%" }}
                        onClick={() => handleShowAdd(item)}
                      >
                        <Avatar>
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="heo"
                          />
                        </Avatar>
                        <div className="namesearch">
                          <span className="tensearch">{item.nickname}</span>
                          <span className="fullnamesearch">{item.name}</span>
                        </div>
                      </div>
                    ))}
                </ul>
              ) : (
                <ul
                  className="listt"
                  style={{
                    position: "absolute",
                    top: "0",
                    backgroundColor: "white",
                    width: "97%",
                    padding: "10px",
                  }}
                >
                  {messacount.map((item) => (
                    <div
                      className="listItem"
                      style={{ width: "100%" }}
                      onClick={() =>
                        handleChoose(item.boxchatid, item.avatar2, false)
                      }
                    >
                      {item.avatar1 === ava1 ? (
                        <>
                          <Avatar>
                            <img
                              src={item.avatar2}
                              alt={item.host}
                              className="heo"
                            />
                          </Avatar>
                          <div className="namesearch">
                            <span className="tensearch">{item.member}</span>
                            <span className="fullnamesearch">
                              {item.member}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <Avatar>
                            <img
                              src={item.avatar1}
                              alt={item.host}
                              className="heo"
                            />
                          </Avatar>
                          <div className="namesearch">
                            <span className="tensearch">{item.host}</span>
                            <span className="fullnamesearch">{item.host}</span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  {messgroup.map((item) => (
                    <>
                      {item.member.includes(id) && (
                        <div
                          className="listItem"
                          style={{ width: "100%" }}
                          onClick={() =>
                            handleChoose(item.boxchatid, item.groupava, true)
                          }
                        >
                          <Avatar>
                            <img src={item.groupava} className="heo" />
                          </Avatar>
                          <div className="namesearch">
                            <span className="tensearch">{item.groupname}</span>
                            <span className="fullnamesearch">
                              {item.member.length > 2
                                ? item.member.slice(0, 2) + "..."
                                : item.member}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="messbentrai">
        {choosing !== null ? (
          <div className="noselect" style={{}}>
            <div
              style={{ position: "relative", width: "100%", height: "810px" }}
            >
              {mess.map((m, index) => (
                <div className="fullbenphai" key={index}>
                  <div className="chatbar">
                    <div className="nick">
                      {m.avatar1 === ava1 && (
                        <img className="avanickchat" src={m.avatar2} alt="" />
                      )}
                      {m.avatar2 == ava1 && (
                        <img className="avanickchat" src={m.avatar1} alt="" />
                      )}
                      {m.avatar1 == null && (
                        <img className="avanickchat" src={m.groupava} alt="" />
                      )}

                      <div className="tennick1">
                        {m.avatar1 === ava1 && (
                          <span className="tennickchat">{m.member}</span>
                        )}
                        {m.avatar2 == ava1 && (
                          <span className="tennickchat">{m.host}</span>
                        )}
                        {m.avatar1 == null && (
                          <span className="tennickchat">{m.groupname}</span>
                        )}
                        <span className="online">2m</span>
                      </div>
                    </div>
                    <div className="iconme">
                      <IoCallOutline className="micon" />
                      <FiVideo className="micon" />
                      <MdOutlineInfo className="micon" />
                    </div>
                  </div>
                  <div className="dinbox" style={{}}>
                    {m.msgg.map((ms, indexx) => (
                      <>
                        {ms.id === id ? (
                          <>
                            <div>
                              <span className={`${"your-message"} chat-item`}>
                                {ms.content}
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                margin: "10px",
                              }}
                            >
                              <Avatar
                                src={ms.avatar}
                                style={{ margin: "5px 0 0 1rem" }}
                              ></Avatar>
                              <span className={`${"other-people"} chat-item`}>
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    marginBottom: "5px",
                                    color: "grey",
                                  }}
                                >
                                  {ms.id}
                                </span>
                                {ms.content}
                              </span>
                            </div>
                          </>
                        )}
                      </>
                    ))}

                    {hello.map((ms, indexi) => (
                      <>
                        {ms.boxchatid == choosing ? (
                          <>
                            {ms.id === id ? (
                              <>
                                <div>
                                  <span
                                    className={`${"your-message"} chat-item`}
                                  >
                                    {ms.content}
                                  </span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "10px",
                                  }}
                                >
                                  <Avatar
                                    src={ms.avatar}
                                    style={{ margin: "5px 0 0 1rem" }}
                                  ></Avatar>
                                  <span
                                    className={`${"other-people"} chat-item`}
                                  >
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        marginBottom: "5px",
                                        color: "grey",
                                      }}
                                    >
                                      {ms.id}
                                    </span>
                                    {ms.content}
                                  </span>
                                </div>
                              </>
                            )}
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              ))}
              <div
                className=""
                style={{
                  padding: "0 20px 0 20px",
                  position: "absolute",
                  bottom: "20px",
                  left: "0",
                  right: "0",
                }}
              >
                <div className="inputmess">
                  <BsEmojiSmile
                    style={{
                      fontSize: "27px",
                      marginLeft: "7px",
                      cursor: "pointer",
                    }}
                  />
                  <div className="input-wrapper">
                    <input
                      value={message}
                      style={{ border: "none", outline: "none", width: "100%" }}
                      onKeyDown={onEnterPress}
                      onChange={handleChange}
                      placeholder="Nhập tin nhắn ..."
                    />
                    {IsSend ? (
                      <div className="iconmess">
                        <MdOutlineKeyboardVoice
                          style={{ fontSize: "27px", marginRight: "10px" }}
                        />
                        <IoImageOutline
                          style={{ fontSize: "27px", marginRight: "10px" }}
                        />
                        <FavoriteBorderIcon
                          style={{ fontSize: "27px", marginRight: "10px" }}
                        />
                      </div>
                    ) : (
                      <input
                        type="submit"
                        className="sendbutton"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          fontWeight: "700",
                          color: "#318CE7",
                        }}
                        value="Send"
                        onClick={sendMessage}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="noselect" style={{}}>
            <div>No select</div>
          </div>
        )}
      </div>
      <ModalAdd
        name={useradd}
        show={show}
        onClick={handleClose}
        onClick2={handleAdd}
      />
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
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="heo"
                        />
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
                      // onClick={() =>
                      //   handleChoose(item.boxchatid, item.avatar2, false)
                      // }
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
    </div>
  );
}

export default Message;

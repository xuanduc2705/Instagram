import React from "react";
import Messnav from "../../layout/nav/messnav";
import "../../layout/nav/nav.css";
import "./message.css";
import { PiNotePencil } from "react-icons/pi";
import { posts } from "../../data/detaildata";
import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
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
const host = "http://localhost:8000";
function Message() {
  const { name } = useParams();
  const [selectedNick, setSelectedNick] = useState(null);
  const handleNickClick = (sname, ava, chat, ten2, online) => {
    setSelectedNick({ sname, ava, chat, ten2, online });
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
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("nickname"));
  const [avatar, setAvatar] = useState(sessionStorage.getItem("avatar"));
  const socketRef = useRef();
  const messagesEnd = useRef();
  console.log(mess);
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
      setId(data);
    });
    socketRef.current.on("sendDataServer", (dataGot) => {
      setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
      scrollToBottom();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        content: message,
        id: id,
        avatar: avatar,
      };
      socketRef.current.emit("sendDataClient", msg);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

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
  return (
    <div className="message" style={{}}>
      <div className="messbenphai">
        <div className="danhsachchat">
          <div className="daudanhsach">
            <span className="tenchunickmess anten">s.pinkduck_03</span>
            <PiNotePencil
              className="noteicon"
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </div>
          <div className="giuadanhsach anten">
            <span className="mesmid">Messages</span>
            <span className="reques">Requests</span>
          </div>
          <div className="danhsachnick">
            <div className="nick">
              <img className="avanickchat" src={{}} alt="" />
              <div className="tennick1 anten">
                <span className="tennickchat">xuanduc</span>
                <span className="online">2m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="messbentrai">
        {selectedNick ? (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div className="fullbenphai">
              <div className="chatbar">
                <div className="nick">
                  <img className="avanickchat" src={selectedNick.ava} alt="" />
                  <div className="tennick1">
                    <span className="tennickchat">{selectedNick.ten2}</span>
                    <span className="online">{selectedNick.online}</span>
                  </div>
                </div>
                <div className="iconme">
                  <IoCallOutline className="micon" />
                  <FiVideo className="micon" />
                  <MdOutlineInfo className="micon" />
                </div>
              </div>
              <div className="dinbox" style={{ maxHeight: "600px" }}>
                {selectedNick.chat.map((message, index) => (
                  <div
                    key={index}
                    className="inbox"
                    style={{
                      padding: "2px 10px 2px 10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="message_home">{message.home}</div>
                    <div className="message_away">
                      {message.away ? (
                        <div
                          className="away"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <Avatar
                            src={selectedNick.ava}
                            style={{ marginRight: "10px" }}
                          ></Avatar>
                          <div className="span">{message.away}</div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                    type="text"
                    placeholder="Message..."
                    style={{ border: "none", outline: "none", width: "100%" }}
                    value={commentText}
                    onChange={handleSendText}
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
                      onClick={handleSendSubmit}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="noselect" style={{}}>
            <div
              style={{ position: "relative", width: "100%", height: "810px" }}
            >
              <div className="fullbenphai">
                <div className="chatbar">
                  <div className="nick">
                    <img className="avanickchat" src={{}} alt="" />
                    <div className="tennick1">
                      <span className="tennickchat">xuanduc</span>
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
                  {mess.map((m, index) => (
                    <>
                      {m.id === id ? (
                        <>
                          <div key={index}>
                            <span className={`${"your-message"} chat-item`}>
                              {m.content}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            key={index}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              margin: "10px",
                            }}
                          >
                            <Avatar
                              src={m.avatar}
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
                                {m.id}
                              </span>
                              {m.content}
                            </span>
                          </div>
                        </>
                      )}
                    </>
                  ))}
                  <div ref={messagesEnd}></div>
                </div>
              </div>
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
        )}
      </div>
    </div>
  );
}

export default Message;

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
            {posts.map((po, index) => (
              <div
                className="nick"
                onClick={() =>
                  handleNickClick(po.sname, po.ava, po.chat, po.ten2, po.online)
                }
                key={index}
              >
                <img className="avanickchat" src={po.ava} alt="" />
                <div className="tennick1 anten">
                  <span className="tennickchat">{po.ten2}</span>
                  <span className="online">{po.online}</span>
                </div>
              </div>
            ))}
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
              <div className="dinbox">
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
            <span style={{ width: "100%", height: "100%" }}>
              No one selected
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;

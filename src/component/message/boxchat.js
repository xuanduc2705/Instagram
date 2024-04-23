import { Avatar, Button } from "@mui/material";
import { BsEmojiSmile } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { IoCallOutline, IoImageOutline } from "react-icons/io5";
import { MdOutlineInfo, MdOutlineKeyboardVoice } from "react-icons/md";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "primeicons/primeicons.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { evictMessage, getListBoxchatMess } from "../../lib/axios";

export const Boxchat = ({
  choosing,
  mess,
  check,
  hello,
  ava1,
  id,
  sendMessage,
  onEnterPress,
  handleChange,
  IsSend,
  message,
  handleEvict,
  setIdChosen,
  setCheck,
  setHello,
}) => {
  console.log(hello);
  const [visible, setVisible] = useState(false);
  const [idsocket, setIdsocket] = useState();
  let items = [
    { label: "Delete", icon: "pi pi-plus" },
    { label: "Evict", icon: "pi pi-search" },
  ];
  const handleChosenId = async (idchose) => {
    setVisible(true);
    setIdChosen(idchose);
  };
  const handleEvictAndRefresh = async () => {
    await handleEvict();
    checkRefresh();
    setHello([]);
  };
  const checkRefresh = async () => {
    let render = await getListBoxchatMess(choosing);
    setCheck(render);
    setVisible(false);
  };
  return (
    <>
      <div className="messbentrai">
        {choosing !== null ? (
          <div className="noselect" style={{}}>
            <div
              style={{ position: "relative", width: "100%", height: "810px" }}
            >
              {mess?.map((m, index) => (
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
                    {check
                      ?.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
                      .map((ms, indexx) => (
                        <>
                          {ms.name === id ? (
                            <>
                              <div className="flex flex-row hove">
                                {ms.content === "Tin nhắn đã bị thu hồi" ? (
                                  <span
                                    className={`${"your-message2"} chat-item`}
                                  >
                                    {ms.content}
                                  </span>
                                ) : (
                                  <span
                                    className={`${"your-message"} chat-item`}
                                  >
                                    {ms.content}
                                  </span>
                                )}
                                <>
                                  {ms.content !== "Tin nhắn đã bị thu hồi" && (
                                    <span className="message_options">
                                      <i className="pi pi-times-circle"></i>
                                      <i
                                        className=" pi pi-trash "
                                        style={{
                                          color: "red",
                                          marginLeft: "1.5vh",
                                        }}
                                        onClick={() => handleChosenId(ms.id)}
                                      ></i>
                                    </span>
                                  )}
                                </>
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
                                    {ms.name}
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
                                <div className="flex flex-row hove">
                                  <span
                                    className={`${"your-message"} chat-item`}
                                  >
                                    {ms.content}
                                  </span>
                                  <span className="message_options">
                                    <i className="pi pi-times-circle"></i>
                                    <i
                                      className=" pi pi-trash "
                                      style={{
                                        color: "red",
                                        marginLeft: "1.5vh",
                                      }}
                                      onClick={() =>
                                        handleChosenId(ms.messageid)
                                      }
                                    ></i>
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
      <Modal show={visible} onHide={() => setVisible(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title
            style={{ fontSize: "20px", textAlign: "center", marginLeft: "30%" }}
          >
            Do you want to evict it?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "4vh 0 4vh 0",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "2vh" }}
            onClick={() => handleEvictAndRefresh()}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setVisible(false)}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

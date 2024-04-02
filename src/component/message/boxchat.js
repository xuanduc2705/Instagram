import { Avatar } from "@mui/material";
import { BsEmojiSmile } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { IoCallOutline, IoImageOutline } from "react-icons/io5";
import { MdOutlineInfo, MdOutlineKeyboardVoice } from "react-icons/md";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
}) => {
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
                      ?.sort((a, b) => (a.time > b.time ? 1 : -1))
                      .map((ms, indexx) => (
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
    </>
  );
};

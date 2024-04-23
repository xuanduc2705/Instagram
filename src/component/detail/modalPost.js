import { Modal } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import { addComment, addReply } from "../../lib/axios";

const ModalPost = (props) => {
  const { showpost, setShowPost, modaldata, time, setLoad, fetchListPost } =
    props;
  const [showPost2, setShowPost2] = useState(false);
  const [showreplytext, setShowReplyText] = useState(false);
  const [showreply, setShowReply] = useState(false);
  const [replyindex, setReplyIndex] = useState();
  const [cmtindex, setCmtIndex] = useState();
  const [cmtid, setCmtid] = useState();
  const [replyText, setReplyText] = useState("");
  const [commentText, setCommentText] = useState("");
  const account = localStorage.getItem("id");
  const handleReply = (index, name, id) => {
    setReplyIndex(index);
    setShowReplyText(true);
    setReplyText("@" + name);
    setCmtid(id);
  };
  const handleLess = () => {
    setCmtIndex();
    setShowReply(false);
  };
  const handleReplies = (index, id) => {
    setShowReply(true);
    setCmtid(id);
    setCmtIndex(index);
  };
  const handleCommentInputChange = (event) => {
    const inputValue = event.target.value;
    setCommentText(inputValue);
    setShowPost2(inputValue.length > 0);
  };
  const handleCommentSubmit = async () => {
    if (commentText !== null && commentText.trim() !== "") {
      fetchListPost();
      await addComment(account, commentText, modaldata.id);
      setCommentText("");
      setLoad(true);
    }
  };

  const handleReplySubmit = async () => {
    if (replyText !== null && replyText.trim() !== "") {
      fetchListPost();
      await addReply(account, replyText, cmtid);
      setReplyText("");
      setReplyIndex();
      setLoad(true);
    }
  };

  const handleReplyInputChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReplyInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleReplySubmit();
    }
  };
  const handleClosePost = () => {
    setShowPost(false);
    setReplyIndex();
    setShowReplyText(false);
    setReplyText("");
    setCmtid();
    setCmtIndex();
  };
  console.log(replyindex);
  return (
    <Modal
      size="xl"
      aria-labelledby="example-modal-sizes-title-lg"
      show={showpost}
      onHide={handleClosePost}
      animation={false}
      centered
    >
      <div
        className="modal-container"
        style={{ width: "1100px", height: "700px", background: "none" }}
      >
        <Modal.Body style={{ height: "100%" }}>
          <div
            className="modalbody"
            style={{ height: "100%", display: "flex", flexDirection: "row" }}
          >
            <div
              className="modalleft"
              style={{
                width: "65%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "100%",
                backgroundColor: "black",
              }}
            >
              <img
                src={modaldata?.img}
                alt=""
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="modalright" style={{ width: "35%" }}>
              <div className="modalright-body" style={{ padding: "10px" }}>
                <div
                  style={{
                    height: "520px",
                    overflowY: "auto",
                  }}
                >
                  <div
                    className="modalright-heading"
                    style={{
                      padding: "10px",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "1px solid lightgrey",
                    }}
                  >
                    <Avatar src={modaldata?.User.avatar} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "5px",
                            marginLeft: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              wordBreak: "break-all",
                            }}
                          >
                            {modaldata?.User.nickname}
                            <span
                              style={{
                                fontSize: "15px",
                                margin: "5px 0 0 15px",
                                fontWeight: "400",
                              }}
                            >
                              {modaldata?.title}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "12px",
                            marginLeft: "10px",
                            fontWeight: "500",
                            color: "grey",
                          }}
                        >
                          {time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modalrightcontent"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}
                  ></div>
                  <div className="modalrightcmt px-3">
                    {modaldata?.Comments &&
                      modaldata?.Comments.sort((a, b) =>
                        a.createdAt > b.createdAt ? 1 : -1
                      ).map((cmt, index) => (
                        <div
                          className="modalrightcontent"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "15px",
                          }}
                          key={index}
                        >
                          <Avatar src={cmt.User.avatar} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              flexWrap: "wrap",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginLeft: "10px",
                                maxWidth: "330px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "15px",
                                  wordBreak: "break-word",
                                }}
                              >
                                {" "}
                                <span
                                  style={{
                                    fontSize: "15px",
                                    marginRight: "10px",
                                    fontWeight: "600",
                                  }}
                                >
                                  {cmt.User.nickname}
                                </span>
                                {cmt.content}
                              </span>
                            </div>
                            <div style={{ marginLeft: "10px" }}>
                              <span
                                style={{
                                  fontSize: "12px",
                                  marginRight: "10px",
                                  color: "grey",
                                }}
                              >
                                2m
                              </span>
                              <span
                                style={{
                                  fontSize: "12px",
                                  marginRight: "10px",
                                  color: "grey",
                                }}
                              >
                                0 likes
                              </span>
                              <span
                                style={{
                                  fontSize: "12px",
                                  marginRight: "10px",
                                  color: "grey",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleReply(index, cmt.User.nickname, cmt.id)
                                }
                              >
                                Reply
                              </span>
                            </div>
                            <div>
                              {cmt?.Replies.length > 0 && (
                                <span
                                  style={{
                                    cursor: "pointer",
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    color: "grey",
                                    marginLeft: "10px",
                                    fontStyle: "italic",
                                  }}
                                >
                                  {(cmtindex !== index || !showreply) && (
                                    <span
                                      onClick={() =>
                                        handleReplies(index, cmt.id)
                                      }
                                    >
                                      Show all {cmt?.Replies.length} replies
                                    </span>
                                  )}
                                  {showreply && cmtindex === index && (
                                    <span onClick={handleLess}>Show less</span>
                                  )}
                                </span>
                              )}
                            </div>
                            {showreply && cmtindex === index && (
                              <div className="modalrightcmt px-3 pt-3 pb-1">
                                {cmt?.Replies &&
                                  cmt?.Replies.sort((a, b) =>
                                    a.createdAt > b.createdAt ? 1 : -1
                                  ).map((rep, index1) => (
                                    <div
                                      className="modalrightcontent"
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginBottom: "15px",
                                      }}
                                      key={index1}
                                    >
                                      <Avatar
                                        sx={{ width: 30, height: 30 }}
                                        src={rep.User.avatar}
                                      />
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          flexWrap: "wrap",
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            marginLeft: "10px",
                                            maxWidth: "330px",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "15px",
                                              wordBreak: "break-all",
                                            }}
                                          >
                                            {" "}
                                            <span
                                              style={{
                                                fontSize: "15px",
                                                marginRight: "10px",
                                                fontWeight: "600",
                                              }}
                                            >
                                              {rep.User.nickname}
                                            </span>
                                            {rep.content}
                                          </span>
                                        </div>

                                        <div style={{ marginLeft: "10px" }}>
                                          <span
                                            style={{
                                              fontSize: "12px",
                                              marginRight: "10px",
                                              color: "grey",
                                            }}
                                          >
                                            2m
                                          </span>
                                          <span
                                            style={{
                                              fontSize: "12px",
                                              marginRight: "10px",
                                              color: "grey",
                                            }}
                                          >
                                            0 likes
                                          </span>
                                          <span
                                            style={{
                                              fontSize: "12px",
                                              marginRight: "10px",
                                              color: "grey",
                                              cursor: "pointer",
                                            }}
                                            onClick={() =>
                                              handleReply(
                                                index,
                                                rep.User.nickname,
                                                cmt.id
                                              )
                                            }
                                          >
                                            Reply
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            )}
                            {showreplytext && replyindex === index && (
                              <div
                                className="pb-2"
                                style={{ marginLeft: "10px", width: "250px" }}
                              >
                                <input
                                  className="inputcmt2"
                                  type="text"
                                  placeholder="Add a reply..."
                                  value={replyText}
                                  onChange={handleReplyInputChange}
                                  onKeyDown={handleReplyInputKeyDown}
                                  onClick={() => setLoad(false)}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "3.5vh",
                  }}
                  className="pt-2"
                >
                  <FaRegHeart style={{ margin: "0 10px 0 10px" }} />
                  <IoChatbubbleOutline style={{ margin: "0 10px 0 10px" }} />
                  <LuShare2 style={{ margin: "0 10px 0 5px" }} />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="px-3 py-2"
                >
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    3.000.000 likes
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    {time}
                  </span>
                </div>
                <div className="content_end">
                  <div className="comment-input" style={{ marginLeft: "10px" }}>
                    <FaRegSmile style={{ fontSize: "4vh" }} />

                    <input
                      className="inputcmt"
                      type="text"
                      placeholder="Add a comment..."
                      value={commentText}
                      onChange={handleCommentInputChange}
                      onClick={() => setLoad(false)}
                    />
                    {showPost2 ? (
                      <button
                        className="submit-button"
                        onClick={handleCommentSubmit}
                      >
                        Post
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
      <div className="modal-overlay" /> {/* Apply the CSS class */}
    </Modal>
  );
};
export default ModalPost;

import { Modal } from "react-bootstrap";
import { Avatar } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
const ModalPost = (props) => {
  return (
    <Modal
      size="xl"
      aria-labelledby="example-modal-sizes-title-lg"
      show={props.show}
      onHide={props.onClick}
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
                src={props.modalData.src}
                alt=""
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="modalright" style={{ width: "35%" }}>
              <div
                className="modalright-heading"
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <Avatar src={props.tenn.ava} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                    {props.tenn.sname}
                  </span>
                  <DoneIcon
                    className="done"
                    style={{
                      fontSize: "15",
                      marginTop: "5px",
                      borderRadius: "50%",
                      color: "white",
                      backgroundColor: "blue",
                      marginRight: "30px",
                    }}
                  />
                </div>
              </div>
              <div className="modalright-body" style={{ padding: "10px" }}>
                <div
                  className="modalrightcontent"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                  }}
                >
                  <Avatar src={props.tenn.ava} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {props.tenn.sname}
                    </span>
                    <DoneIcon
                      className="done"
                      style={{
                        fontSize: "15",
                        marginTop: "5px",
                        borderRadius: "50%",
                        color: "white",
                        backgroundColor: "blue",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "15px", marginTop: "5px" }}>
                    {props.modalData.content}
                  </span>
                </div>
                <div className="modalrightcmt">
                  {props.modalData.cmts &&
                    props.modalData.cmts.map((cmt, index) => (
                      <div
                        className="modalrightcontent"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginBottom: "15px",
                        }}
                        key={index}
                      >
                        <Avatar src={cmt.avatar} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginLeft: "10px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "15px",
                                marginRight: "10px",
                                fontWeight: "600",
                              }}
                            >
                              {cmt.author}
                            </span>
                            <span style={{ fontSize: "15px" }}>
                              {cmt.comment}
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
                              {cmt.time}
                            </span>
                            <span
                              style={{
                                fontSize: "12px",
                                marginRight: "10px",
                                color: "grey",
                              }}
                            >
                              {cmt.likes} likes
                            </span>
                            <span
                              style={{
                                fontSize: "12px",
                                marginRight: "10px",
                                color: "grey",
                              }}
                            >
                              Reply
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
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

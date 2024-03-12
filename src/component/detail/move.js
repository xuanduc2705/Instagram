import { IoIosSettings } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ModalLogin from "../../layout/nav/modalLogin";
import { useLocation } from "react-router-dom";

const Move = (props) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const name = location.pathname.substring(8, location.pathname.length);
  const owner = localStorage.getItem("nickname");
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 0 10px 0",
          borderBottom: "2px solid lightgrey",
        }}
      >
        <div
          className="col-2"
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          {name === owner && <IoIosSettings style={{ fontSize: "30px" }} />}
        </div>
        <div
          className="col-8"
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <span style={{ fontWeight: "600", cursor: "pointer" }}>
            {props.name}
            {name === owner && <IoIosArrowDown onClick={handleShow} />}
          </span>
        </div>
        <div
          className="col-2"
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          {name === "s.pinkduck_03" && (
            <IoPersonAddOutline style={{ fontSize: "28px" }} />
          )}
        </div>
      </div>
      <ModalLogin show={show} onClick={handleClose} />
    </>
  );
};
export default Move;

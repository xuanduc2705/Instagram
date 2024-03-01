import { IoIosSettings } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ModalLogin from "../../layout/nav/modalLogin";

const Move = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <IoIosSettings style={{ fontSize: "30px" }} />
        </div>
        <div
          className="col-8"
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <span
            style={{ fontWeight: "600", cursor: "pointer" }}
            onClick={handleShow}
          >
            {props.name}
            <IoIosArrowDown />
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
          <IoPersonAddOutline style={{ fontSize: "28px" }} />
        </div>
      </div>
      <ModalLogin show={show} onClick={handleClose} />
    </>
  );
};
export default Move;

import React from "react";

function Story({ stoava, name }) {
  return (
    <div className="avatar">
      <div className="coverimage">
        <div className="imagecover">
          <img src={stoava} className="heto" alt="" />
        </div>
      </div>
      <span className="tenn">{name}</span>
    </div>
  );
}

export default Story;

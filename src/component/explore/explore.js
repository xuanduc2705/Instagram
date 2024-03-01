import React from "react";
import "../explore/explore.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { reel } from "../../data/reelsdata";
import "../home/Home.css";

function Explore() {
  return (
    <div className="explore">
      <div className="reelslist">
        <div className="baidanggreel">
          {reel.map((post, index) => (
            <div className="baidang1">
              <div className="baidang11">
                <img key={index} src={post.avatar} className="heto" alt="" />
                <h3 className="reelview">{post.like}</h3>
                <PlayArrowRoundedIcon
                  className="reelicon"
                  style={{ fontSize: "40px" }}
                />
                <div className="overlay">
                  <div className="caption">
                    <div className="like">
                      <FavoriteBorderRoundedIcon
                        className="icontym"
                        style={{ marginBottom: "40px" }}
                      />
                      <h3 className="tym">{post.like}</h3>
                    </div>
                    <div className="cmt">
                      <ModeCommentOutlinedIcon className="icontym" />
                      <h3 className="tym">{post.cmt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Explore;

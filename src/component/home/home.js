import React from "react";
import TimeLine from "../time/time";
import Nav from "../nav/nav";
import '../home/Home.css'

function Home() {
  return (
    <div className="homepage">
      <div className="homepage_nav">
        <Nav
        explore = {true}
        reels={true}
        />
      </div>
      <div className="homepage_time">
        <TimeLine/>
      </div>
    </div>
  );
}

export default Home;
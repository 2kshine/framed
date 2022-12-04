import React from "react";
import "./rightbar.css"
import Ranking from "../ranking/ranking";
import { Users } from "../../dummyData";
import Online from "../online/online";
const Rightbar = () => {
  return <div className="rightbar">
    <div className="rightbarWrapper">
      <div className="rightbarPart1">
      <h2 className="rankingTitle">Frame of the week</h2>
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      </div>
      <div className="rightbarPart2">
        <h3>Your Online Friends</h3>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key = {u.id} user = {u} /> 
            ))}
        </ul>
      </div>
    </div>
  </div>;
};

export default Rightbar;

import React from "react";
import "./rightbar.css"
import Ranking from "../ranking/ranking";
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" className="rightbarProfileImg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" className="rightbarProfileImg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" className="rightbarProfileImg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Rightbar;

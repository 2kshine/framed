import React from "react";
import "./leftbar.css";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <div className="leftbarpart1">
          <ul className="leftbarList">
            <li className="leftbarListItem">
              <span className="leftbarListItemText">
                <i class="fa-sharp fa-solid fa-rss leftbarListItemIcon"></i>{" "}
                Feed
              </span>
              <span className="leftbarListItemText">
                <i class="fa-solid fa-video"></i> Videos
              </span>
              <span className="leftbarListItemText">
                <i class="fa-solid fa-people-group"></i> Groups
              </span>
              <span className="leftbarListItemText">
                <i class="fa-solid fa-bookmark"></i> Bookmarks
              </span>
              <span className="leftbarListItemText">
                <i class="fa-solid fa-question"></i> Questions
              </span>
              <span className="leftbarListItemText">
                <i class="fa-solid fa-calendar"></i> Events
              </span>
            </li>
          </ul>
          <button className="leftbarButton">Load More</button>
        </div>

        <div className="leftbarpart2">
          <h3>Your Friends</h3>
          <ul className="leftbarFriendList">
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
            <li className="leftbarFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="leftbarFriendImg"
              />
              <span className="leftbarFriendName">jane Doe</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;

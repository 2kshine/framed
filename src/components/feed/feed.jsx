import React from "react";
import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"
import { Posts } from "../../dummyData";
const Feed = () => {
  return <div className="feed">
    <div className="feedWrapper">
      <Share />
      {Posts.map((props)=> (
        <Post key = {props.id} post = {props }/>
      ))}
    </div>
  </div>;
};

export default Feed;

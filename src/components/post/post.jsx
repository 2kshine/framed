import { useState } from "react";
import "./post.css";
import { Users } from "../../dummyData";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [dislike, setDislike] = useState(post.dislike);
  const [isliked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked)
  };
  const dislikeHandler = () => {
    setDislike(isDisliked ? dislike - 1 : dislike + 1);
    setIsDisliked(!isDisliked)
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              className="postProfileImg"
              alt=""
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">
              <i class="fa-thin fa-at"></i> {post.date}
            </span>
          </div>
          <div className="postTopRight">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          {/* some of the post doesnt have description */}
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="assets/like.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like}</span>
            <img src="assets/dislike.png" alt="" className="likeIcon" onClick={dislikeHandler}/>
            <span className="postLikeCounter"> {dislike}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

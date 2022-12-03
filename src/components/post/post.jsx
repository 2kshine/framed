import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              className="postProfileImg"
              alt=""
            />
            <span className="postUsername">Shining Maharjan</span>
            <span className="postDate"><i class="fa-thin fa-at"></i> a few minutes ago</span>
          </div>
          <div className="postTopRight">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">My first post</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className="likeIcon"/>
            <img src="assets/heart.png" alt="" className="likeIcon"/>
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              9 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

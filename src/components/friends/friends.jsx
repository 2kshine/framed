import "./friends.css";

const Friend = ({props}) => {
  return (
    <li className="leftbarFriend">
      <img src={props.profilePicture} alt="" className="leftbarFriendImg" />
      <span className="leftbarFriendName">{props.username}</span>
    </li>
  );
};

export default Friend;

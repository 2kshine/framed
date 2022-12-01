import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
          <input
            type="text"
            placeholder="Frame your Core memories today!"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
            <i class="fa-solid fa-photo-film" style={{"color": "green"}}></i>
              <span className="shareOptionText">Share Photo</span>
            </div>
            <div className="shareOption">
              <i class="fa-solid fa-video" style={{"color": "grey"}}></i>
              <span className="shareOptionText">Share Video</span>
            </div>
            <div className="shareOption">
            <i class="fa-solid fa-hashtag" style={{"color": "blue"}}></i>
              <span className="shareOptionText">Tags</span>
            </div>
            <div className="shareOption" >
            <i class="fa-solid fa-location-crosshairs" style={{"color": "brown"}}></i>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption" >
            <i class="fa-solid fa-face-smile" style={{"color": "orange"}}></i>
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;

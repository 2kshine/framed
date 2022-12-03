import "./ranking.css";

const Ranking = () => {
  return (
    <div className="ranking">
      <div className="rankingWrapper">
        <div className="rankingBox">
          <div className="topPart">
            <h3>Shining Maharjan</h3>
            <span className="uploadTime">uploaded a minute ago</span>
          </div>
          <div className="bottomPart">
            <span className="likeCounter">21 peoples liked it</span>
            <button className="donationButton">Buy me a coffee</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;

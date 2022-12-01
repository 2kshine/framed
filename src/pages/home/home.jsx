import React from "react";
import "./home.css"
import Feed from "../../components/feed/feed";
import Leftbar from "../../components/leftbar/leftbar";
import Navbar from "../../components/navbar/navbar";
import Rightbar from "../../components/rightbar/rightbar";

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;

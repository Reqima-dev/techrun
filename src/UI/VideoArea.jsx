import React from "react";
import "../styles/videoArea.css";
import videoBg from "../assets/video.png";
import { Link } from "react-router-dom";

const VideoArea = () => {
  return (
    <section className="container">
      <div className="video-area">
        <div className="video-wrapper">
          <img src={videoBg} alt="" />
          <Link to="#." className="play-btn">
            <span class="material-icons-sharp"> play_circle_filled </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoArea;

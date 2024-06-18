import React from "react";
import "./Hero.css";
import video from "../../assets/maldivesVideo.mp4";
import { IoSearchSharp } from "react-icons/io5";
function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop id="video" muted src={video}></video>
      <div className="overlay"></div>

      <div className="content">
        <h1>First class Travel</h1>
        <h2>Top 1% Locations WorldWide</h2>
        <form className="form">
          <div>
            <input
              type="text"
              placeholder="Search Destinations"
              className="input"
            />
          </div>
          <div>
            <button>
              <IoSearchSharp className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;

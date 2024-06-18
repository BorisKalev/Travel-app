import React from "react";
import "./Destinations.css";
import images from "../../images.js";
function Destinations() {
  return (
    <div className="destinations" name="destinations">
      <div className="container">
        <h1>All inclusive Resorts</h1>
        <p>On the Caribbean's best beaches</p>
        <div className="img-container">
          <img src={images.Bora} alt="/" className="span-3 image-grid-row-2" />
          <img src={images.Bora2} alt="/" />
          <img src={images.maldives} alt="/" />
          <img src={images.maldives2} alt="/" />
          <img src={images.maldives3} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;

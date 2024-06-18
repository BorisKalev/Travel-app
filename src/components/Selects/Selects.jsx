import React from "react";
import "./Selects.css";
import images from "../../images";

export default function Selects() {
  const texts = [
    "Bora Bora",
    "Emerald Bay",
    "Maldives",
    "Grenada",
    "Key West",
    "Serra leone",
  ];

  return (
    <div className="container" name="selects">
      <div className="container-img">
        {[
          images.Bora,
          images.Bora2,
          images.maldives,
          images.maldives2,
          images.maldives3,
          images.keywest,
        ].map((image, indx) => (
          <div className="gallery-images" key={indx}>
            <img src={image} alt="gallery-image" />
            <p className="image-text">{texts[indx]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

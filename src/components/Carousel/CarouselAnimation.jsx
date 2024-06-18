import React from "react";
import "./CarouselStyle.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "../../images";
function CarouselAnimation() {
  return (
    <div className="container" name="carousel">
      <Carousel
        className="carousel-container"
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <div>
          <img src={images.maldives2} alt="/" />
          <p className="legend">Key West</p>
        </div>
        <div>
          <img src={images.maldives} alt="/" />
          <p className="legend">Bora Bora</p>
        </div>
        <div>
          <img src={images.maldives3} alt="/" />
          <p className="legend">Maldives</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselAnimation;

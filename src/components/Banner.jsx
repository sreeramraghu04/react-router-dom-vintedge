import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[60vh] sm:h-[80vh] lg:h-screen object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div
              className="
                pointer-events-none
                absolute bottom-0 left-0 w-full h-48
                bg-black
                backdrop-blur-lg
                [mask-image:linear-gradient(to_top,black,transparent)]
              "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

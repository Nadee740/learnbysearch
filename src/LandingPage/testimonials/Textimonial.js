import "./slidercourse.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import SliderCard from "./TestimonialCard";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonialholder">
      <div className="slidecontainer">
        <Slider {...settings}>
          <TestimonialCard /> <TestimonialCard /> <TestimonialCard />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

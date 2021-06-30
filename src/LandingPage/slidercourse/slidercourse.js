import "./slidercourse.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SliderCard from "./slider-course";

const SliderCo = ({data}) => {
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
    <div className="slider2">
      <h2>Applications Open For</h2>
      <div className="slidecontainer">
        <Slider {...settings}>
        {
          data.map((pgms)=>(
            <SliderCard data={pgms}/>
          ))
        }
          {/* <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard /> */}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCo;

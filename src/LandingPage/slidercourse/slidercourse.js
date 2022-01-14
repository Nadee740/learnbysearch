import "./slidercourse.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SliderCard from "./slider-course";

const SliderCo = ({ data }) => {
 console.log(data)
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="slider2">
      <h2>Research positions open for application</h2>
      <div className="slidecontainer">
        <Slider {...settings}>
          {data.map((pgms,index) => {
            console.log(index)
            return pgms.applicationStatus ?<SliderCard data={pgms} /> :"";
          })}
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

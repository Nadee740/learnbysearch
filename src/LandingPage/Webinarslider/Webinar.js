import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Slider from "react-slick";
import Slidercard from "./Webinarcard";

const WebinarSlider = ({ blog }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  const [num, setnum] = useState(0);
  return (
    <div className="blogSlider">
      <h2 className="mentorcarousel-head">Latest Webinars</h2>
      <div className="slidecontainer">
        <Slider {...settings}>
          {blog.map((blog, index) =>
            blog.isOpen ? <Slidercard blog={blog} key={index} /> : ""
          )}
          <></>
        </Slider>{" "}
        <a href="/webinars">
          <p className="viewmore">View More</p>
        </a>
      </div>
    </div>
  );
};

export default WebinarSlider;

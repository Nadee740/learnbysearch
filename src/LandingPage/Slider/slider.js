import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Slider from "react-slick";
import Slidercard from "./Slidercard";
const BlogSlider = ({ blog }) => {
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
  return (
    <div className="blogSlider">
      <h2>Latest Articles</h2>
      <div className="slidecontainer">
        <Slider {...settings}>
          {blog.map((blog, index) => (
            <Slidercard blog={blog} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;

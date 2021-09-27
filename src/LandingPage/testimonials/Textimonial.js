import "./slidercourse.css";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import SliderCard from "./TestimonialCard";
import Gettestimonials from "../../Backend/Gettestimonials";

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
  useEffect(()=>{
gettestimonials()
  },[])

const gettestimonials=async()=>{
  const { testimonials } = await Gettestimonials(
    `${window.name}testimonials`
  );
  console.log(testimonials,"hyy")
}

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

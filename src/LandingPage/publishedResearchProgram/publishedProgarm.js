import "./publishedprogram.css";
import Slider from "react-slick";
import PublishedCard from "./publishedCard";
const Publishedprograms = () => {
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
    <div className="blogSlider publishedprograms">
      <h2 className="mentorcarousel-head">Completed Research Programs</h2>
      <div className="slidecontainer ">
        <Slider {...settings}>
          <PublishedCard />
          <PublishedCard />
          <PublishedCard />
          <PublishedCard />
        </Slider>{" "}
      </div>
    </div>
  );
};

export default Publishedprograms;

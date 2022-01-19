import "./publishedprogram.css";
import Slider from "react-slick";
import PublishedCard from "./publishedCard";
const Publishedprograms = ({rpdata}) => {
  // mentors: Array(1), isCompleted: false
  console.log(rpdata)
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
        {rpdata.map((rp,index)=>{
        
          return rp.isCompleted?(<PublishedCard rp={rp}  />):""
        })}
          
        </Slider>{" "}
      </div>
    </div>
  );
};

export default Publishedprograms;

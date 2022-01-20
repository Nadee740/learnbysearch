import "./publishedprogram.css";
import Slider from "react-slick";
import PublishedCard from "./publishedCard";
const Publishedprograms = ({ rpdata }) => {
  let count = 0;
  let rps = rpdata.filter((rp) => rp.isCompleted == true);

  console.log(rpdata);
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
          {rps.map((rp, index) => {
            return <PublishedCard rp={rp} />;
          })}

          <div></div>
          <div></div>

          {() => {
            if (rps.lenth == 1)
              for (let i = 0; i < 2; i++)
                return <div className="dummy-card"></div>;
            else if (rps.lenth == 2)
              for (let i = 0; i < 1; i++)
                return <div className="dummy-card"></div>;
          }}
        </Slider>{" "}
      </div>
    </div>
  );
};

export default Publishedprograms;

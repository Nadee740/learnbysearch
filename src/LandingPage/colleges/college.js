import "./college.css";
import Slider from "react-slick";
const Colleges = () => {
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
    <div className="colleges">
      <h2>We have students from</h2>
      <div className="college-holder">
        <Slider {...settings}>
          <div className="college-card">
            <img src="/images/logo.png" alt="" className="college-img" />
          </div>

          <div className="college-card">
            <img src="/images/logo.png" alt="" className="college-img" />
          </div>

          <div className="college-card">
            <img src="/images/logo.png" alt="" className="college-img" />
          </div>

          <div className="college-card">
            <img src="/images/logo.png" alt="" className="college-img" />
          </div>

          <div className="college-card">
            <img src="/images/logo.png" alt="" className="college-img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Colleges;

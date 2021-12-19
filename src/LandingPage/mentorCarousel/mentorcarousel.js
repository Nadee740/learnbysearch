import "./mentorcarousel.css";
import Slider from "react-slick";
const MentorCarusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoScroll: true,
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
    <div className="mentorcarousel">
      <h2>Our mentors</h2>
      <div className="mentorcarousel-sildercontainer">
        <Slider {...settings}>
          <div className="mentorcarousel-card">
            <div className="mentorcarousel-card-inner">
              <img
                src="https://randomuser.me/api/portraits/men/98.jpg"
                alt=""
                className="mentorcarousel-img"
              />
              <p className="mentorcarousel-card-head">Mr.Tim Cook</p>
              <p className="mentorcarousel-card-sub">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quasi velit, et esse vel asperiores.
              </p>
            </div>
          </div>
          <div className="mentorcarousel-card">
            <div className="mentorcarousel-card-inner">
              <img
                src="https://randomuser.me/api/portraits/men/98.jpg"
                alt=""
                className="mentorcarousel-img"
              />
              <p className="mentorcarousel-card-head">Mr.Tim Cook</p>
              <p className="mentorcarousel-card-sub">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quasi velit, et esse vel asperiores.
              </p>
            </div>
          </div>
          <div className="mentorcarousel-card">
            <div className="mentorcarousel-card-inner">
              <img
                src="https://randomuser.me/api/portraits/men/98.jpg"
                alt=""
                className="mentorcarousel-img"
              />
              <p className="mentorcarousel-card-head">Mr.Tim Cook</p>
              <p className="mentorcarousel-card-sub">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quasi velit, et esse vel asperiores.
              </p>
            </div>
          </div>
          <div className="mentorcarousel-card">
            <div className="mentorcarousel-card-inner">
              <img
                src="https://randomuser.me/api/portraits/men/98.jpg"
                alt=""
                className="mentorcarousel-img"
              />
              <p className="mentorcarousel-card-head">Mr.Tim Cook</p>
              <p className="mentorcarousel-card-sub">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quasi velit, et esse vel asperiores.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default MentorCarusel;

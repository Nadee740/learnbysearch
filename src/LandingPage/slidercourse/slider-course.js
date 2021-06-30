import "./slidercourse.css";
const SliderCard = () => {
  return (
    <div className="slidercard">
      <img
        src="https://images.unsplash.com/photo-1625053376622-e462848c453f"
        alt="Course"
        className="slidercard-img"
      />
      <div className="content-holder">
        <h2 className="slidercardtext">
          Low-Cost LIDAR Sensor using Ultrasonic Distance Measurement & ML
        </h2>
        <button className="slidercardbtn">KNOW MORE</button>
      </div>
    </div>
  );
};

export default SliderCard;

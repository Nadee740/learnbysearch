import "./slidercourse.css";
const SliderCard = ({ data }) => {
  let a = "/openprogrammespage/" + data.slug;
  return (
    <div className="slidercard">
      <img src={data.imageUrl} alt="Course" className="slidercard-img" />
      <div className="content-holder">
        <h2 className="slidercardtext">{data.title}</h2>
        <button
          onClick={() => {
            window.location = a;
          }}
          className="slidercardbtn"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SliderCard;

import "./slidercourse.css";
const SliderCard = ({ data }) => {
  let a = "/openprogrammespage/" + data.slug;
  return (
    <div className="slidercard">
      <img src={data.imageUrl} alt="Course" className="slidercard-img" />
      <div className="content-holder">
        {data.isSponsered?<div className="course-sponser sponsered ">Sponsered</div>:<div className="course-sponser non-sponsered ">Non-Sponsered</div>}    {/*<div className="course-sponser sponsered ">Non-Sponsered</div> */}
        <h2 className="slidercardtext">{data.title}</h2>
        <h2 className="slidercardtext slidercardtext-small">
          Only best "research positions" Students will be globally accepted
        </h2>
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

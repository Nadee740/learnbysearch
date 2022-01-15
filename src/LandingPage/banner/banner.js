import "./banner.css";

const BannerBtn = () => {
  return (
    <div className="bannerbtn">
      <h3 className="bannerbtn-text">
        We're your startegic learning partner.
        <br />
        Let's move skills forward together.
      </h3>
      <a href="/ongoingprogrammes">
        <button className="bannerbtn-btn">Apply Now</button>
      </a>
    </div>
  );
};
export default BannerBtn;

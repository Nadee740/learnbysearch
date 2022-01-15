import "./banner.css";

const BannerBtn = () => {
  return (
    <div className="bannerbtn">
      <h3 className="bannerbtn-text">Upcoming Research programs</h3>
      <a href="/ongoingprogrammes">
        <button className="bannerbtn-btn">Apply Now</button>
      </a>
    </div>
  );
};
export default BannerBtn;

import "./banner.css";

const BannerBtn = () => {
  return (
    <div className="bannerbtn">
      <h3 className="bannerbtn-text">
        Check out the research work that our researchers
        <br /> and students are currently working on
      </h3>
      <a href="/ongoingprogrammes">
        <button className="bannerbtn-btn">View here</button>
      </a>
    </div>
  );
};
export default BannerBtn;

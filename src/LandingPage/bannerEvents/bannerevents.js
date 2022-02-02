import "./bannergrants.css";
const BannerEvents = () => {
  return (
    <div className="bannergrants">
      <img
        src="/images/mike.png"
        alt=""
        className="bannergrants-circle bannergrants-circle-img"
      />
      <div className="bannergrants-section">
        {" "}
        <h4 className="bannergrants-head">Events</h4>
        <p className="bannergrants-text">
          Learn more about diffrent events
        </p>{" "}
        <a href="/events">
          <button className="bannerbtn-btn">Know More</button>
        </a>
      </div>

      <img
        src="/images/circle.svg"
        alt=""
        className="bannergrants-circle bannergrants-circle-c1-2"
      />
      <img
        src="/images/circle.svg"
        alt=""
        className="bannergrants-circle bannergrants-circle-c2"
      />
      <img
        src="/images/circle.svg"
        alt=""
        className="bannergrants-circle bannergrants-circle-c4"
      />
    </div>
  );
};
export default BannerEvents;

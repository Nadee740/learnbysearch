import "./bannergrants.css";
const BannerGrants = () => {
  return (
    <div className="bannergrants">
      <img
        src="/images/events.png"
        alt=""
        className="bannergrants-circle bannergrants-circle-img"
      />
      <div className="bannergrants-section">
        {" "}
        <h4 className="bannergrants-head">Grants</h4>
        <p className="bannergrants-text">
          Learn more about diffrent grants
        </p>{" "}
        <a href="/grants">
          <button className="bannerbtn-btn">Know More</button>
        </a>
      </div>

      <img
        src="/images/circle.svg"
        alt=""
        className="bannergrants-circle bannergrants-circle-c1"
      />
      <img
        src="/images/circle.svg"
        alt=""
        className="bannergrants-circle bannergrants-circle-c2"
      />
      <img
        src="/images/circle.svg"
        alt=""
        className="bannergrants-circle bannergrants-circle-c3"
      />
    </div>
  );
};
export default BannerGrants;

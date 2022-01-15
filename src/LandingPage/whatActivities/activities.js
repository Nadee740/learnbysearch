import "./activities.css";
const Activities = () => {
  return (
    <div className="activities">
      <h2 className="activities-head">
        What research activities are happening at LBR?
      </h2>
      <div className="activities-grid">
        <div className="activities-grid-col">
          <p className="activities-grid-col-head">For Students</p>
          <div className="activities-grid-col-sub">
            <div className="activities-grid-col-1">
              <img
                src="/images/activities/research1.jpg"
                className="activities-grid-col-image"
                alt=""
              />
              <p className="activities-grid-col-para">
                Sponsered Research Programmes
              </p>
            </div>
            <div className="activities-grid-col-1">
              <img
                src="/images/activities/learn.jpg"
                className="activities-grid-col-image"
                alt=""
              />
              <p className="activities-grid-col-para">
                Learning Research Programmes
              </p>
            </div>
          </div>
        </div>
        <div className="activities-grid-col">
          <p className="activities-grid-col-head">For Researchers</p>
          <div className="activities-grid-col-sub">
            <div className="activities-grid-col-1">
              <img
                src="/images/activities/head.jpg"
                className="activities-grid-col-image"
                alt=""
              />
              <p className="activities-grid-col-para">Research Grants</p>
            </div>
            <div className="activities-grid-col-1">
              <img
                src="/images/activities/showcase.jpg"
                className="activities-grid-col-image"
                alt=""
              />
              <p className="activities-grid-col-para">Float your project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;

import "./activities.css";
const Activities = () => {
  return (
    <div className="activities">
      <h2>What research activities are happening at LBR?</h2>
      <div className="activities-grid">
        <div className="activities-grid-col">
          <p className="">For Students</p>
          <div className="">
            <div className="activities-grid-col-1">
              <img src="/images/activities/research1.jpg" alt="" />
              <p className="">Sponsered Research Programmes</p>
            </div>
            <div className="activities-grid-col-1">
              <img src="" alt="" />
              <p className="">Sponsered Research Programmes</p>
            </div>
          </div>
        </div>
        <div className="activities-grid-col"></div>
      </div>
    </div>
  );
};

export default Activities;

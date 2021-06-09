import "./MyApplications.css";
const MyApplications = () => {
  return (
    <div className="application-container">
      <div className="applications-heading">
        <h2>My Applications</h2>
      </div>
      <div className="myapplication-box">
        <div className="myapplication-box-holder">
          <div className="myapplication-row myapplication-row-head">
            <p className="myapplication-row-text myapplication-row-text-head ">
              Program
            </p>
            <p className="myapplication-row-text myapplication-row-text-head ">
              Application Date
            </p>
            <p className="myapplication-row-text myapplication-row-text-head ">
              Status
            </p>
          </div>

          <div className="myapplication-row">
            <p className="myapplication-row-text ">Name of Program 1</p>
            <p className="myapplication-row-text ">2 June 2020</p>
            <p className="myapplication-row-text  ">
              <button className="myapplication-row-btn myapplication-row-btn-pend ">
                Pending
              </button>
            </p>
          </div>
          <div className="myapplication-row">
            <p className="myapplication-row-text ">Name of Program 1</p>
            <p className="myapplication-row-text ">2 June 2020</p>
            <p className="myapplication-row-text  ">
              <button className="myapplication-row-btn myapplication-row-btn-approv ">
                Approved
              </button>
            </p>
          </div>
          <div className="myapplication-row">
            <p className="myapplication-row-text ">Name of Program 3</p>
            <p className="myapplication-row-text ">2 June 2020</p>
            <p className="myapplication-row-text  ">
              <button className="myapplication-row-btn myapplication-row-btn-rej ">
                Rejected
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;

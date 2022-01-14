import { Link } from "react-router-dom";
import "./college.css";

const Colleges = ({ logos }) => {
  return (
    <div className="colleges">
      <h2>LBR Student's are from</h2>
      <div className="college-holder">
        {logos.map((logo, index) => (
          <div className="collwgeholder-card" key={index}>
            <img src={logo.imageUrl} alt="" className="college-img" />
          </div>
        ))}

        {/* <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div>
        <div className="collwgeholder-card">
          <img
            src="https://iitgn.ac.in/assets/img/iitgnlogo-emblem.png"
            alt=""
            className="college-img"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Colleges;

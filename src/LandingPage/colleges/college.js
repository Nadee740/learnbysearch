import { Link } from "react-router-dom";
import "./college.css";

const Colleges = ({ logos }) => {
  console.log(logos);
  return (
    <div className="colleges">
      <h2>We have students from</h2>
      <div className="college-holder">
        {logos.map((logo, index) => (
          <a key={index} href={""} target="_blank">
            <div className="collwgeholder-card">
              <img src={logo.imageUrl} alt="" className="college-img" />
            </div>
          </a>
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

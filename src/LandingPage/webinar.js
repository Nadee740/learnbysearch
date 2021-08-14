import "./webinar.css";
import { IoArrowForwardOutline } from "react-icons/io5";
const Webinar = () => {
  return (
    <div className="webinar">
      <div className="webinar-col1">
        <img src="/images/webinar.jpeg" alt="webinar" className="webinarimg" />
      </div>
      <div className="webinar-col2">
        <p className="webinar-sub">Webinar</p>
        <p className=" webinar-sub2">
          Research Opportunities in Management Innovations
        </p>
        <button className="regbtn">
          Register Now
          <IoArrowForwardOutline className="webicn" />
        </button>
      </div>
    </div>
  );
};

export default Webinar;

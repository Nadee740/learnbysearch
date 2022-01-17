import { IoArrowForwardOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
const WebinarSepPage = () => {
  return (
    <div className="webinar-separate-page">
      <div className="webinarpage-col1">
        <img
          src="https://res.cloudinary.com/dn3oddkar/image/upload/v1641887378/we_bkm1lo.jpg"
          alt="webinar-img"
          className="webinarpage-col-webinarcard-img"
        />
      </div>
      <div className="webinarpage-col">
        <p className="webinarcard-date">
          <MdDateRange />
          12 Januvary
        </p>
        <p className=" webinarpage-col-head">Webinar heading</p>
        <p className="webinarpage-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam
          labore numquam dicta quaerat, laboriosam iure, cum provident
          voluptatum quisquam ratione? Quasi voluptas dolores ut modi aut
          libero, minima nesciunt.
          <br />
          <br />
          voluptatum quisquam ratione? Quasi voluptas dolores ut modi aut
          libero, minima nesciunt.
        </p>
        <button className="regbtn">
          Register Now
          <IoArrowForwardOutline className="webicn" />
        </button>
      </div>
    </div>
  );
};

export default WebinarSepPage;

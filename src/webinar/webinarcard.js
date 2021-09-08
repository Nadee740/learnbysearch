import React from "react";
import "./webinar.css";
import { MdDateRange} from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";

const WebinareCard = ({ webinardata, selectedid, setvisible }) => {
  return (
    <>
      <div className="webinarcard">
        <img
          src={webinardata.imageUrl}
          alt="webinar-img"
          className="webinarcard-img"
        />
        <p className="webinarcard-date">
          <MdDateRange />
          {webinardata.date}
        </p>
        <p className="webinarcard-head">{webinardata.title}</p>
        {webinardata.isOpen ? (
          <button
            className="regbtn"
            onClick={() => {
              selectedid(webinardata._id);
              setvisible(true);
            }}
          >
            Register Now
            <IoArrowForwardOutline className="webicn" />
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default WebinareCard;



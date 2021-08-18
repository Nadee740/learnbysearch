import React from "react";
import "./webinar.css";
import { MdDateRange, MdVideoCall } from "react-icons/md";
const WebinareCard = ({webinardata}) => {
  console.log(webinardata)
  return (
    <div className="webinarcard">
      <img
        src={webinardata.imageUrl}
        alt=""
        className="webinarcard-img"
      />
      <p className="webinarcard-date">
        <MdDateRange />
        {webinardata.date}
      </p>
      <p className="webinarcard-head">
       {webinardata.title}
      </p>
      {/* <p className="webinarcard-person">
        Speaker: <span>Rishi Kapal</span>
      </p>
      <p className="webinarcard-date webinarcard-link">
        <MdVideoCall size="1.6em" />
        https://meet.google.com/tqp-gzgg-noj
      </p> */}
    </div>
  );
};

export default WebinareCard;

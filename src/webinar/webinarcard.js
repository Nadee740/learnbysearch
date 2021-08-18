import React from "react";
import "./webinar.css";
import { MdDateRange, MdVideoCall } from "react-icons/md";
const WebinareCard = () => {
  return (
    <div className="webinarcard">
      <img
        src="https://res.cloudinary.com/dn3oddkar/image/upload/v1629043250/webinar_r1aq3h.jpg"
        alt=""
        className="webinarcard-img"
      />
      <p className="webinarcard-date">
        <MdDateRange />
        12 June 2020
      </p>
      <p className="webinarcard-head">
        Research Opportunities In Management Innovations
      </p>
      <p className="webinarcard-person">
        Speaker: <span>Rishi Kapal</span>
      </p>
      <p className="webinarcard-date webinarcard-link">
        <MdVideoCall size="1.6em" />
        https://meet.google.com/tqp-gzgg-noj
      </p>
    </div>
  );
};

export default WebinareCard;

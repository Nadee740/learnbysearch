import React from "react";
import "./webinar.css";
import { MdDateRange, MdVideoCall } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState } from "react";
import Authverifier from "../Backend/Authverifier";
import SendPost from "../Backend/Sendpost";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
const WebinareCard = ({webinardata,selectedid,setvisible}) => {
  console.log(webinardata)


  return (
    <>
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
      <button
            className="regbtn"
            onClick={() => {
              selectedid(webinardata._id)
              setvisible(true)
            }}
          >
            Register Now
            <IoArrowForwardOutline className="webicn" />
          </button>
    </div>
    </>
  );
};

export default WebinareCard;

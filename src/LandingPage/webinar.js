import "./webinar.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import Modal from "react-awesome-modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";

const Webinar = ({ webinardata, isloggedin,setvisible,setwebinardata}) => {
  // const [visible, setvisible] = useState(false);
  const [loginvisible, setloginvisible] = useState(false);
  let a="/applyasguest/"+webinardata._id

 
  return (
    <>
      
      <div className="webinar">
        <div className="webinar-col1">
          <img
            src={webinardata.imageUrl}
            alt="webinar"
            className="webinarimg"
          />
        </div>
        <div className="webinar-col2">
          <p className="webinar-sub">Webinar</p>
          <p className=" webinar-sub2">{webinardata.title}</p>
          <button
            className="regbtn"
            onClick={() => {
              setwebinardata(webinardata)
              setvisible(true);
            }}
          >
            Register Now
            <IoArrowForwardOutline className="webicn" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Webinar;

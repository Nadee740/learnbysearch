import "./webinar.css";
import { IoArrowForwardOutline } from "react-icons/io5";


const Webinar = ({ webinardata, isloggedin,setvisible,setwebinardata}) => {
  
 

 
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
              window.location="/webinars"
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

import React from "react";
import "./webinar.css";
import { MdDateRange, MdVideoCall } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState } from "react";
import Authverifier from "../Backend/Authverifier";
import SendPost from "../Backend/Sendpost";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
const WebinareCard = ({webinardata}) => {
  const [visible, setvisible] = useState(false);
  const [loginvisible, setloginvisible] = useState(false);
  const [isloggedin, setisLoggedin] = useState(false);

  const applyforwebinar = async () => {
    const { isLoggedIn: isLoggedIn } = await Authverifier(`${window.name}users/me`
    );
    if (isLoggedIn) {
      const data = {
        webinarId: webinardata._id,
      };
      const { message: outcome } = await SendPost(
        `${window.name}apply-for-webinar`,
        data
      );

      if (outcome.includes("success")) {
        closeModal();
        alert(`Successfully registered for\n${webinardata.title}`);
      } else {
        closeModal();
        alert("Sorry an error occured");
      }
    } else {
      setvisible(false);
      setloginvisible(true);
    }
  };

  const closeModal = () => {
    setvisible(false);
  };

  const closeloginModal = () => {
    setloginvisible(false);
  };

  return (
    <>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>Are you sure you want to apply for {webinardata.title}?</p>
              <br></br>
              <div className="extrapart-webinar">
                <div className="signuppart">
                  <Link onClick={closeModal}>Close</Link>
                </div>
                <div>
                  <Link onClick={applyforwebinar}>Apply</Link>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </div>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={loginvisible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeloginModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>PLEASE LOGIN TO SUBMIT APPLICATION...</p>
              <br></br>
              <div className="extrapart">
                <div className="signuppart">
                  <Link to="/signup" onClick={closeloginModal}>
                    Sign Up
                  </Link>
                </div>
                <div>
                  <Link onClick={closeloginModal}>Close</Link>
                </div>

                <div className="loginpart">
                  <Link to="/login" onClick={closeloginModal}>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </div>
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
               setvisible(true);
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

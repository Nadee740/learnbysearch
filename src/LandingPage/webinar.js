import "./webinar.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import Modal from "react-awesome-modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";

const Webinar = ({ webinardata, isloggedin }) => {
  const [visible, setvisible] = useState(false);
  const [loginvisible, setloginvisible] = useState(false);

  const applyforwebinar = async () => {
    if (isloggedin) {
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

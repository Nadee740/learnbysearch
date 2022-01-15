import React, { useState } from "react";
import { useEffect } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Link } from "react-router-dom";
import Authverifier from "../Backend/Authverifier";
import Researchpgms from "../Backend/Researchpgms";
import SendPost from "../Backend/Sendpost";
import Modal from "react-awesome-modal";
import "./webinar.css";
import WebinareCard from "./webinarcard";
import Footer from "../LandingPage/footer/footer";
const CLosedWebinarPage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [webinardata, setwebinardata] = useState();
  const [visible, setvisible] = useState(false);
  const [loginvisible, setloginvisible] = useState(false);
  const [selectedwbinarid, setselectedwebinarid] = useState("");

  const applyforwebinar = async () => {
    const { isLoggedIn } = await Authverifier(`${window.name}users/me`);
    if (isLoggedIn) {
      const data = {
        webinarId: selectedwbinarid,
      };

      const { message: outcome } = await SendPost(
        `${window.name}apply-for-webinar`,
        data
      );
      setisLoading(false);
      if (outcome.includes("success")) {
        closeModal();
        alert("Successfully registered for webinar");
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
  useEffect(() => {
    getwebinardata();
  }, []);

  const getwebinardata = async () => {
    setisLoading(true);
    const { data: webinardata } = await Researchpgms(
      `${window.name}get-all-webinars`
    );
    if (webinardata) {
      webinardata.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
      });
      console.log(webinardata.isOpen);
      setwebinardata(webinardata);
    }
    setisLoading(false);
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
              <p>Are you sure you want to apply ?</p>
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
                  <Link
                    to={"/applyasguest/" + selectedwbinarid}
                    onClick={closeloginModal}
                  >
                    Apply as guest
                  </Link>
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
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : (
        <div className="webinarpage">
          <h2>Past Webinars</h2>
          <div className="webinarpage-list">
            {webinardata.map((webinar, index) =>
              !webinar.isOpen ? (
                <WebinareCard
                  key={index}
                  webinardata={webinar}
                  setvisible={setvisible}
                  selectedid={setselectedwebinarid}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CLosedWebinarPage;

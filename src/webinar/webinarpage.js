import { IoArrowForwardOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import Modal from "react-awesome-modal";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import Authverifier from "../Backend/Authverifier";
import SendPost from "../Backend/Sendpost";
const WebinarSepPage = () => {
  const {id}=useParams()
  const [visible, setvisible] = useState();
  const [loginvisible,setloginvisible]=useState()
  const [webinardata,setwebinardata]=useState()
  const [isLoading,setisLoading]=useState(true)
  useEffect(async() => {
    const { jsonda: webinardata } = await Researchpgms(
      `${window.name}webinar/${id}`
    );
    setwebinardata(webinardata.webinar)
    setisLoading(false)
  }, []);
  const closeloginModal=()=>{
setloginvisible(false)
  }
  const closeModal = () => {
    setvisible(false);
  };
  const applyforwebinar = async () => {
    const { isLoggedIn } = await Authverifier(`${window.name}users/me`);
    if (isLoggedIn) {
      const data = {
        webinarId: id,
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
  if (isLoading)
  return (
    <div className="isLoading">
      <SolarSystemLoading />
    </div>
  );
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
                  <Link to="/webinar" onClick={closeModal}>
                    Close
                  </Link>
                </div>
                <div>
                  <Link to="/webinar" onClick={""}>
                    Apply
                  </Link>
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
                    to={"/applyasguest/" +id}
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
      <div className="webinar-separate-page">
        <div className="webinarpage-col1">
          <img
            src={webinardata.imageUrl}
            alt="webinar-img"
            className="webinarpage-col-webinarcard-img"
          />
        </div>
        <div className="webinarpage-col">
          <p className="webinarcard-date">
            <MdDateRange />
            {webinardata.date}
          </p>
          <p className=" webinarpage-col-head">{webinardata.title}</p>
          {/* <p className="webinarpage-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            aperiam labore numquam dicta quaerat, laboriosam iure, cum provident
            voluptatum quisquam ratione? Quasi voluptas dolores ut modi aut
            libero, minima nesciunt.
            <br />
            <br />
            voluptatum quisquam ratione? Quasi voluptas dolores ut modi aut
            libero, minima nesciunt.
          </p> */}
          <button onClick={applyforwebinar} className="regbtn">
            Register Now
            <IoArrowForwardOutline className="webicn" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WebinarSepPage;

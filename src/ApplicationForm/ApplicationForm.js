import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import { RotateCircleLoading } from "react-loadingg";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import {Helmet} from "react-helmet";

const ApplicationForm = () => {
  const [visible, setvisible] = useState(false);
  const [errorvisible, seterrorvisible] = useState(false);

  const { slug } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState(true);
  const [q3, setq3] = useState("");
  const [switchitm, setSwitch] = useState(true);
  const [PositionId, setPositionId] = useState("");
  const [ResearchProgramId, setResearchProgramId] = useState();
  const [positions, setPosition] = useState("");
  const [blogsData, setblogData] = useState("");
  const [err, seterr] = useState("");

  let array = [];

  const closeModal = () => {
    setvisible(false);
  };
  const closeerrorModal = () => {
    seterrorvisible(false);
  };

  const getPositions = async (data) => {
    setisLoading(true);
    await data.positions.map(async (position, index) => {
      const { data: Datass } = await Researchpgms(
        `${window.name}position/${position}`
      );
      console.log(Datass, "hyhyy");
      array.push(Datass);

      setPosition(array);
      console.log(array);
      if (data.positions.length == array.length) {
        setisLoading(false);
        setPositionId(array[0]._id);
      }
    });

    // setisLoading(false);
  };

  const getBlogs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(
      `${window.name}research-program/${slug}`
    );
    setblogData(Datass);
   setResearchProgramId(Datass._id)
    await getPositions(Datass);
  };

  const handleChange = (event) => {
    setSwitch(switchitm);
    console.log(switchitm);
  };

  useEffect(() => {
    setisLoading(true);
    getBlogs();
  }, []);

  const submitApplictaionform = async (e) => {
    e.preventDefault();
    if (!q2 && q3 == "") {
      seterr("Please type a valid Reason ");
    } else {
      const data = { PositionId, ResearchProgramId, q1, q2, q3 };
      console.log(data);
      const { message: messagee } = await SendPost(
        `${window.name}application-form`,
        data
      );
      console.log(messagee, "naml nooka");
      if (messagee.includes("Application form submitted")) {
        setvisible(true);
      } else {
        seterrorvisible(true);
      }
    }
  };

  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Programs</title>
                
            </Helmet>
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
              <p>APPLICATION FORM SUBMITTED SUCCESSFULLY...</p>
              <Link to="/" onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={errorvisible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeerrorModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>PLEASE COMPLETE YOUR PROFILE TO SUBMIT THE APPLICATION...</p>
              <Link to="/editprofile" onClick={closeerrorModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      {isLoading ? (
        <div className="isLoading">
        <SolarSystemLoading/>
        </div>
      ) : (
        <div>
          <section className="sign-in">
            <div className="container">
              <div className="signup-content">
                <div className="signup-image">
                  <img src="../images/Forms-bro.svg" alt="Login pic"></img>
                </div>
                <div className="singup-form">
                  <h2 className="form-title">APPLICATION </h2>
                  <form onSubmit={submitApplictaionform}>
                    <div
                      className="inputholder inputholder2"
                      id="usernameholder"
                    >
                      <div className="inputholder-top ">
                        <textarea
                          rows="2"
                          className="textarea"
                          placeholder="What do you want to achieve by joining the research program?"
                          required
                          value={q1}
                          onChange={(e) => {
                            setq1(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="inputholder inputholder2"
                      id="usernameholder"
                    >
                      <div className="inputholder-top inputholder-top3">
                        <p className="inputp">
                          SELECT THE POSITION FOR WHICH YOU HAVE TO APPLY !
                        </p>
                        <div className="div">
                          <select
                            className="selectbx"
                            onChange={(e) => {
                              setPositionId(e.target.value);
                            }}
                          >
                            {isLoading
                              ? setisLoading(true)
                              : positions &&
                                positions.map((position, index) => (
                                  <option
                                    value={position._id}
                                    className="selectbx-itm"
                                    key={index}
                                  >
                                    {position.title}
                                  </option>
                                ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      className="inputholder inputholder2"
                      id="usernameholder"
                    >
                      <div className="inputholder-top inputholder-top3">
                        <p className="inputp">
                          The Program charges 5000 fees to cover the
                          research,training and resources cost.Can you afford to
                          pay the fees?( If eligible you may get financial
                          assistance to support. )
                        </p>
                        <div className="div">
                          <select
                            className="selectbx"
                            onChange={(e) => {
                              console.log(e.target.value);
                              console.log(q2);
                              setq2(e.target.value);
                            }}
                          >
                            <option value={true} className="selectbx-itm">
                              YES
                            </option>
                            <option value={false} className="selectbx-itm">
                              NO
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div
                      className="inputholder inputholder2"
                      id="usernameholder"
                    >
                      <div className="inputholder-top ">
                        <textarea
                          value={q3}
                          onChange={(e) => {
                            setq3(e.target.value);
                          }}
                          rows="5"
                          className="textarea"
                          placeholder="If You Want financial assistance please mention your annual family income and tell us how you can help LearnByResearch to support others in need of assistance like you"
                        ></textarea>
                      </div>
                      <label className="label" htmlFor="">
                        {err && err}
                      </label>
                    </div>

                    <input
                      type="submit"
                      value="APPLY NOW"
                      placeholder="Sign Up"
                      className="submit-btn"
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ApplicationForm;

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
import { Helmet } from "react-helmet";

const ApplicationForm = () => {
  const [visible, setvisible] = useState(false);
  const [paravisible, setparavisible] = useState(false);
  const [errorvisible, seterrorvisible] = useState(false);

  const { slug } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState(true);
  const [q3, setq3] = useState("");
  const [blank, setblank] = useState("");

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
    localStorage.setItem("q1", q1);
    localStorage.setItem("q2", q2);
    localStorage.setItem("q3", q3);
    seterrorvisible(false);
  };
  ////////////////////get positions of rp ///////////////////////////////////////
  const getPositions = async (data) => {
    setisLoading(true);
    await data.positions.map(async (position, index) => {
      const { data: Datass } = await Researchpgms(
        `${window.name}position/${position}`
      );

      array.push(Datass);

      setPosition(array);

      if (data.positions.length == array.length) {
        setisLoading(false);
        setPositionId(array[0]._id);
      }
    });

    // setisLoading(false);
  };
  /////////////////////////////////////////////////////////////////////

  //////////////////get rp data////////////////////////////////////////
  const getBlogs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(
      `${window.name}research-program/${slug}`
    );
    setblogData(Datass);
    setResearchProgramId(Datass._id);
    await getPositions(Datass);
  };
  //////////////////////////////////////////////

  const handleChange = (event) => {
    setSwitch(switchitm);
  };

  useEffect(() => {
    setisLoading(true);

    if (
      localStorage.getItem("q1") != "" &&
      localStorage.getItem("q1") != null
    ) {
      setq1(localStorage.getItem("q1"));
      setq3(localStorage.getItem("q3"));
    }
    getBlogs();
  }, []);

  ///////////////////////////////submit application////////////////////
  const submitApplictaionform = async (e) => {
    e.preventDefault();
    localStorage.removeItem("q1");
    localStorage.removeItem("q3");
    if (q2 == "false" && q3 == "") {
      seterr("Please type a valid Reason ");
    } else {
      let data = { PositionId, ResearchProgramId, q1, q2, q3 };
      if (q2 == "true" || q2 == true) {
        data = { PositionId, ResearchProgramId, q1, q2 };
      }
      console.log(data);

      const { message: messagee } = await SendPost(
        `${window.name}application-form`,
        data
      );

      if (messagee.includes("Application form submitted")) {
        setisLoading(false);
        setvisible(true);
      } else {
        seterrorvisible(true);
      }
    }
  };
  //////////////////////////////////////////////////////////////////////
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
              <Link to="/myapplications" onClick={closeModal}>
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
                Complete Profile
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
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
                    <p className="inputtext">
                      What do you want to achieve by joining the research
                      program?
                    </p>
                    <div
                      className="inputholder inputholder2"
                      id="usernameholder"
                    >
                      <div className="inputholder-top ">
                        <textarea
                          minLength={100}
                          rows="5"
                          className="textarea"
                          placeholder=""
                          required
                          value={q1}
                          onChange={(e) => {
                            setq1(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <p className="inputtext">
                      Select the position for which you are applying :
                    </p>
                    <div
                      className="inputholder inputholder2"
                      id="usernameholder"
                    >
                      <div className="inputholder-top inputholder-top3">
                        {/* <p className="inputp">
                          SELECT THE POSITION FOR WHICH YOU HAVE TO APPLY !
                        </p> */}
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
                    <p className="inputtext">
                      {" "}
                      The Program charges Rs. 5000 fees to cover the research,
                      training and resources cost. Can you afford to pay the
                      fees?{" "}
                    </p>
                    <div
                      className="inputholder inputholder2"
                      id="usernameholder"
                    >
                      <div className="inputholder-top inputholder-top3  ">
                        {/* <p className="inputp">
                          The Program charges 5000 fees to cover the
                          research,training and resources cost.Can you afford to
                          pay the fees?( If eligible you may get financial
                          assistance to support. )
                        </p> */}
                        <div className="div ">
                          <select
                            className="selectbx"
                            onChange={(e) => {
                              setq2(e.target.value);
                              if (e.target.value == "true") {
                                setparavisible(false);
                              } else {
                                setparavisible(true);
                              }
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

                    {paravisible ? (
                      <>
                        <p className="inputtext">
                          If You Want financial assistance please mention your
                          annual family income and tell us how you can help
                          LearnByResearch to support others in need of
                          assistance like you :
                        </p>
                        <div
                          className="inputholder inputholder2 "
                          id="usernameholder"
                        >
                          <div className="inputholder-top ">
                            <textarea
                              minLength={250}
                              value={q3}
                              onChange={(e) => {
                                setq3(e.target.value);
                              }}
                              rows="15"
                              className="textarea"
                              placeholder=""
                            ></textarea>
                          </div>
                          <label className="label" htmlFor="">
                            {err && err}
                          </label>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    <input
                      type="submit"
                      value="Submit"
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

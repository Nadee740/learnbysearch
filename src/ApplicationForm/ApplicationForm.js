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
import UserReferalCode from "../Backend/usereferalcode";
import { Stepper, Step } from "react-form-stepper";
const ApplicationForm = () => {
  const [visible, setvisible] = useState(false);
  const [referalvisible, setreferalvisible] = useState(false);
  const [paravisible, setparavisible] = useState(false);
  const [errorvisible, seterrorvisible] = useState(false);
  const [step, setStep] = useState(0); //Stepper
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
  const [code, setreferalcode] = useState("");
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

  const Applyreferal = async () => {
    const data = { code };
    const { error: error } = await UserReferalCode(
      `${window.name}count-code`,
      data
    );
    console.log(error);
    if (error) {
      setreferalvisible(true);
    } else {
      submitformdata();
    }
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
      if (!code == "") {
        Applyreferal();
      } else {
        setreferalcode("");
        submitformdata();
      }
    }
  };
  const submitformdata = async () => {
    let data = { PositionId, ResearchProgramId, q1, q2, q3, code };
    if (q2 == "true" || q2 == true) {
      data = { PositionId, ResearchProgramId, q1, q2, code };
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
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={referalvisible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={() => {
              setreferalvisible(false);
            }}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>
                USed Referal Code {code} does not exist.  do you want to apply without referal code?
              </p>
              <br></br>
              <div className="extrapart-webinar">
                <div className="signuppart">
                  <Link
                    onClick={() => {
                      setreferalvisible(false);
                    }}
                  >
                    Close
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => {
                      setreferalvisible(false);
                      submitformdata();
                    }}
                  >
                    Apply
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
                    <div className="stepperdiv">
                      <Stepper
                        activeStep={step}
                        styleConfig={{
                          completedBgColor: "#bd00c0",
                          activeBgColor: "#C86FC9",
                          inactiveBgColor: "#bdbdbd",
                        }}
                      >
                        <Step label="Application Form" />

                        <Step label="Financial Assistance" />
                      </Stepper>
                    </div>
                    {step === 0 ? (
                      <>
                        <p className="inputtext">Referal Code if any</p>
                        <div
                          className="inputholder inputholder2"
                          id="usernameholder"
                        >
                          <div className="inputholder-top ">
                            <textarea
                              minLength={100}
                              rows="1"
                              className="textarea"
                              placeholder=""
                              value={code}
                              onChange={(e) => {
                                setreferalcode(e.target.value);
                              }}
                            ></textarea>
                          </div>
                        </div>
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
                      </>
                    ) : (
                      ""
                    )}
                    {step === 1 ? (
                      <>
                        <p className="inputtext">
                          Can you afford to pay the program fees of Rs 3000 per
                          month?
                          <br /> (Duration 3-4 months as it varies with the
                          research project and is mentioned on the website. This
                          fees will cover the charges for mentorship, training
                          resources, publication charges and the tools
                          required.)
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
                              If You Want financial assistance please mention
                              your annual family income and tell us how you can
                              help LearnByResearch to support others in need of
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
                      </>
                    ) : (
                      ""
                    )}
                    {/*<input
                      type="submit"
                      value="Submit"
                      placeholder="Sign Up"
                      className="submit-btn"
                    />*/}
                    <div className="btnholder">
                      {step === 0 ? (
                        <button
                          className="submit-btn submit-btn2"
                          onClick={() => {
                            setStep(step + 1);
                          }}
                        >
                          NEXT STEP
                        </button>
                      ) : null}
                      {step > 0 ? (
                        <button
                          className="submit-btn submit-btn2"
                          onClick={() => {
                            setStep(step - 1);
                          }}
                        >
                          PREVIOUS STEP
                        </button>
                      ) : null}
                      {step > 0 ? (
                        <button
                          className="submit-btn submit-btn2"
                          onClick={() => {
                            console.log("Hy")
                          }}
                        >
                          SUBMIT
                        </button>
                      ) : null}
                    </div>
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

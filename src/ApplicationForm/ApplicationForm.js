import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";
import UserReferalCode from "../Backend/usereferalcode";
import { Stepper, Step } from "react-form-stepper";
import isURL from "validator/lib/isURL";
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
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState(false);
  const [q6, setq6] = useState("");
  const [q7, setq7] = useState("");
  const [PositionId, setPositionId] = useState("");
  const [ResearchProgramId, setResearchProgramId] = useState();
  const [positions, setPosition] = useState("");
  const [code, setreferalcode] = useState("");
  const [Appid, setAppid] = useState("");
  const [err, seterr] = useState("");
const [blogsData,setblogsData]=useState();
  const closeModal = () => {
    setvisible(false);
  };

  /////////modal which says to complete profile/////////////
  const closeerrorModal = () => {
    localStorage.setItem("q1", q1);
    localStorage.setItem("q2", q2);
    localStorage.setItem("q3", q3);
    seterrorvisible(false);
  };
  ////////////////////get positions of rp ///////////////////////////////////////
  const getPositions = async (data) => {
    
    await data.positions.map(async (position, index) => {
      const { data: Data } = await Researchpgms(
        `${window.name}position/${position.positionId}`
      );
      setPosition((state) => [...state, Data]);
    });

    setisLoading(false);
  };
  /////////////////////////////////////////////////////////////////////

  //////////////////get rp data////////////////////////////////////////
  const getBlogs = async () => {
    const { data } = await Researchpgms(
      `${window.name}research-program/${slug}`
    );
    setblogsData(data)
    setResearchProgramId(data._id);
    setPositionId(data.positions[0].positionId._id);
    setisLoading(false)
   
    // await getPositions(data);
  };
  //////////////////////////////////////////////
  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };

  const Applyreferal = async () => {
    const data = { code };
    const { error } = await UserReferalCode(`${window.name}count-code`, data);
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

  /////////////decide to apply for referal or submit////////////////////
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

  ///////////////////////////////submit application////////////////////
  const submitformdata = async () => {
    if (isNaN(q4)) alert("please type a valid CGPA ");
    else if (isNaN(q6)) alert("Invalid number of research paper");
    else if (!isURL(q7)) alert("Invalid linkedin url");
    else {
      let data = {
        PositionId,
        ResearchProgramId,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        code,
      };

      const { message,Json } = await SendPost(
        `${window.name}application-form`,
        data
      );
      

      if (message.includes("Application form submitted")) {
        setAppid(Json.data._id)
        setisLoading(false);
        window.location=`/quiz/confirmation/${ResearchProgramId}/${PositionId}/${Json.data._id}`
        
      } else {
        setisLoading(false);
      
        seterrorvisible(true);
        console.log(message)
      }
    }
  };
  if (isLoading)
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );

  //////////////////////////////////////////////////////////////////////
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Programs</title>
      </Helmet>
      {/* <Link to="/myapplications" onClick={closeModal}>
                Close
              </Link> */}
      
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
                USed Referal Code {code} does not exist. do you want to apply
                without referal code?
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

                      <Step label="Additional Details" />
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
                                :blogsData&&
                                  blogsData.positions.map((position, index) => {
                                   console.log(position)
                                    return (
                                      <option
                                        value={position.positionId._id}
                                        className="selectbx-itm"
                                        key={index}
                                      >
                                        {position.positionId.title}
                                      </option>
                                    );
                                  })}
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
                      <p className="inputtext">Enter your Top 5 Skills</p>
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
                            minLength={10}
                            rows="3"
                            className="textarea"
                            placeholder="Please Enter Skills Comma Separated"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <p className="inputtext">Enter your Current CGPA</p>
                      <div
                        className="inputholder inputholder2"
                        id="usernameholder"
                      >
                        <div className="inputholder-top ">
                          <textarea
                            value={q4}
                            onChange={(e) => {
                              setq4(e.target.value);
                            }}
                            minLength={1}
                            rows="1"
                            className="textarea"
                            placeholder="CGPA Out off 10"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <p className="inputtext">
                        Have you worked on any research projects in the past or
                        present
                      </p>
                      <div
                        className="inputholder inputholder2"
                        id="usernameholder"
                      >
                        <div className="inputholder-top inputholder-top3  ">
                          <div className="div ">
                            <select
                              className="selectbx"
                              onChange={(e) => {
                                setq5(e.target.value);
                                if (e.target.value == "false")
                                  setparavisible(false);
                                else setparavisible("true");
                              }}
                            >
                              <option value={false} className="selectbx-itm">
                                NO
                              </option>
                              <option value={true} className="selectbx-itm">
                                YES
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {paravisible ? (
                        <>
                          <p className="inputtext">
                            How many research papers have you published?
                          </p>
                          <div
                            className="inputholder inputholder2"
                            id="usernameholder"
                          >
                            <div className="inputholder-top ">
                              <textarea
                                value={q6}
                                onChange={(e) => {
                                  setq6(e.target.value);
                                }}
                                minLength={1}
                                rows="1"
                                className="textarea"
                                placeholder=""
                                required
                              ></textarea>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <p className="inputtext">Linkdin profile Link</p>
                      <div
                        className="inputholder inputholder2"
                        id="usernameholder"
                      >
                        <div className="inputholder-top ">
                          <textarea
                            value={q7}
                            onChange={(e) => {
                              setq7(e.target.value);
                            }}
                            rows="1"
                            className="textarea"
                            placeholder=""
                            required
                          ></textarea>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="btnholder">
                    {step === 0 ? (
                      <button
                        className="submit-btn submit-btn2"
                        onClick={(e) => {
                          e.preventDefault();
                          if (q1.length > 6) setStep(step + 1);
                          else
                            alert(
                              "Please type a valid reason with minimum 6 characters"
                            );
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
                      <button className="submit-btn submit-btn2" type="submit">
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
    </>
  );
};

export default ApplicationForm;

{/* <div className="popupscreen">
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
              <p>ATTEND QUIZ NOW...</p>
              <br/>
              <div className="extrapart-webinar">
                <div className="signuppart">
                  <Link
                  to="/myapplications" onClick={closeModal}
                  >
                    Skip
                  </Link>
                </div>
                <div>
                  <Link
                  to={"/quiz/"+ResearchProgramId+"/"+PositionId+"/"+Appid}
                    onClick={() => {
                      closeModal()
                      
                    }}
                  >
                    Attend
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </div> */}
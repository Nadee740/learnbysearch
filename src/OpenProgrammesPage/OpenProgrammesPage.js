import React from "react";
import Footer from "../LandingPage/footer/footer";
import { BsCalendarFill, BsFillBellFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import "./OpenProgrammesPage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Researchpgms from "../Backend/Researchpgms";
import Authverifier from "../Backend/Authverifier";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import { Check } from "@material-ui/icons";

function OpenProgrammesPage() {
  const { slug } = useParams();
  let arr = [];
  let array = [];
  let rparray = [];
  let count=0;
  let checkcount=0;
  const [rpData, setrp] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [blogsData, setblogData] = useState("");
  const [positions, setPosition] = useState("");
  const [mentors, setmentors] = useState("");
  const [error, seterror] = useState(false);
  const [visible, setvisible] = useState(false);
  const [appliedvisible,setappliedvisible]=useState(false)
  const htmlpart = blogsData.description;
  const htmlpartobjective = blogsData.objective;
  const htmlpartoutcomes = blogsData.outcomes;
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [userdata,setuserdata]=useState()


  const closeModal = () => {
    setvisible(false);
  };
  const closeAppliedModal = () => {
    setappliedvisible(false);
  };
///////////////////////////POSITIONS OF RP////////////////////////////////
  const getPositions = async (data) => {
    setisLoading(true);

    data.positions.map(async (position, index) => {
      const { data: Datass } = await Researchpgms(
        `${window.name}position/${position}`
      );

      arr.push(Datass);

      setPosition(arr);
      if (data.positions.length == arr.length) await getMentors(data);
    });
  };

  ////////////////////////////////////////////////////////////


  ////////////////////////////MENTORS OF RP////////////////////////////////////

  const getMentors = async (data) => {
    setisLoading(true);

    data.mentors.map(async (mentor, index) => {
      const { data: Datass } = await Researchpgms(
        `${window.name}mentor/${mentor}`
      );

      array.push(Datass);

      setmentors(array);

      if (array.length == data.mentors.length) {
        setloaded();
        
      }
    });
  };
/////////////////////////////////////////////////////////////////
  const setloaded = () => {
    setisLoading(false);
  };

///////////////////////FUNCSTION FOR APPLY NOW////////////////////////////////////////
  const applicationform = () => {
    if (!isLoggedIn) {
      setvisible(true);
    } else {
      setisLoading(true)
      getApplications(userdata)


      // window.location = `/applicationform/${slug}`;
    }
  };

  //////////////////////////////////////////////////////////////////////////






  //////////////////// FOR USERS RP DATAAAS/////////////////////////////

  const getApplications = async (userdata) => {
    if (userdata.applicationForm.length == 0) {
          window.location = `/applicationform/${slug}`;
      
    } else {
      userdata.applicationForm.map(async (application) => {
        const app_data = {
          id: application,
        };
        const { message: messagee, retdata } = await Tokenlesssendpost(
          `${window.name}show-application-status`,
          app_data
        );
        count++;

        if (retdata != null) array.push(retdata);

        if (count == userdata.applicationForm.length) {
          if (array.length > 0) {
            let check=false;
            array.map((data,index)=>{
              if(data.rp==blogsData._id){
                if(data.data!==3 )
                {
                setisLoading(false)
                check=true;
                setappliedvisible(true)
                
                
                }
               }
               if(index==array.length-1)
               {
                 if(!check)
                 window.location = `/applicationform/${slug}`
               }
             
              })
              } 
          else {
            window.location = `/applicationform/${slug}`;
            
          }
        }
      });
    }
  };

 ///////////////////////////// FOR USERS RP DATAAAS////////////////////////////////////

  //////////////////////////////FOR GETTING THE DATA FOR RP///////////////////////////////////////
  const getBlogs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(
      `${window.name}research-program/${slug}`
    );
    
    setblogData(Datass);
    

    await getPositions(Datass);
  };

  //////////////////////////////////////////////////////////////////////////

  useEffect(async () => {
    const { isLoggedIn: messagee,data: Datass  } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    setuserdata(Datass);
    getBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogsData.title}</title>
      </Helmet>
      {/*////////////////////////////////// POPUP FOR NOT LOGGED IN //////////////////////////////// */}
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
              <p>PLEASE LOGIN TO SUBMIT APPLICATION...</p>
              <br></br>
              <div className="extrapart">
                <div className="signuppart">
                  <Link to="/signup" onClick={closeModal}>
                    Sign Up
                  </Link>
                </div>
                <div>
                  <Link onClick={closeModal}>Close</Link>
                </div>

                <div className="loginpart">
                  <Link to="/login" onClick={closeModal}>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </div>
      {/*/////////////////////////////////////////// POPUP FOR NOT LOGGED IN /////////////////////////////////////*/}

     
      
      {/*//////////////// POPUP FOR ALREADY APPLIED /////////////////////////////////////*/}
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={appliedvisible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeAppliedModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>YOU HAVE ALREADY SUBMITTED APPLICATION.</p>
              <Link  onClick={closeAppliedModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
          {/*///////////////////////////// POPUP FOR ALREADY APPLIED///////////////////////////////////////// */}

      
      
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : error ? (
        <div className="isLoading">
          <h1>OOOps an error occured...</h1>
        </div>
      ) : (
        <div>
          <div className="blogdetailpage openprogrammespage">
            <div className="blogdetailpage-img">
              <img
                src={blogsData.imageUrl}
                alt="Bg"
                className="blogdetailpage-img2 blogdetailpage-img3"
              />

              <div className="blogdetailpage-head openprogrammespage-head">
                <div className="blogdetailpage-top openprogrammespage-top">
                  <>{blogsData.title}</>
                  {blogsData.applicationStatus ? (
                    <p onClick={applicationform}>
                      Deadline - {blogsData.Deadline} !<br></br>
                    </p>
                  ) : (
                    ""
                  )}
                  {/* blogsData.applicationStatus */}
                  {blogsData.applicationStatus? (
                    <button onClick={applicationform} className="applybtn">
                      APPLY NOW
                    </button>
                  ) : (
                    <button>APPLICATION CLOSED</button>
                  )}
                </div>
              </div>
            </div>
            <div className="openprogrammespage-holder">
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head"> Objective</p>
                <p className="openprogrammespage-text">
                  <div
                    dangerouslySetInnerHTML={{ __html: htmlpartobjective }}
                  ></div>
                </p>
              </div>
              <div className="line"></div>
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head">
                  Description of the Research
                </p>

                <div dangerouslySetInnerHTML={{ __html: htmlpart }}></div>
              </div>
              <div className="line"></div>
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head">
                  Outcome of the Research
                </p>
                <p className="openprogrammespage-text">
                  <div
                    dangerouslySetInnerHTML={{ __html: htmlpartoutcomes }}
                  ></div>
                </p>
              </div>
              <div className="line"></div>
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head">
                  Applications Open for following Positions
                </p>
                <p className="openprogrammespage-text">
                  Select following positions from dropdown while filling the
                  form during Registration
                </p>

                <div className="vaccency-holder">
                  {positions &&
                    positions.map((position, index) => (
                      <div className="vaccency-item" key={index}>
                        <p className="vaccency-item-title">{position.title}</p>
                        <p className="vaccency-item-text">
                          Number of Students Required: <span>2</span>
                        </p>

                        <p className="vaccency-item-text">
                          Eligibility Criterion:
                          <span>{position.criterion}</span>
                        </p>
                        {blogsData.applicationStatus ? (
                          <button
                          className="applynow-btn"
                          onClick={applicationform}
                        > 
                      APPLY NOW
                    </button>
                  ) : ""}
                        
                      </div>
                    ))}
                </div>
                <div className="openprogrammespage-feature">
                  <div className="openprogrammespage-feature-col ">
                    <BsCalendarFill
                      size="6em"
                      color="#818181"
                      className="open-icn"
                    />
                    <p className="vaccency-item-title openprogrammespage-feature-title">
                      Total Duration
                    </p>
                    <p className="vaccency-item-text">{blogsData.duration}</p>
                  </div>
                  <div className="openprogrammespage-feature-col openprogrammespage-feature-col2">
                    <BsFillBellFill
                      size="6em"
                      color="#818181"
                      className="open-icn"
                    />
                    <p className="vaccency-item-title openprogrammespage-feature-title">
                      Weekly commitment
                    </p>
                    <p className="vaccency-item-text">{blogsData.commitment}</p>
                  </div>
                </div>
                <div className="mentors">
                  <p className="openprogrammespage-head">Mentors</p>

                  {mentors &&
                    mentors.map((mentor, index) => {
                      const htmlparteducation = mentor.education;
                      const htmlorganisation = mentor.organisation;
                      const htmlpartposition = mentor.position;

                      const htmlpartbio = mentor.bio && mentor.bio;

                      return (
                        <div className="mentors-item" key={index}>
                          <img
                            src={mentor.imageUrl}
                            alt="User"
                            className="mentors-item-img"
                          />
                          <p className="vaccency-item-text mentors-item-text">
                            <span>{mentor.name}</span>
                          </p>
                          <p className="vaccency-item-text mentors-item-text">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: htmlpartposition,
                              }}
                            ></div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: htmlorganisation,
                              }}
                            ></div>{" "}
                            
                            <div
                              dangerouslySetInnerHTML={{
                                __html: htmlparteducation,
                              }}
                            ></div>{" "}
                            {htmlpartbio && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: htmlpartbio,
                                }}
                              ></div>
                            )}
                          </p>
                          <div className="holder-w">
                            <a
                              onClick={() => {
                                window.location = `${mentor.linkedin}`;
                              }}
                              style={{
                                textDecoration: "none",
                                width: "fit-content",
                              }}
                            >
                              <FaLinkedin size="2em" color="#0077b5" />
                            </a>
                            <a
                              target="_blank"
                              href={mentor.googleScholarLink}
                              style={{
                                textDecoration: "none",
                                width: "fit-content",
                              }}
                            >
                              <SiGooglescholar size="2em" color="#3cba54" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="line"></div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default OpenProgrammesPage;

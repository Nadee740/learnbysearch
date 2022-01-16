import { useState } from "react";
import { useEffect } from "react";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import Authverifier from "../Backend/Authverifier";
import Researchpgms from "../Backend/Researchpgms";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import { Helmet } from "react-helmet";
import "./MyApplications.css";
import { Link } from "react-router-dom";
import Footer from "../LandingPage/footer/footer";
const MyApplications = () => {
  const [userData, setuserData] = useState();
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [isempty, setisempty] = useState(false);
  const [applications, setapplication] = useState();
  const [rpData, setrp] = useState();
  const [applicationsData, setapplicationsdata] = useState();
  let array = [];
  let rparray = [];
  let test1 = [];
  let test2 = [];
  let count = 0;
  let checkcount = 1;
  useEffect(async () => {
    const { isLoggedIn: messagee, data: Datass } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    if (messagee) getApplications(Datass);
    else setisLoading(false);
  }, []);

  const getApplications = async (userdata) => {
    if (userdata.applicationForm.length == 0) {
      setisempty(true);
      setisLoading(false);
    } else {
      userdata.applicationForm.map(async (application) => {
        const app_data = {
          id: application,
        };
        // 611bec2c291f071c87488bfa
        
         const { jsonda: retdata } = await Researchpgms(`${window.name}show-application-status?id=${application}`)
        // const { message: messagee, retdata } = await Tokenlesssendpost(
        //   `${window.name}show-application-status`,
        //   app_data
        // );
        count++;
        
        if (retdata.status != "error" && retdata.application!=null && retdata.application!="null") {
          console.log(retdata)
          array.push(retdata.application);
        }

        if (count == userdata.applicationForm.length) {
          if (array.length > 0) {

            setapplication(array);
            setisLoading(false);
            // getreaserch(array);
          } else {
            setisempty(true);
            setisLoading(false);
          }
        }
      });
    }
  };

  const getreaserch = (datas) => {
    datas.map(async (data) => {
      const { data: Datass } = await Researchpgms(
        `${window.name}research-program-id/${data.rp}`
      );

      rparray.push(Datass);
      checkcount++;
      test1.push({ rpdata: Datass, applicationstatus: data });

      if (datas.length == rparray.length) {
        setrp(rparray);
        test1.sort(function (a, b) {
          return (
            Date.parse(b.applicationstatus.date.substring(0, 10)) -
            Date.parse(a.applicationstatus.date.substring(0, 10))
          );
        });
        setapplicationsdata(test1);
        setisLoading(false);
      }
    });
  };
  if (isLoading) {
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );
  }
  if (!isLoggedIn) {
    return (
      <>
        <div className="isLoading">
          <h1>Please Log in</h1>
          <div className="flex-btn">
            <Link to="/login" className="button1 btn2">
              Sign in
            </Link>
          </div>
        </div>
      </>
    );
  }
  if (isempty) {
    return (
      <div className="oopps">
        <h1>Ooops nothing to show ...</h1>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Applications</title>
      </Helmet>
      <div className="application-container">
        <div className="applications-heading">
          <h2>My Applications</h2>
        </div>
        <div className="myapplication-box">
          <div className="myapplication-box-holder">
            <div className="myapplication-row myapplication-row-head">
              <p className="myapplication-row-text myapplication-row-text-head ">
                Program
              </p>
              <p className="myapplication-row-text myapplication-row-text-head ">
                Application Date
              </p>
              <p className="myapplication-row-text myapplication-row-text-head ">
                Status
              </p>
              <p className="myapplication-row-text myapplication-row-text-head ">
                Quiz Status
              </p>
            </div>
            {applications.map((application, index) => {
              console.log(application)
              {/* Object
applicationstatus:
appication: Array(1)
0:
applicationID: "LBR1996"
applicationStatus: 2
createdAt: "2022-01-09T06:28:00.462Z"
paymentStatus: []
position: "61c1a5d52311378561d79aa3"
question1: "aaaaaaaaaaaa"
question2: true
question3: "aaaaaaaaaaaaa"
question4: "8"
question5: "false"
question6: ""
question7: "https://www.google.com/search?sxsrf=AOaemvIyaEr3GJmdQuy4TbAzabbGOIvvLA%3A1641708136541&lei=aHraYdXIIMaTseMP1e6ZSA&q=location%20pathname%20undefined&ved=2ahUKEwjVnLay_6P1AhXGSWwGHVV3BgkQsKwBKAB6BAgtEAE&biw=1536&bih=722&dpr=1.25"
quizScore: "1"
referral_code: ""
researchProgram: "61c1a7b92311378561d79aab" */}

              let classn = "",
                title = "",
                classtype = "myapplication-row-btn ";

              switch (application.applicationStatus) {
                case 7: {
                  classn = "myapplication-row-btn-sub";
                  title = "Submited";
                  break;
                }
                case 6: {
                  classn = "myapplication-row-btn-accept";
                  title = "Archived";
                  break;
                }
                case 5: {
                  classn = "myapplication-row-btn-arch";
                  title = "Accepted";
                  break;
                }
                case 4: {
                  classn = "myapplication-row-btn-approv";
                  title = "Approved";
                  break;
                }
                case 3: {
                  classn = "myapplication-row-btn-rej";
                  title = "Rejected";
                  break;
                }
                case 2: {
                  classn = "myapplication-row-btn-pend";
                  title = "Under Review";
                  break;
                }
                case 1: {
                  classn = "myapplication-row-btn-sub";
                  title = "Applied";
                  break;
                }
              }
              {/* {status: 'ok', msg: 'received the Application status', application: {…}}
application:
applicationID: "LBR0479"
applicationStatus: 5
createdAt: "2021-12-03T07:50:55.807Z"
paymentStatus: []
position: {_id: '60ddbc6978e692ab358f7919', title: 'Machine Learning Researcher '}
question1: "aaaaaaaaa"
question2: true
question3: "aaaaaaaaaa"
question4: "9"
question5: "false"
question6: ""
question7: "https://www.tutorialspoint.com/validate-url-in-reactjs"
referral_code: ""
researchProgram: {_id: '6135f6adf7a62e3442a09f4c', title: 'Artificial Intelligence in Dentistry'}
studentId: "60e186ac3793cf01a050924c"
updatedAt: "2021-12-04T05:26:56.544Z" */}
              classtype = classtype + classn;
              return application.applicationstatus != 6?(
                <div className="myapplication-row" key={index}>
                  <p className="myapplication-row-text ">
                    {application.researchProgram.title}
                  </p>
                  <p className="myapplication-row-text ">
                    {application.createdAt.substring(0, 10)}
                  </p>
                  <p className="myapplication-row-text  ">
                    <button
                      className={classtype}
                    >
                      {title}
                    </button>
                    {}
                  </p>
                  <p className="myapplication-row-text  ">
                    <button
                      onClick={async () => {
                        if (application.applicationStatus == 1) {
                          setisLoading(true);
                         

                          window.location = `/quiz/confirmation/${application.researchProgram._id}/${application.position._id}/${application._id}`;
                        }
                        else
                        {
                          if(application.quizScore)
                         { setisLoading(false)
                          window.location=`/quiz/result/${application.researchProgram._id}/${application.position._id}/${application.quizScore}/0/0`
                         }
                         else{
                           alert("No data found")
                         }
                        }
                      }}
                      className={application.applicationStatus == 1?"myapplication-row-btn myapplication-row-btn-rej":"myapplication-row-btn myapplication-row-btn-approv"}
                    >
                      {application.applicationStatus == 1?"Attend Quiz":"View score"}
                    </button>
                    {}
                  </p>
                  
                </div>
            
              ):""
              
            })}
          </div>
        </div>
        <div
          className="holder-divv"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="applications-heading">
            <h2>Selection Process</h2>
          </div>
          <img
            src="/images/app-status.svg"
            alt="app-status"
            className="app-status app-status-home"
          />
        </div>
        <Footer />
      </div>
      )
    </>
  );
};

export default MyApplications;

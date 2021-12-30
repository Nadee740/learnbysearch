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
        const { message: messagee, retdata } = await Tokenlesssendpost(
          `${window.name}show-application-status`,
          app_data
        );
        count++;

        if (retdata.status != "error") {
          array.push(retdata);
        }

        if (count == userdata.applicationForm.length) {
          if (array.length > 0) {
            setapplication(array);

            getreaserch(array);
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
                Quiz Status
              </p>
              <p className="myapplication-row-text myapplication-row-text-head ">
                Status
              </p>
            </div>
            {applicationsData.map((application, index) => {
              let classn = "",
                title = "",
                classtype = "myapplication-row-btn ";

              switch (application.applicationstatus.data) {
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
                  title = "Attend Quiz";
                  break;
                }
              }
              classtype = classtype + classn;
              return (
                <div className="myapplication-row" key={index}>
                  <p className="myapplication-row-text ">
                    {application.rpdata.title}
                  </p>
                  <p className="myapplication-row-text ">
                    {application.applicationstatus.date.substring(0, 10)}
                  </p>
                  <p className="myapplication-row-text  ">
                    <button
                      onClick={async () => {
                        if (application.applicationstatus.data == 1) {
                          setisLoading(true);
                          console.log(
                            application.applicationstatus.appication[0]
                          );

                          window.location = `/quiz/${application.applicationstatus.appication[0].researchProgram}/${application.applicationstatus.appication[0].position}/${application.applicationstatus.appication[0]._id}`;
                        }
                      }}
                      className={classtype}
                    >
                      {title}
                    </button>
                    {}
                  </p>
                </div>
              );
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

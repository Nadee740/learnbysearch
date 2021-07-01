import { useState } from "react";
import { useEffect } from "react";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import Authverifier from "../Backend/Authverifier";
import Researchpgms from "../Backend/Researchpgms";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import "./MyApplications.css";
const MyApplications = () => {
  const [userData, setuserData] = useState();
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [isempty, setisempty] = useState(false);
  const [applications, setapplication] = useState();
  const [rpData, setrp] = useState();
  let array = [];
  let rparray = [];
  let count = 1;
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
      console.log("hy");
    } else {
      userdata.applicationForm.map(async (application) => {
        const app_data = {
          id: application,
        };
        const { message: messagee, retdata } = await Tokenlesssendpost(
          `${window.name}show-application-status`,
          app_data
        );
        //  count++;
        //  console.log(count)
        if (retdata != null) array.push(retdata);
        console.log(retdata.data, "kunjoo");
        if (count == userdata.applicationForm.length) {
          if(array.length>0)
          {
          setapplication(array);
          console.log(array, "kunjoo");
getreaserch(array);
          }
          else{
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
      if (datas.length == rparray.length) {
        setrp(rparray);

        console.log(rparray, "moonjj");
        setisLoading(false);
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="isLoading">
        <SolarSystemLoading/>
        </div>
      ) : isLoggedIn ? (
        isempty ? (
          <div className="oopps">
            <h1>Ooops nothing to show ...</h1>
          </div>
        ) : (
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
                </div>
                {applications.map((application, index) => {
                  console.log(application, "idhend");
                  let classn = "",
                    title = "",
                    classtype = "myapplication-row-btn ";

                  switch (application.data) {
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
                      title = "Pending";
                      break;
                    }
                    case 1: {
                      classn = "myapplication-row-btn-sub";
                      title = "Submited";
                      break;
                    }
                  }
                  classtype = classtype + classn;
                  return (
                    <div className="myapplication-row" key={index}>
                      <p className="myapplication-row-text ">
                        {rpData[index].title}
                      </p>
                      <p className="myapplication-row-text ">2 June 2020</p>
                      <p className="myapplication-row-text  ">
                        <button className={classtype}>{title}</button>
                        {}
                      </p>
                    </div>
                  );
                })}

                {/* <div className="myapplication-row">
            <p className="myapplication-row-text ">Name of Program 1</p>
            <p className="myapplication-row-text ">2 June 2020</p>
            <p className="myapplication-row-text  ">
              <button className="myapplication-row-btn myapplication-row-btn-approv ">
                Approved
              </button>
            </p>
          </div>
          <div className="myapplication-row">
            <p className="myapplication-row-text ">Name of Program 3</p>
            <p className="myapplication-row-text ">2 June 2020</p>
            <p className="myapplication-row-text  ">
              <button className="myapplication-row-btn myapplication-row-btn-rej ">
                Rejected
              </button>
            </p>
          </div> */}
              </div>
            </div>
            <div className="applications-heading">
              <h2>Route Map</h2>
            </div>
            <img
              src="/images/app-status.svg"
              alt="app-status"
              className="app-status"
            />
          </div>
        )
      ) : (
        <div className="isLoading">
          <h1>Please Log in</h1>
        </div>
      )}
    </>
  );
};

export default MyApplications;

import Modal from "react-awesome-modal";
import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

import SendPost from "../Backend/Sendpost";

import { MdDoneAll, MdClear } from "react-icons/md";
import Footer from "../LandingPage/footer/footer";
import { useEffect } from "react";
import "./EditProfile.css";
import Logout from "../Backend/Logout";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Authverifier from "../Backend/Authverifier";
import Tooltip from "@material-ui/core/Tooltip";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import {Helmet} from "react-helmet";

const EditProfile = () => {
  const [userid, setUserid] = useState(localStorage.getItem("loggedinuserid"));
  let userrr = { id: userid };

  const getData = async () => {
    setisLoading(true);
    const { isLoggedIn: messagee, data: datas } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    console.log(datas, "Enghaneelum");
    setFirstName(datas.FirstName);
    setMiddleName(datas.MiddleName);
    setLastName(datas.LastName);
    setemail(datas.email);
    setPhoneNumber(datas.phoneNumber);
    setdate(datas.DOB);
    setCity(datas.City);
    setState(datas.State);
    setCountry(datas.Country);
    setDegree(datas.Education ? datas.Education.Degree : "");
    setField(datas.Education ? datas.Education.Field : "");
    setCollegeName(datas.Education ? datas.Education.College : "");
    setUniversity(datas.Education ? datas.Education.University : "");
    setGraduationYear(datas.Education ? datas.Education.GraduationYear : "");
    setisverfied(datas.isPhoneVerified);
    setisLoading(false);
  };

  useEffect(async () => {
    getData();
  }, []);

  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [email, setemail] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [Degree, setDegree] = useState("");
  const [Field, setField] = useState("");
  const [CollegeName, setCollegeName] = useState("");
  const [University, setUniversity] = useState("");
  const [GraduationYear, setGraduationYear] = useState("");
  const [value, setdate] = useState();
  const [visible, setvisible] = useState(false);
  
  const [otp, setotp] = useState("");
  const [otpsend, setotpsend] = useState(false);
  const [emailerror, setemailerr] = useState();
  const [phoneerror, setphoneerr] = useState();
  const [otperror, setotperr] = useState();
  const [isverfied, setisverfied] = useState();
  const [isLoggedIn, setisLoggedin] = useState(false);
  

  const [isLoading, setisLoading] = useState(false);

  const submit = (LogoutFromall) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure want to logout ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            if (LogoutFromall) LogOutFromAllDevice();
            else LogOut();
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const LogOut = async () => {
    const { LoggedOut: messagee } = await Logout(`${window.name}logout`);
    if (messagee) {
  
      localStorage.removeItem("LoggedInUserTokenID");
      window.location = "/";
    } else {
  
    }
  };
  const LogOutFromAllDevice = async () => {
    const { LoggedOut: messagee } = await Logout(`${window.name}logout-all`);
    if (messagee) {
      
      localStorage.removeItem("LoggedInUserTokenID");
      window.location = "/";
    } else {
     
    }
  };

  const closeModal = () => {
    setvisible(false);
  }; 
  
  const closeOtpModal = () => {
    setotpsend(false);
  };

  const setcursor = (id) => {
    document.getElementById(id).focus();
  };

  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };

  const VERIFYPhonenumber = async (e) => {
    e.preventDefault()
   
    if (
      phoneNumber == "" ||
      phoneNumber.length > 13 ||
      phoneNumber.length < 6
    ) {
      setphoneerr("PLEASE TYPE A VALID PHONE NUMBER");
      stylefunction("2px outset red", "PhoneNumber");
      setcursor("PhoneNumber");
    } else {
      const veri_data = {
        number: phoneNumber,
      };
     
      const { message: messagee } = await SendPost(
        `${window.name}number-verification`,
        veri_data
      );
      if (messagee.includes("successfully")) {
        setotpsend(true);
        
        setphoneerr(messagee);
        setcursor("otp");
      } else {
        setcursor("PhoneNumber");
        setphoneerr(messagee);
      }
    }
  };

  const VerifyOtp = async () => {
    setotperr();
    console.log("otpmon");

    const submit_code = {
      code: otp,
      number: phoneNumber,
    };
    const { message: messagee } = await SendPost(
      `${window.name}submit-code`,
      submit_code
    );

    if (messagee.includes("verified")) {
      setphoneerr("");
      setisverfied(true);
      setotpsend(false);
    }

    setotperr("wrong code");
  };

  const MakeChanges = async (e) => {
    e.preventDefault();
    const DOB = value;
    const edit_data = {
      FirstName,
      MiddleName,
      LastName,
      DOB,
      phoneNumber,
      email,
      City,
      State,
      Country,
      Degree,
      Field,
      CollegeName,
      University,
      GraduationYear,
    };
    
    const { message: messagee } = await SendPost(
      `${window.name}edit-profile`,
      edit_data
    );

    if (messagee.includes("updated")) {
      setvisible(true);
    } else {
      setemailerr(messagee);
      stylefunction("2px outset red", "email");
      setcursor("email");
    }
  };

  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home | EditProfile</title>
                
            </Helmet>

            <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={otpsend}
            width="350"
            height="250"
            effect="fadeInUp"
            onClickAway={closeOtpModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <input
                id="otp"
                type="text"
                placeholder="OTP"
                onChange={(e) => {
                  setotp(e.target.value);
                }}
                className="popup-input"
              ></input>
              <br></br>
              <label htmlFor="">{otperror && otperror}</label>
              <br></br>
              <button className="popup-button" onClick={VerifyOtp}>
                SUBMIT
              </button>
            </div>
          </Modal>
        </section>
      </div>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="350"
            height="250"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <h1>LEARN BY RESEARCH</h1>
              <p>PROFILE UPDATES SUCCESFULLY ...</p>
              <Link to="/" onClick={closeModal}>
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
      ) : isLoggedIn ? (
        <section className="sign-up editprofile">
          <div className="container">
            <div className="signup-content">
              <div className="signup-image">
                <img src="../images/Profile.svg" alt="Login pic"></img>
              </div>
              <div className="singup-form">
                <h2 className="form-title">EDIT PROFILE</h2>
                <form onSubmit={MakeChanges}>
                  <Tooltip title="Name">
                    <>
                      <p className="inputtext">First Name</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="First Name"
                            required
                            value={FirstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>
                  <Tooltip title="Middle Name">
                    <>
                      <p className="inputtext">Middle Name</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="Middle Name"
                            autoComplete="off"
                            value={MiddleName}
                            onChange={(e) => {
                              setMiddleName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Last Name">
                    <>
                      <p className="inputtext">Last Name</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            name="LastName"
                            id="LastName"
                            placeholder="Last Name"
                            autoComplete="off"
                            required
                            value={LastName}
                            className="input"
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Email">
                    <>
                      <p className="inputtext">Email</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            readonly="true"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                            value={email}
                          />
                          <MdDoneAll size="1.3em" color="#00e676" />
                        </div>
                        <label className="label" htmlFor="">
                          {emailerror && emailerror}
                        </label>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Date of Birth">
                    <>
                      <p className="inputtext">Date Of Birth</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                          required
                            type="date"
                            placeholder="DD-MM-YY"
                            className="inputdate"
                            onChange={(e) => {
                              console.log(Date.parse(e.target.value));
                              console.log(e.target.value);
                              setdate(e.target.value);
                            }}
                            value={value}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>
                  <p className="inputtext">Phone Number</p>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      
                          <input
                            id="PhoneNumber"
                            type="tel"
                            placeholder="Your Phone Number"
                            autoComplete="off"
                            required
                            value={phoneNumber}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                            }}
                          />
                       
                      {isverfied ? (
                        <Tooltip title="Verifeid">
                        
                          <MdDoneAll size="1.2em" className="emtick" />
                        </Tooltip>
                      ) : (
                        <MdClear size="1.2em" className="emtick" color="red" />
                      )}
                    </div>
                    <label className="label" htmlFor="">
                      {phoneerror && phoneerror}
                    </label>
                  </div>

                  {isverfied  ? (
                    <></>
                  ) : (
                    <button
                      className="edit-profile-btn"
                      onClick={(e)=>{VERIFYPhonenumber(e)}}
                    >
                      VERIFY PHONE NUMBER
                    </button>
                  )}

                  {/* <div className="inputholder otpdisplay">
                    <div className="inputholder-top">
                      <input
                        type="text"
                        placeholder="OTP"
                        autoComplete="off"
                        id="otp"
                        className="otp"
                        value={otp}
                        onChange={(e) => {
                          setotp(e.target.value);
                        }}
                      />
                    </div>
                    <label className="label" htmlFor="">
                      {otperror && otperror}
                    </label>
                  </div> */}

                  <Tooltip title="City">
                  <>
                  <p className="inputtext">City</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          placeholder="City"
                          autoComplete="off"
                          required
                          value={City}
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>
                  <Tooltip title="State">
                  <>
                  <p className="inputtext">State</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          placeholder="State"
                          autoComplete="off"
                          required
                          value={State}
                          onChange={(e) => {
                            setState(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>
                  <Tooltip title="Country">
                  <>
                  <p className="inputtext">Country</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          name="Country"
                          id="Country"
                          placeholder="Country"
                          autoComplete="off"
                          required
                          value={Country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>
                  <Tooltip title="Degree">
                  <>
                  <p className="inputtext">Degree</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          placeholder="Degree"
                          autoComplete="off"
                          required
                          value={Degree}
                          onChange={(e) => {
                            setDegree(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>
                  <Tooltip title="Field">
                  <>
                  <p className="inputtext">Branch/Area of Study</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          placeholder="Field"
                          autoComplete="off"
                          required
                          value={Field}
                          onChange={(e) => {
                            setField(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>
                  <Tooltip title="College Name">
                  <>
                  <p className="inputtext">College Name</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          placeholder="College Name"
                          autoComplete="off"
                          required
                          autoComplete="off"
                          required
                          value={CollegeName}
                          onChange={(e) => {
                            setCollegeName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>

                  <Tooltip title="University">
                  <>
                  <p className="inputtext">University</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          placeholder="University"
                          autoComplete="off"
                          required
                          value={University}
                          onChange={(e) => {
                            setUniversity(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Graduation Year">
                  <>
                  <p className="inputtext">Graduation Year</p>
                    <div className="inputholder">
                      <div className="inputholder-top">
                        <input
                          type="text"
                          placeholder="Graduation Year"
                          autoComplete="off"
                          required
                          value={GraduationYear}
                          onChange={(e) => {
                            setGraduationYear(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    </>
                  </Tooltip>
                  <input
                  // onClick={MakeChanges}
                    type="submit"
                    value="SAVE CHANGES"
                    className="submit-btn"
                  />
                  <Link to="/changepassword">
                    <p className="form-btmtext form-btmtext1">
                      Change Password
                    </p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="isLoading">
          <h1>Please Log in</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EditProfile;

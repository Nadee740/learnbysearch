import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { HiEye, HiEyeOff } from "react-icons/hi";
import "./Signup.css";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import { Helmet } from "react-helmet";
import { Stepper, Step } from "react-form-stepper";
import Tooltip from "@material-ui/core/Tooltip";
import { Country, State, City } from "country-state-city";
import { useEffect } from "react";
import Researchpgms from "../Backend/Researchpgms";
import { MdDoneAll, MdClear } from "react-icons/md";
import Isverified from "../Backend/isverified";
const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmpass, setConfrpass] = useState("");
  const [phoneNumber, setPhone] = useState("+91");
  const [emailerror, setemailerror] = useState();
  const [usererror, setusererror] = useState();
  const [passerror, setpassrerror] = useState();
  const [phoneerror, setphoneerror] = useState();
  const [confirmpasserror, setconfirmpassrerror] = useState();
  const [visible, setvisible] = useState(false);
  const [passVISIBLE, setpassVISIBLE] = useState(false);
  const [confirmpassVISIBLE, setconfirmpassVISIBLE] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [allcountry, setallCountry] = useState("");
  const [allstate, setallState] = useState("");
  const [allcity, setallCity] = useState("");
  const [Degree, setDegree] = useState("");
  const [Field, setField] = useState("");
  const [CollegeName, setCollegeName] = useState("");
  const [listofCollege, setlistCollege] = useState();
  const [selectlistofCollege, setselectlistCollege] = useState([]);
  const [University, setUniversity] = useState("");
  const [GraduationYear, setGraduationYear] = useState("");
  const [value, setdate] = useState();
  const [resendmailvisible, setresendmailvisible] = useState(false);
  const [phoneerrorr, setphoneerr] = useState();
  const [showsuggestions, setshowsuggestions] = useState(false);
  const [emailerr, setemailerr] = useState("");
  const [otp, setotp] = useState("");
  const [otpsend, setotpsend] = useState(false);

  const [verifyvisible, setverifyvisible] = useState(false);
  const [otperror, setotperr] = useState();
  const [isverfied, setisverfied] = useState(false);
  const setcursor = (id) => {
    document.getElementById(id).focus();
  };
  const VERIFYPhonenumber = async (e) => {
    e.preventDefault();

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

      const { message } = await SendPost(
        `${window.name}number-verification`,
        veri_data
      );
      if (message.includes("successfully")) {
        setotpsend(true);

        setphoneerr(message);
        setcursor("otp");
      } else {
        setcursor("PhoneNumber");
        setphoneerr(message);
      }
    }
  };
  ////for searching the list of college //
  const searchMethod = (input) => {
    let array = listofCollege;
    let arr = [];
    if (array[0]) {
      array.map((college) => {
        if (college.college.toLowerCase().includes(input.toLowerCase())) {
          arr.push(college.college);
        }
      });
      if (arr.length > 0) {
        setselectlistCollege(arr);
        setshowsuggestions(true);
      } else {
        setshowsuggestions(false);
      }
    }
  };

  const suggestionsListComponent = (
    <ul class="suggestions">
      {selectlistofCollege.map((college, index) => {
        return (
          <li
            onClick={() => {
              setshowsuggestions(false);
              setCollegeName(college);
            }}
            key={index}
            className="suggestion-active"
          >
            {college}
          </li>
        );
      })}
    </ul>
  );
  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };
  const closeModal = () => {
    setvisible(false);
  };

  const closeModalmailnot = () => {
    setverifyvisible(false);
  };
  const closeverifyModal = () => {
    setverifyvisible(false);
    setresendmailvisible(true);
  };


  useEffect(async () => {
    getAllCountries();
    getCOllegename();
  }, []);
  const getAllCountries = () => {
    const countries = Country.getAllCountries();
    setallCountry(countries);
  };

  const getCOllegename = async () => {
    const { data } = await Researchpgms(`${window.name}get-college`);
    setlistCollege(data);
  };
  const MakeChanges = async () => {
    stylefunction("2px solid #81818128", "degree");
    stylefunction("2px solid #81818128", "collegename");
    stylefunction("2px solid #81818128", "field");
    stylefunction("2px solid #81818128", "university");
    stylefunction("2px solid #81818128", "graduationyear");

    if (
      Degree == "" ||
      CollegeName == "" ||
      Field == "" ||
      University == "" ||
      GraduationYear == ""
    ) {
      if (Degree == "") stylefunction("2px outset red", "degree");
      if (CollegeName == "") stylefunction("2px outset red", "collegename");
      if (Field == "") stylefunction("2px outset red", "field");
      if (University == "") stylefunction("2px outset red", "university");
      if (GraduationYear == "")
        stylefunction("2px outset red", "graduationyear");
    } else {
      const DOB = value;
      const edit_data = {
        FirstName,
        MiddleName,
        LastName,
        DOB,
        phoneNumber,
        email,
        City: city,
        State: state,
        Country: country,
        Degree,
        Field,
        CollegeName,
        University,
        GraduationYear,
      };
      const colldata = {
        college: CollegeName,
      };

      const { message } = await SendPost(
        `${window.name}edit-profile`,
        edit_data
      );

      const { message: createcollege } = await Tokenlesssendpost(
        `${window.name}create-college`,
        colldata
      );

      if (message.includes("updated")) {
      
        SetStep(step + 1);
      }
    }
  };
  const output = async () => {
    setconfirmpassrerror();
    setphoneerror();
    setusererror();
    setemailerror();
    setusererror();
    setpassrerror();

    stylefunction("2px solid #81818128", "username");
    stylefunction("2px solid #81818128", "email");
    stylefunction("2px solid #81818128", "phone");
    stylefunction("2px solid #81818128", "password");
    stylefunction("2px solid #81818128", "firstname");
    stylefunction("2px solid #81818128", "lastname");
    const reemail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      FirstName.length > 2 &&
      LastName.length > 2 &&
      reemail.test(String(email).toLowerCase()) &&
      phoneNumber.length > 6 &&
      username.length > 1
    ) {
      let re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{6,})/;

      if (re.test(password)) {
        if (confirmpass != password) {
          setconfirmpassrerror("Password does not match ");
          setcursor("confirmpassword");
          stylefunction("2px outset red", "password");
          stylefunction("2px outset red", "confirmpassword");
        } else {
          const reg_data = {
            username,
            FirstName,
            LastName,
            email,
            phoneNumber,
            password,
          };

          const { message: messagee } = await Tokenlesssendpost(
            `${window.name}register`,
            reg_data
          );

          if (messagee.includes("verification")) {
            SetStep(step + 1);
          } else if (messagee.includes("email")) {
            setemailerror(messagee);
            stylefunction("2px outset red", "email");
            setcursor("email");
          } else if (messagee.includes("password")) {
            setpassrerror(messagee);
            stylefunction("2px outset red", "password");
            setcursor("password");
          } else if (messagee.toLowerCase().includes("username")) {
            stylefunction("2px outset red", "username");

            setusererror(messagee);
            setcursor("username");
          } else if (messagee.toLowerCase().includes("phone")) {
            stylefunction("2px outset red", "phone");
            setphoneerror(messagee);
            setcursor("phone");
          }
        }
      } else {
        stylefunction("2px outset red", "password");
        alert(
          "The must contain the following:\n1. Atleast one special character\n2. Atleast one number\n3. Atleast one uppercase character\n4. Must be greater than 5 characters"
        );
      }
    } else {
      if (FirstName.length < 3) stylefunction("2px outset red", "firstname");
      if (LastName.length < 3) stylefunction("2px outset red", "lastname");
      if (!reemail.test(String(email).toLowerCase()))
        stylefunction("2px outset red", "email");
      if (phoneNumber.length <= 6) stylefunction("2px outset red", "phone");
      if (username.length <= 1) stylefunction("2px outset red", "username");
    }
  };
  const closeOtpModal = () => {
    setotpsend(false);
  };

  const VerifyOtp = async () => {
    setotperr();

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
    } else setotperr("wrong code");
  };

  const closeresendmail = () => {
    setresendmailvisible(false);
  };

  const ResendMail = async () => {
    const log_data = {
      email,
    };
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}resend-email-verification`,
      log_data
    );

    setemailerr(messagee);
  };
  //////////////////

  const [step, SetStep] = useState(0);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | SignUp</title>
      </Helmet>
      <div className="popupscreen">
        <section
          className="popupscr
        een"
        >
          <Modal
            visible={verifyvisible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeModalmailnot}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>
                Verification email already sent on <br /> email address.
              </p>
              <br />
              <Link onClick={closeverifyModal}>Resend verification mail</Link>
            </div>
          </Modal>
        </section>
      </div>

      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={resendmailvisible}
            width="350"
            height="250"
            effect="fadeInUp"
            onClickAway={closeresendmail}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <input
                id="emailresendmail"
                type="email"
                placeholder="email"
                style={{
                  width: "80%",
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="popup-input"
              ></input>
              <br></br>
              <label htmlFor="email">{emailerr && emailerr}</label>
              <br></br>
              <button className="popup-button" onClick={ResendMail}>
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
              <p>Your registration was successfull.</p>
              <Link to="/login" onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
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

      <section className="sign-up">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="../images/SignUp.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">REGISTRATION</h2>
              <div className="stepperdiv">
                <Stepper
                  activeStep={step}
                  styleConfig={{
                    completedBgColor: "#bd00c0",
                    activeBgColor: "#C86FC9",
                    inactiveBgColor: "#bdbdbd",
                  }}
                >
                  <Step label="Create Account" />
                  <Step label="Personal Details" />
                  <Step label="Educational Qualification" />
                  <Step label="Verification" />
                </Stepper>
                <div className="steppHolder">
                  {step === 0 ? (
                    <form onSubmit={output} id="register-form">
                      <div className="inputholder" id="firstname">
                        <div className="inputholder-top">
                          <input
                            required
                            type="text"
                            value={FirstName}
                            placeholder="First Name"
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="inputholder" id="lastname">
                        <div className="inputholder-top">
                          <input
                            required
                            type="text"
                            value={LastName}
                            placeholder="Last Name"
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="inputholder" id="username">
                        <div className="inputholder-top">
                          <input
                            required
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                        </div>
                        <label className="label" htmlFor="">
                          {usererror && usererror}
                        </label>
                      </div>

                      <div className="inputholder" id="email">
                        <div className="inputholder-top">
                          <input
                            required
                            type="mail"
                            value={email}
                            placeholder="E-Mail"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        <label className="label" htmlFor="">
                          {emailerror && emailerror}
                        </label>
                      </div>

                      <div className="inputholder" id="phone">
                        <div className="inputholder-top">
                          <input
                            required
                            type="tel"
                            value={phoneNumber}
                            placeholder="phone number"
                            defaultValue="+91"
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </div>
                        <label className="label" htmlFor="">
                          {phoneerror && phoneerror}
                        </label>
                      </div>
                      <div className="inputholder" id="password">
                        <div className="inputholder-top">
                          <input
                            required
                            value={password}
                            type={passVISIBLE ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => {
                              setPass(e.target.value);
                            }}
                          />
                          {passVISIBLE ? (
                            <HiEye
                              onClick={() => {
                                setpassVISIBLE(!passVISIBLE);
                              }}
                              size="1.3em"
                              color="#404040"
                            />
                          ) : (
                            <HiEyeOff
                              size="1.3em"
                              color="#404040"
                              onClick={() => {
                                setpassVISIBLE(!passVISIBLE);
                              }}
                            />
                          )}
                        </div>
                        <label className="label" htmlFor="">
                          {passerror && passerror}
                        </label>
                      </div>

                      <div className="inputholder" id="confirmpassword">
                        <div className="inputholder-top">
                          <input
                            required
                            value={confirmpass}
                            type={confirmpassVISIBLE ? "text" : "password"}
                            placeholder="Confirm Password"
                            onBlur={() => {
                              stylefunction(
                                "2px solid #81818128",
                                "confirmpassword"
                              );
                            }}
                            onFocus={() => {
                              if (confirmpass === password) {
                                stylefunction(
                                  "2px solid #81818128",
                                  "confirmpassword"
                                );
                              } else {
                                stylefunction(
                                  "2px outset red",
                                  "confirmpassword"
                                );
                              }
                            }}
                            onChange={(e) => {
                              setConfrpass(e.target.value);
                              if (e.target.value === password) {
                                stylefunction(
                                  "2px solid #81818128",
                                  "confirmpassword"
                                );
                              } else {
                                stylefunction(
                                  "2px outset red",
                                  "confirmpassword"
                                );
                              }
                            }}
                          />
                          {confirmpassVISIBLE ? (
                            <HiEye
                              size="1.3em"
                              color="#404040"
                              onClick={() => {
                                setconfirmpassVISIBLE(!confirmpassVISIBLE);
                              }}
                            />
                          ) : (
                            <HiEyeOff
                              size="1.3em"
                              color="#404040"
                              onClick={() => {
                                setconfirmpassVISIBLE(!confirmpassVISIBLE);
                              }}
                            />
                          )}
                        </div>
                        <label className="label" htmlFor="">
                          {confirmpasserror && confirmpasserror}
                        </label>
                      </div>
                    </form>
                  ) : null}

                  {step === 1 ? (
                    <div className="centeralign">
                      {" "}
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
                                  setdate(e.target.value);
                                }}
                                value={value}
                              />
                            </div>
                          </div>
                        </>
                      </Tooltip>{" "}
                      <Tooltip title="Country">
                        <>
                          <p className="inputtext">Country</p>
                          <div className="inputholder">
                            <div className="inputholder-top">
                              <select
                                className="selectBox"
                                required
                                name="country"
                                id="country"
                                onChange={(e) => {
                                  const data = JSON.parse(e.target.value);
                                  setCountry(data.name);
                                  setState("");
                                  setCity("");
                                  setallCity("");
                                  const allstates = State.getStatesOfCountry(
                                    data.isoCode
                                  );

                                  setallState(allstates);
                                }}
                              >
                                <option>
                                  {country ? country : "Select country"}
                                </option>
                                {allcountry &&
                                  allcountry.map((country) => (
                                    <option value={JSON.stringify(country)}>
                                      {country.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          </div>
                        </>
                      </Tooltip>
                      <Tooltip>
                        <>
                          <p className="inputtext">State</p>

                          <div className="inputholder">
                            <div className="inputholder-top">
                              <select
                                className="selectBox"
                                name="state"
                                id="state"
                                onChange={(e) => {
                                  const data = JSON.parse(e.target.value);
                                  setState(data.name);
                                  setCity("");
                                  const allcities = City.getCitiesOfState(
                                    data.countryCode,
                                    data.isoCode
                                  );
                                  setallCity(allcities);
                                }}
                              >
                                <option>
                                  {state ? state : "Select state"}
                                </option>
                                {allstate &&
                                  allstate.map((state) => (
                                    <option value={JSON.stringify(state)}>
                                      {state.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          </div>
                        </>
                      </Tooltip>
                      <Tooltip>
                        <>
                          <p className="inputtext">City</p>
                          <div className="inputholder">
                            <div className="inputholder-top">
                              <select
                                name="city"
                                id="city"
                                className="selectBox"
                                onChange={(e) => {
                                  const data = JSON.parse(e.target.value);
                                  setCity(data.name);
                                }}
                                name="city"
                                id="city"
                              >
                                <option>{city ? city : "select city"}</option>
                                {allcity &&
                                  allcity.map((city) => (
                                    <option value={JSON.stringify(city)}>
                                      {city.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          </div>
                        </>
                      </Tooltip>
                    </div>
                  ) : null}
                  {step === 2 ? (
                    <div className="centeralign">
                      {" "}
                      <Tooltip title="Degree">
                        <>
                          <p className="inputtext">Degree</p>
                          <div className="inputholder" id="degree">
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
                          <div className="inputholder" id="field">
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
                          <div className="inputholder" id="collegename">
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
                                  searchMethod(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          {showsuggestions ? suggestionsListComponent : ""}
                        </>
                      </Tooltip>
                      <Tooltip title="University">
                        <>
                          <p className="inputtext">University</p>
                          <div className="inputholder" id="university">
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
                          <div className="inputholder" id="graduationyear">
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
                    </div>
                  ) : null}
                  {/* {step === 3 ? (
                    <div className="centeralign">
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
                              setPhone(e.target.value);
                            }}
                          />

                          {isverfied ? (
                            <Tooltip title="Verifeid">
                              <MdDoneAll size="1.2em" className="emtick" />
                            </Tooltip>
                          ) : (
                            <MdClear
                              size="1.2em"
                              className="emtick"
                              color="red"
                            />
                          )}
                        </div>
                        <label className="label" htmlFor="">
                          {phoneerror && phoneerror}
                        </label>
                      </div>

                      {isverfied ? (
                        <></>
                      ) : (
                        <button
                          className="edit-profile-btn"
                          onClick={(e) => {
                            VERIFYPhonenumber(e);
                          }}
                        >
                          VERIFY PHONE NUMBER
                        </button>
                      )}
                    </div>
                  ) : null} */}
                  <div className="btnholder">
                    {step > 1 ? (
                      <button
                        className="submit-btn submit-btn2"
                        onClick={() => {
                          SetStep(step - 1);
                        }}
                      >
                        PREVIOUS STEP
                      </button>
                    ) : null}

                    <button
                      className="submit-btn submit-btn2"
                      onClick={async () => {
                        if (step < 4) {
                          if (step == 0) output();
                          else if (step == 1) {
                            if (city != "") SetStep(step + 1);
                            else alert("Please choose city");
                          } else if (step == 2) MakeChanges();
                          else if(step ==3){
                            const { retdata: messagee } = await Isverified(
          `${window.name}is-user-verified`,
          { username: username }
        );

        if (messagee) {
          SetStep(step + 1)
          setvisible(true);
        } else {
          
          alert("please verify your mail");
        }
                          }
                          else SetStep(step + 1);
                        } else {
                        }
                      }}
                    >
                     {step==3?"VERIFY MAIL":"NEXT STEP"}
                    </button>
                  </div>
                </div>
                <Link to="/login">
                  <p className="form-btmtext form-btmtext1">
                    Already registered ? Login
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

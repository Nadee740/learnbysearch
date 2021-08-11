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
const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
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
  const setcursor = (id) => {
    document.getElementById(id).focus();
  };

  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };
  const closeModal = () => {
    setvisible(false);
  };
  const clearform = () => {
    setFirstName();
    setLastName();
    setPass();
    setUsername();
    setEmail();
    setPass();
    setConfrpass();
  };

  const output = async (e) => {
    e.preventDefault();

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

    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{6,})/;

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
          document.getElementById("register-form").reset();
          setvisible(true);
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
              <p>
                Please verify your email.<br></br>
                Please Check spam folder too !
              </p>
              <Link to="/" onClick={closeModal}>
                Close
              </Link>
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
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            required
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            required
                            type="text"
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

                  {step === 1 ? <div>Personal Details</div> : null}
                  {step === 2 ? <div>College Details</div> : null}
                  {step === 3 ? <div>verification</div> : null}
                  <div className="btnholder">
                    {step !== 0 ? (
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
                      onClick={() => {
                        if (step < 3) {
                          SetStep(step + 1);
                        } else {
                        }
                      }}
                    >
                      NEXT STEP
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

{
  /* <h2 className="form-title">REGISTRATION</h2>
              <form onSubmit={output} id="register-form">
                <div className="inputholder">
                  <div className="inputholder-top">
                    <input
                      required
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="inputholder">
                  <div className="inputholder-top">
                    <input
                      required
                      type="text"
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
                      type={confirmpassVISIBLE ? "text" : "password"}
                      placeholder="Confirm Password"
                      onBlur={() => {
                        stylefunction("2px solid #81818128", "confirmpassword");
                      }}
                      onFocus={() => {
                        if (confirmpass === password) {
                          stylefunction(
                            "2px solid #81818128",
                            "confirmpassword"
                          );
                        } else {
                          stylefunction("2px outset red", "confirmpassword");
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
                          stylefunction("2px outset red", "confirmpassword");
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

                <input
                  type="submit"
                  value="SIGN UP"
                  placeholder="Sign Up"
                  className="submit-btn"
                />
                <Link to="/login">
                  <p className="form-btmtext form-btmtext1">
                    Already registered ? Login
                  </p>
                </Link>
              </form> */
}

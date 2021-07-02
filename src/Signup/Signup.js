import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { HiEye, HiEyeOff } from "react-icons/hi";
import "./Signup.css";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import { Helmet } from "react-helmet";

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

    stylefunction("none", "username");
    stylefunction("none", "email");
    stylefunction("none", "phone");
    stylefunction("none", "password");

    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{6,})/;

    if (re.test(password)) {
      if (confirmpass != password) {
        setconfirmpassrerror("Password does not match ");
        setcursor("confirmpassword");
        stylefunction("0.2px outset red", "password");
        stylefunction("0.2px outset red", "confirmpassword");
      } else {
        const reg_data = {
          username,
          FirstName,
          LastName,
          email,
          phoneNumber,
          password,
        };
        console.log(reg_data);

        const { message: messagee } = await Tokenlesssendpost(
          `${window.name}register`,
          reg_data
        );
        console.log(messagee);
        if (messagee.includes("verification")) {
          document.getElementById("register-form").reset();
          setvisible(true);
        } else if (messagee.includes("email")) {
          setemailerror(messagee);
          stylefunction("0.2px outset red", "email");
          setcursor("email");
        } else if (messagee.includes("password")) {
          setpassrerror(messagee);
          stylefunction("0.2px outset red", "password");
          setcursor("password");
        } else if (messagee.includes("Username")) {
          stylefunction("0.2px outset red", "username");

          setusererror(messagee);
          setcursor("username");
        } else if (messagee.toLowerCase().includes("Phone")) {
          stylefunction("0.2px outset red", "phone");
          setphoneerror(messagee);
          setcursor("phone");
        }
      }
    } else {
      stylefunction("0.2px outset red", "password");
      alert(
        "Password should contain uppercase,lowercase,digit,alpha characters"
      );
    }
  };

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
                PLEASE VERIFY YOUR EMAIL .YOUR ARE ONE STEP AHEAD OF CREATING
                YOUR ACCOUNT...
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
                          stylefunction("0.2px outset red", "confirmpassword");
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
                          stylefunction("0.2px outset red", "confirmpassword");
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

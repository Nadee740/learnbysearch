import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import React, { Component } from "react";
import Modal from "react-awesome-modal";

import "./Signup.css";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [username, setUser] = useState("");
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
    setLastName()
    setPass();
    setUser();
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
    }
    else{
      alert("Password should contain uppercase,lowercase,digit,alpha characters")
    }
  };

  return (
    <>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <h1>LEARN BY RESEARCH</h1>
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
                   <div className="pass-condition" >
                     <h2>* password must be minimum 6 character</h2>
                     <h2>* password must contain number,alpha character uppercase and lower case letter</h2>
  
                   </div>
                   
              <img src="../images/reg.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">REGISTRATION</h2>
              <form
                className="register-form"
                id="register-form"
                onSubmit={output}
                onReset={clearform}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    value={FirstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    placeholder="FirstName"
                    autoComplete="off"
                    required
                  ></input>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="LastName"
                    id="LastName"
                    value={LastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    placeholder="LastName"
                    autoComplete="off"
                    required
                  ></input>
                  <br />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                    name="username"
                    id="username"
                    placeholder="username"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                  <label htmlFor="username">{usererror && usererror}</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                  <label htmlFor="email">{emailerror && emailerror}</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="phone"
                    placeholder="phone"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                  <label htmlFor="phone">{phoneerror && phoneerror}</label>
                </div>

                <div className="form-group">
                <div className="span-icon">
                <i onClick={()=>{
                  setpassVISIBLE(!passVISIBLE)
                  console.log(passVISIBLE)
                }} class={passVISIBLE?"fa fa-eye-slash":"fa fa-eye"}></i></div>
                  <input
                    type={passVISIBLE?"text":"password"}
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                  <label htmlFor="password">{passerror && passerror}</label>
                </div>

                <div className="form-group">
                <div className="span-icon">
                <i onClick={()=>{
                  setconfirmpassVISIBLE(!confirmpassVISIBLE)
                  
                }} class={confirmpassVISIBLE?"fa fa-eye-slash":"fa fa-eye"}></i></div>
                  <input
                    onBlur={() => {
                      stylefunction("none", "confirmpassword");
                    }}
                    onFocus={() => {
                      if (confirmpass === password) {
                        stylefunction("none", "confirmpassword");
                      } else {
                        stylefunction("0.2px outset red", "confirmpassword");
                      }
                    }}
                    type={confirmpassVISIBLE?"text":"password"}
                    id="confirmpassword"
                    name="confirmpassword"
                    value={confirmpass}
                    onChange={(e) => {
                      setConfrpass(e.target.value);
                      if (e.target.value === password) {
                        stylefunction("none", "confirmpassword");
                      } else {
                        stylefunction("0.2px outset red", "confirmpassword");
                      }
                    }}
                    placeholder="confirm password"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                  <label htmlFor="confirmpassword">
                    {confirmpasserror && confirmpasserror}
                  </label>
                </div>

                <div className="loginbtn">
                  <input type="submit" value="SIGN UP" id="sbmtbttn"></input>
                </div>
                <div className="alrdydone">
                  <Link to="/login">Already registered ? Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

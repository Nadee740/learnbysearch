import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { HiEye, HiEyeOff } from "react-icons/hi";
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
    setLastName();
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
    } else {
      alert(
        "Password should contain uppercase,lowercase,digit,alpha characters"
      );
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
              <img src="../images/c.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">REGISTRATION</h2>
              <form>
                <div className="inputholder">
                  <div className="inputholder-top">
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>

                <div className="inputholder">
                  <div className="inputholder-top">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div className="inputholder">
                  <div className="inputholder-top">
                    <input type="text" placeholder="Username" />
                  </div>
                </div>

                <div className="inputholder">
                  <div className="inputholder-top">
                    <input type="mail" placeholder="E-Mail" />
                  </div>
                </div>

                <div className="inputholder">
                  <div className="inputholder-top">
                    <input
                      type="tel"
                      placeholder="First Name"
                      defaultValue="+91"
                    />
                  </div>
                </div>
                <div className="inputholder">
                  <div className="inputholder-top">
                    <input type="password" placeholder="Password" />{" "}
                    <HiEyeOff size="1.3em" color="#404040" />
                  </div>
                  <label className="label" htmlFor="">
                    Place your Label Here
                  </label>
                </div>

                <div className="inputholder">
                  <div className="inputholder-top">
                    <input type="password" placeholder="Confirm Password" />
                    <HiEyeOff size="1.3em" color="#404040" />
                  </div>
                </div>

                <input
                  type="submit"
                  value="SIGN UP"
                  placeholder="Sign Up"
                  className="submit-btn"
                />
                <Link>
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

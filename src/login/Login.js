import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDoneAll, MdClear } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import "./Login.css";
import { useCookies } from "react-cookie";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import Modal from "react-awesome-modal";
import { HiEye, HiEyeOff } from "react-icons/hi";
const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [email, setemail] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passerror, setpassrerror] = useState();
  const [resendmail, setresendmail] = useState();
  const [passVISIBLE, setpassVISIBLE] = useState(false);
  const [user, setUserprof] = useState();
  const [cookies, setCookie] = useCookies(["pass"]);
  const [visible, setvisible] = useState(false);
  const [forgotpassvisible, setforgotpassvisible] = useState(false);

  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };

  const closeModal = () => {
    setvisible(false);
  };
  const closeforgotpassModal = () => {
    setforgotpassvisible(false);
  };

  const ResendMail = async () => {
    const log_data = {
      email,
    };
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}resend-email-verification`,
      log_data
    );
    console.log(messagee, "messa");
    setemailerr(messagee);
  };

  const SendForgotPass = async () => {
    setemailerr();
    const log_data = {
      email,
    };
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}forgot-password`,
      log_data
    );
    setemailerr(messagee);
  };

  const output = async (e) => {
    e.preventDefault();

    stylefunction("none", "password");
    stylefunction("none", "username");
    setpassrerror();
    const log_data = {
      username,
      password,
    };
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}login`,
      log_data
    );
    if (messagee.includes("your account is not verifed")) {
      setresendmail("Resenend Email for verification");
    }
    if (!messagee.includes("successfully")) {
      stylefunction("0.2px outset red", "password");
      stylefunction("0.2px outset red", "username");
      setpassrerror(messagee);
    } else {
      window.location = "/";
      setUser("");
      setPass("");
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
              <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="popup-input"
              ></input>
              <br></br>
              <label htmlFor="email">{emailerr && emailerr}</label>
              <button onClick={ResendMail} className="popup-button">
                ResendMail
              </button>
            </div>
          </Modal>
        </section>
      </div>

      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={forgotpassvisible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={closeforgotpassModal}
          >
            <div className="popup">
              <h1>LEARN BY RESEARCH</h1>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="popup-input"
              ></input>
              <br></br>
              <label htmlFor="email">{emailerr && emailerr}</label>
              <button className="popup-button" onClick={SendForgotPass}>
                SUBMIT
              </button>
            </div>
          </Modal>
        </section>
      </div>

      <section className="sign-in">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="../images/Successfactors-bro.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">WELCOME BACK!</h2>
              <form>
                <div className="inputholder">
                  <div className="inputholder-top">
                    <input type="text" placeholder="Username" />
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

                <input
                  type="submit"
                  value="SIGN IN"
                  placeholder="Sign Up"
                  className="submit-btn"
                />
                <Link>
                  <p className="form-btmtext form-btmtext1">
                    Not registered ? SIgnup
                  </p>
                </Link>

                <Link>
                  <p className="form-btmtext">Forgot Password</p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

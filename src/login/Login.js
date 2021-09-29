
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDoneAll, MdClear } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import "./Login.css";
import { useCookies } from "react-cookie";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import Modal from "react-awesome-modal";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Authverifier from "../Backend/Authverifier";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";

const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [email, setemail] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passerror, setpassrerror] = useState();
  const [resendmail, setresendmail] = useState();
  const [passVISIBLE, setpassVISIBLE] = useState(false);
  const [user, setUserprof] = useState();
  const [visible, setvisible] = useState(false);
  const [referalvisible, setreferalvisible] = useState(false);
  const [forgotpassvisible, setforgotpassvisible] = useState(false);
  const [resendmailvisible, setresendmailvisible] = useState(false);
  const [isLoggedIn, setisLoggedin] = useState(false);

  const [isLoading, setisLoading] = useState(false);
  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };

  useEffect(async () => {
    setisLoading(true);
    const { isLoggedIn: messagee, data: datas } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    setisLoading(false);
  }, []);

  const closeModal = () => {
    setvisible(false);
    setresendmailvisible(true);
  };
  const closeModalmailnot = () => {
    setvisible(false);
  };

  const closeforgotpassModal = () => {
    setforgotpassvisible(false);
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
    myTrim(username);
    setisLoading(true);
    // stylefunction("2px solid #81818128", "passholder");
    // stylefunction("2px solid #81818128", "usernameholder");
    setpassrerror();
    const log_data = {
      email:username,
      password,
    };
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}login`,
      log_data
    );
    if (messagee.includes("your account is not verifed")) {
      setisLoading(false);
      setvisible(true);
    } else if (!messagee.includes("successfully")) {
      // stylefunction("2px outset red", "passholder");
      // stylefunction("2px outset red", "usernameholder");
      setpassrerror(messagee);
      setisLoading(false);
    } else {
      window.location = "/openprogrammes";
      setUser("");
      setPass("");
    }
  };

  function myTrim(x) {
    console.log(x.replace(/^\s+|\s+$/gm, ""));
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>

      <div className="popupscreen">
        <section
          className="popupscr
        een"
        >
          <Modal
            visible={visible}
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
              <Link onClick={closeModal}>Resend verification mail</Link>
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
                onChange={(e) => {
                  setemail(e.target.value);
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
            visible={forgotpassvisible}
            width="350"
            height="250"
            effect="fadeInUp"
            onClickAway={closeforgotpassModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <input
                id="email"
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="popup-input"
              ></input>
              <br></br>
              <label htmlFor="email">{emailerr && emailerr}</label>
              <br></br>
              <button className="popup-button" onClick={SendForgotPass}>
                SUBMIT
              </button>
            </div>
          </Modal>
        </section>
      </div>

      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : isLoggedIn ? (
        <div className="isLoading">
          <h1>Already Logged In</h1>
        </div>
      ) : (
        <section className="sign-in">
          <div className="container">
            <div className="signup-content">
              <div className="signup-image">
                <img src="../images/SignIn.svg" alt="Login pic"></img>
              </div>
              <div className="singup-form">
                <h2 className="form-title">WELCOME BACK!</h2>
                <form onSubmit={output}>
                  <div className="inputholder" id="usernameholder">
                    <div className="inputholder-top">
                      <input
                        required
                        type="email"
                        placeholder="email"
                        id="username"
                        onChange={(e) => {
                          setUser(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="inputholder" id="passholder">
                    <div className="inputholder-top">
                      <input
                        required
                        id="password"
                        type={passVISIBLE ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => {
                          setPass(e.target.value);
                        }}
                      />
                      {passVISIBLE ? (
                        <HiEye
                          size="1.3em"
                          color="#404040"
                          onClick={() => {
                            setpassVISIBLE(!passVISIBLE);
                          }}
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
                  <input
                    type="submit"
                    value="SIGN IN"
                    placeholder="Sign Up"
                    className="submit-btn"
                  />
                  {/* <Link to="/signup">
                    <p className="form-btmtext form-btmtext1">
                      Not registered ? Signup
                    </p>
                  </Link> */}

                  <Link
                    onClick={() => {
                      setforgotpassvisible(true);
                    }}
                  >
                    <p className="form-btmtext">Forgot Password</p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;

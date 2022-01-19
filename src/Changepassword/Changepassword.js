import Modal from "react-awesome-modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import Footer from "../LandingPage/footer/footer";
import "./Changepassword.css";
import Authverifier from "../Backend/Authverifier";
import { useEffect } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";

const Changepassword = () => {
  const [email, setEmail] = useState("");
  const [password, setOldpassword] = useState("");
  const [new_password, setNewpassword] = useState("");
  const [confirm_password, setConfirmpassword] = useState("");
  const [oldpasserr, setOldPasser] = useState();
  const [passerr, setPasser] = useState();
  const [confrmpasserr, setConfirmpasserr] = useState();
  const [visible, setvisible] = useState(false);

  const [isLoggedIn, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  useEffect(async () => {
    setisLoading(true);
    const { isLoggedIn: messagee } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    setisLoading(false);
  }, []);

  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };
  const closeModal = () => {
    setvisible(false);
  };

  const Changepassword = async () => {
    stylefunction("none", "password");
    stylefunction("none", "confirmpassword");
    stylefunction("none", "oldpassword");
    stylefunction("none", "email");
    setConfirmpasserr();
    setPasser();
    setOldPasser();

    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{6,})/;

    if (re.test(new_password)) {
      if (confirm_password == new_password) {
        const user_data = {
          email,
          password,
          new_password,
          confirm_password,
        };
        const { message: messagee } = await SendPost(
          `${window.name}change-password`,
          user_data
        );

        if (messagee.toLowerCase().includes("invalid")) {
          setOldPasser(messagee);
          stylefunction("0.2px outset red", "oldpassword");
          stylefunction("0.2px outset red", "email");
        } else {
          setvisible(true);
          setEmail("");
          setOldpassword("");
          setNewpassword("");
          setConfirmpassword("");
        }
      } else {
        setConfirmpasserr("Passswords does not match");
        stylefunction("0.2px outset red", "confirmpassword");
      }
    } else {
      setPasser("please type a strong password");
      stylefunction("0.2px outset red", "password");
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Changepassword || LearnByResearch</title>
      </Helmet>
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
              <h1>PASSWORD CHANGED SUCCESFULLY</h1>
              <p>YOUR PASSWORD IS CHANGED ...</p>
              <Link to="/" onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : isLoggedIn ? (
        <div className="container-profile">
          <div className="container-profile-col1">
            <img
              src="/images/EDIT.png"
              alt="Edit"
              className="container-profile-img password-profile-img"
            />
          </div>
          <div className="container-profile-col2 container-profile-col1">
            <h2>UPDATE PASSWORD</h2>
            <div className="form">
              <div className="textinputf">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="textinputf">
                <input
                  type="password"
                  name="oldpassword"
                  id="oldpassword"
                  placeholder="old Password"
                  autoComplete="off"
                  required
                  value={password}
                  onChange={(e) => {
                    setOldpassword(e.target.value);
                  }}
                />
              </div>
              <br></br>
              <label htmlFor="oldpassword">{oldpasserr && oldpasserr}</label>
              <div className="textinputf">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="new password"
                  autoComplete="off"
                  required
                  value={new_password}
                  onChange={(e) => {
                    setNewpassword(e.target.value);
                  }}
                />
              </div>
              <br></br>
              <label htmlFor="password">{passerr && passerr}</label>
              <div className="textinputf">
                <input
                  onBlur={() => {
                    stylefunction("none", "confirmpassword");
                  }}
                  onFocus={() => {
                    if (confirm_password === new_password) {
                      stylefunction("none", "confirmpassword");
                    } else {
                      stylefunction("0.2px outset red", "confirmpassword");
                    }
                  }}
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="confirm password"
                  autoComplete="off"
                  required
                  value={confirm_password}
                  onChange={(e) => {
                    setConfirmpassword(e.target.value);
                    if (e.target.value === new_password) {
                      stylefunction("none", "confirmpassword");
                    } else {
                      stylefunction("0.2px outset red", "confirmpassword");
                    }
                  }}
                />
              </div>
              <br></br>
              <label htmlFor="confirmpassword">
                {confrmpasserr && confrmpasserr}
              </label>
              <button onClick={Changepassword}>UPDATE PASSWORD</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="isLoading">
          <h1>Please Login</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Changepassword;

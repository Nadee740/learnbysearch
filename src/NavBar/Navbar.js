import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Authverifier from "../Backend/Authverifier";
import Button from "../button/button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Navbar.css";
import Modal from "react-awesome-modal";
import Logout from "../Backend/Logout";
import { confirmAlert } from "react-confirm-alert";
import { RiCloseFill } from "react-icons/ri";
import ReferalCode from "../Backend/Referalcode";
const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState(true);
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [userprof, setuserprof] = useState();
  const [referalvisible, setreferalvisible] = useState(false);
  const [referalalrdyvisible, setreferalalrdyvisible] = useState(false);
  const [referalcodeexist, setreferalcodeexist] = useState(false);
  const [referalcode, setreferalcode] = useState("");
  const [error, seterr] = useState("");
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const checkLOgin = async () => {
    const { isLoggedIn: isLoggedin, data: datas } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(isLoggedin);
    if (datas.referral) {
      setreferalcodeexist(true);
    }
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    checkLOgin();
    showButton();
  }, []);

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

  const getReferalCode = async () => {
    const { isLoggedIn: isloggedin, refercode: refercode } = await ReferalCode(
      `${window.name}create-referral`
    );
    if (isLoggedIn) {
      setreferalcode(refercode);
    } else {
      seterr("not logged in");
    }
  };

  window.addEventListener("resize", showButton);
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={referalvisible}
            width="350"
            height="300"
            effect="fadeInUp"
            onClickAway={() => {
              setreferalvisible(false);
            }}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <div
                className="referal"
                style={{
                  width: "100%",
                }}
              >
                <p className="reffereltext">Generate referal code .</p>
                <div className="inputholder" id="passholder">
                  <div className="inputholder-top">
                    <input
                      readOnly
                      value={referalcode}
                      required
                      id="password"
                      type="text"
                      placeholder="Refferel Code"
                    />
                  </div>
                  <label className="label" htmlFor="">
                    {error && error}
                  </label>
                </div>
                {referalcode.length > 2 ? (
                  <button
                    onClick={() => {
                      setreferalvisible(false);
                    }}
                    className="referal-btn"
                  >
                    Close
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      getReferalCode();
                    }}
                    className="referal-btn"
                  >
                    GENERATE
                  </button>
                )}
              </div>
            </div>
          </Modal>
        </section>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="/images/LearnByResearchLogo.png"
              className="logo"
              alt=""
            />
          </Link>
          <div
            className="menu-icon"
            onClick={() => {
              setNav(true);
            }}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"} id="test">
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item div-dropdwn">
              <Link
                to="/ongoingprogrammes"
                className="nav-links dropbtn"
                onClick={closeMobileMenu}
              >
                Research
              </Link>
              <div
                class="dropdown"
                style={{
                  width: "200px",
                }}
              >
                <a href="/ongoingprogrammes" className="p-link p-link2">
                  OnGoing Research
                </a>
                <a href="/ongoingprogrammes" className="p-link p-link2">
                  OnGoing Research
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/allblogs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myapplications"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/webinars"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Webinars
              </Link>
            </li>
          </ul>

          {button ? (
            isLoggedIn ? (
              <div className="div-dropdwn">
                <Link to="/editprofile">
                  <img src="/images/user.png" className="profimage" />{" "}
                </Link>
                <div className="dropdown">
                  <ul>
                    <li>
                      <Link to="/editprofile" className="p-link">
                        EDIT PROFILE
                      </Link>
                    </li>
                    {!referalcodeexist ? (
                      <li>
                        <Link
                          onClick={() => {
                            setreferalvisible(true);
                          }}
                          className="p-link"
                        >
                          REFERRAL CODE
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    <li
                      onClick={() => {
                        submit(false);
                      }}
                    >
                      <Link className="p-link">LOGOUT</Link>{" "}
                    </li>
                    <li
                      onClick={() => {
                        submit(true);
                      }}
                    >
                      <Link className="p-link">LOGOUT FROM ALL DEVICES</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Button buttonStyle="btn--outline">SignIn</Button>
            )
          ) : (
            ""
          )}
        </div>
      </nav>
      <div className={nav ? "mobnav mobnav-show" : "mobnav  mobnav-hide"}>
        <RiCloseFill
          size="3em"
          color="#818181"
          onClick={() => {
            setNav(false);
          }}
        />
        <ul className="mobnav-items">
          <li className="mobnav-item">
            <Link
              onClick={() => {
                setNav(false);
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mobnav-item">
            <Link
              onClick={() => {
                setNav(false);
              }}
              to="/openprogrammes"
            >
              Upcoming Research
            </Link>
          </li>
          <li className="mobnav-item">
            <Link
              onClick={() => {
                setNav(false);
              }}
              to="/ongoingprogrammes"
            >
              Ongoing Research
            </Link>
          </li>

          <li className="mobnav-item">
            <Link
              onClick={() => {
                setNav(false);
              }}
              to="/allblogs"
            >
              Blogs
            </Link>
          </li>
          <li className="mobnav-item">
            <Link
              onClick={() => {
                setNav(false);
              }}
              to="/contactus"
            >
              Contact
            </Link>
          </li>
          <li className="mobnav-item">
            <Link
              onClick={() => {
                setNav(false);
              }}
              to="/myapplications"
            >
              My Applications
            </Link>
          </li>
          <li className="mobnav-item">
            <Link
              onClick={() => {
                setNav(false);
              }}
              to="/webinars"
            >
              Webinars
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <>
            {!referalcodeexist ? (
              <Link
                onClick={() => {
                  setreferalvisible(true);
                  setNav(false);
                }}
                className="mob-signbtn"
              >
                REFERRAL CODE
              </Link>
            ) : (
              ""
            )}
            <Link
              to="/editprofile"
              onClick={() => {
                setNav(false);
              }}
              className="mob-signbtn"
            >
              EDIT PROFILE
            </Link>

            <button
              onClick={() => {
                setNav(false);
                submit(false);
              }}
              className="mob-signbtn"
            >
              LOGOUT
            </button>

            <button
              onClick={() => {
                setNav(false);
                submit(true);
              }}
              className="mob-signbtn"
            >
              LOGOUT FROM ALL DEVICES
            </button>
          </>
        ) : (
          <Link
            to="/login"
            onClick={() => {
              setNav(false);
            }}
            className="mob-signbtn"
          >
            Sign in
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;

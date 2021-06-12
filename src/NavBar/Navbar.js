import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Authverifier from "../Backend/Authverifier";
import Button from "../button/button";
import "./Navbar.css";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState(true);
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [userprof, setuserprof] = useState();

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const checkLOgin = async () => {
    const { isLoggedIn: messagee } = await Authverifier(
      "http://13.127.98.11/users/me"
    );
    setisLoggedin(messagee);
   
  };
  const showButton = () => {
    console.log("Hyhyyy");
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
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="/images/LearnByResearchLogo.png"
              className="logo"
              alt=""
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"} id="test">
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/openprogrammes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Open Programmes
              </Link>
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
            <li>
              {isLoggedIn ? (
                <Link
                  to="/editprofile"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  View Profile
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
          {button ? (
            isLoggedIn ? (
              <Link to="/editprofile">
                <img src="../images/account.png" className="profimage" />{" "}
              </Link>
            ) : (
              <Button buttonStyle="btn--outline">Sign up</Button>
            )
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

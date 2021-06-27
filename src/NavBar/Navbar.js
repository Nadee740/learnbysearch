import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Authverifier from "../Backend/Authverifier";
import Button from "../button/button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Navbar.css";
import Logout from "../Backend/Logout";
import { confirmAlert } from "react-confirm-alert";

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
      `${window.name}users/me`
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
      console.log(messagee, "LOGOUT");
      localStorage.removeItem("LoggedInUserTokenID");
      window.location = "/";
    } else {
      console.log("SORRY");
    }
  };
  const LogOutFromAllDevice = async () => {
    const { LoggedOut: messagee } = await Logout(`${window.name}logout-all`);
    if (messagee) {
      console.log(messagee, "LOGOUT");
      localStorage.removeItem("LoggedInUserTokenID");
      window.location = "/";
    } else {
      console.log("SORRY");
    }
  };


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
            <li className="nav-item">
              <Link
                to="/myapplications"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Applications
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <>
                <Link
                  to="/editprofile"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  View Profile
                </Link>
                <li> <Link
                  
                  className="nav-links-mobile"
                  onClick={()=>{
                    closeMobileMenu()
                    submit(false)}}
                >
                  Log Out
                </Link></li>
                <li> <Link
                  
                  className="nav-links-mobile"
                  onClick={()=>{
                    closeMobileMenu()
                    submit(true)}}
                >
     LOGOUT FROM ALL DEVICES
                </Link></li>
                
                </>
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
                <div className="div-dropdwn">
                <Link to="/editprofile">
                  <img src="/images/user.png" className="profimage" />{" "}
                </Link>
                <div className="dropdown">
              <ul>
                <li><Link>EDIT PROFILE</Link></li>
               <li onClick={()=>{submit(false)}}><Link >LOGOUT</Link> </li>
                <li onClick={()=>{submit(true)}}><Link >LOGOUT FROM ALL DEVICES</Link></li>
              </ul>
            </div>
          </div>
              
              
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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDoneAll, MdClear } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import "./Login.css";

import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Icon, IconButton, InputAdornment } from "@material-ui/core";
const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [passerror, setpassrerror] = useState();
  const [passVISIBLE, setpassVISIBLE] = useState(false);
  const [user, setUserprof] = useState();

  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
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
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  return (
    <>
      <section className="sign-in">
        <div className="container">
          <div className="sigin-content">
            <div className="signin-image">
              <figure>
                <img src="../images/login.svg" alt="Login pic"></img>
              </figure>
            </div>
            <div className="singin-form">
              <h2 className="form-title">LOGIN</h2>
              <form
                className="register-form"
                id="register-form"
                onSubmit={output}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                  ></input>
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
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
           
                  ></input>
                  
              
                  <br></br>
                  <label htmlFor="password">{passerror && passerror}</label>
                </div>
                <div className="loginbtn">
                  <input type="submit" value="LOGIN"></input>
                </div>
                <div className="alrdydone">
                  <Link to="/signup">Not registered ? SIgnup</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

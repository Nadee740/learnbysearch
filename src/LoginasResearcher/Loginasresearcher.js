import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Footer from "../LandingPage/footer/footer";
const LoginAsresearcher = () => {
  const [passVISIBLE, setpassVISIBLE] = useState(false);
  return (
    <>
      <section className="sign-in">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="../images/login-research.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">Login As Researcher</h2>
              <form onSubmit="">
                <div className="inputholder" id="usernameholder">
                  <div className="inputholder-top">
                    <input
                      required
                      type="email"
                      placeholder="email"
                      id="username"
                    />
                  </div>
                </div>

                <div className="inputholder" id="passholder">
                  <div className="inputholder-top">
                    <input required id="password" placeholder="Password" />
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
                    Error
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

                {/* <Link >
                  <p className="form-btmtext">Forgot Password</p>
                </Link> */}
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default LoginAsresearcher;

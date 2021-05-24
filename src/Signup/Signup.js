import "./Signup.css";
const Login = () => {
  return (
    <>
      <section className="sign-up">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="../images/signin.png" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">REGISTRATION</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email"></label>
                  
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    autoComplete="off"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    autoComplete="off"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="confirm password"
                    autoComplete="off"
                  ></input>
                </div>
                <div className="loginbtn">
                  <input type="button" value="SIGN UP"></input>
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




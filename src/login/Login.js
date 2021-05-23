import { NavLink } from "react-router-dom"
import "./Login.css"
const Login = () => {
    return (  
       <>
        <section className="sign-in">
    <div className="container">
        <div className="sigin-content">
            <div className="signin-image">
                <figure>
                    <img src="../images/login.png" alt="Login pic"></img>
                </figure>
  
            </div>
            <div className="singin-form">
                <h2 className="form-title">LOGIN</h2>
                <form className="register-form" id="register-form">
                 <div className="form-group">
                     <label htmlFor="email"></label>
                     <input type="email" name="email" id="email" placeholder="Username" autoComplete="off"></input>
                 </div>
                 <div className="form-group">
                     <label htmlFor="password"></label>
                     <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"></input>
                 </div>
                 <div className="loginbtn">
                     <input type="button" value='BUTTON'></input>
                 </div>

                </form>
            </div>
        </div>
    </div>

        </section>
  

        </>
    );
}
 
export default Login;

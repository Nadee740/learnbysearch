import {useState} from "react"
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import Navbar from "../NavBar/Navbar";
import "./Signup.css";
const Signup = () => {
 const [name,setName]=useState("")
 const [username,setUser]=useState("")
 const [email,setEmail]=useState("")
 const [password,setPass]=useState("")
 const [confirmpass,setConfrpass]=useState("")
 const [phoneNumber,setPhone]=useState("")
 const [emailerror,setemailerror]=useState()
 const [usererror,setusererror]=useState()
 const [passerror,setpassrerror]=useState()
 const [phoneerror,setphoneerror]=useState()
 const [confirmpasserror,setconfirmpassrerror]=useState()

   

 const stylefunction=(color,id)=>{

   document.getElementById(id).style.border=color;


 }


 const output=async(e)=>{
e.preventDefault();

setconfirmpassrerror()
setphoneerror()
setusererror()
setemailerror()
setusererror()
setpassrerror()

stylefunction("none","username")
stylefunction("none","email")
stylefunction("none","phone")
stylefunction("none","password")

let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{6,})/
      
if(re.test(password))
{
if(confirmpass!=password){



setconfirmpassrerror("Password does not match ")
stylefunction("0.2px outset red","password")
}
else{
 

 
 const reg_data = {
  username, email, name, phoneNumber, password
}


const {message:messagee} =await SendPost('http://localhost:8000/api/register', reg_data)

  if(messagee.includes("verification"))
  {
    window.location.reload()
    window.location="/verification"
   
  }

  else if (messagee.includes("email")){
    setemailerror(messagee)
    stylefunction("0.2px outset red","email")

  }
  else if (messagee.includes("password"))
  {
    setpassrerror(messagee)
    stylefunction("0.2px outset red","password")
  }
  else if (messagee.includes("Username"))
  {
    stylefunction("0.2px outset red","username")
    setusererror(messagee)
  }

  else if (messagee.includes("Phone"))
  {
    stylefunction("0.2px outset red","phone")
    setphoneerror(messagee)
   
  }
  

 }
}
else{
  setpassrerror("Please tpe a strong password")
  stylefunction("0.2px outset red","password")

}

 }
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
              <form className="register-form" id="register-form" onSubmit={output}>
                <div className="form-group">
                  
                  
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e)=> {
                      setName(e.target.value)
                     }}
                    placeholder="Name"
                    autoComplete="off"
                    required
                  ></input>
                  <br/>
                  
                </div>



                <div className="form-group">
                  
                  
                  <input
                    type="text"
                    value={username}
                    onChange={(e)=> {
                      setUser(e.target.value)
                      
                    }}
                    name="username"
                    id="username"
                    placeholder="username"
                    autoComplete="off"
                    required
                  ></input><br></br>
                  <label htmlFor="username">{usererror && usererror}</label>
                </div>



                <div className="form-group">
                  
                  
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=> {
                      setEmail(e.target.value)
                      
                    }}
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                   <label htmlFor="email">{emailerror && emailerror}</label>
                </div>

                <div className="form-group">
                  
                  
                  <input
                    type="number"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e)=> {
                      setPhone(e.target.value)
                      
                    }}
                    id="phone"
                    placeholder="phone"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                   <label htmlFor="phone">{phoneerror && phoneerror}</label>
                </div>



                <div className="form-group">
                  
                  
                  <input
                    
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=> {
                      setPass(e.target.value)
                      
                    }}
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                    required
                  ></input>
                  <br></br>
                  <label htmlFor="password">{passerror && passerror}</label>
                </div>




                <div className="form-group">
                 
                  <input
                   onBlur={()=>{
                    stylefunction("none","confirmpassword")
                   }}
                    onFocus={()=>{
                      if(confirmpass===password)
                      {
                        stylefunction("none","confirmpassword")
                      }
                      else{
                        stylefunction("0.2px outset red","confirmpassword");
                      }
                    }}
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    value={confirmpass}
                    onChange={(e)=> {
                      setConfrpass(e.target.value)
                      if(e.target.value===password)
                      {
                        stylefunction("none","confirmpassword")
                      }
                      else{
                        stylefunction("0.2px outset red","confirmpassword");
                      }
                      
                    }}
                    id="confirmpassword"
                    placeholder="confirm password"
                    autoComplete="off"
                    required
                  ></input>
                   <br></br>
                  <label htmlFor="confirmpassword">{confirmpasserror&&confirmpasserror}</label>
                </div>


                <div className="loginbtn">
                  <input type="submit" value="SIGN UP" id="sbmtbttn" ></input>
                </div>
                <div className="alrdydone"><Link to="/login">Already registered ? Login</Link></div>

    


              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;




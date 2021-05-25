import {useState} from "react"
import SendPost from "../Backend/Sendpost";
import "./Signup.css";
const Login = () => {
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




 const output=async(e)=>{
e.preventDefault();

setconfirmpassrerror()
setphoneerror()
setusererror()
setemailerror()
setusererror()
setpassrerror()


if(confirmpass!=password){
setconfirmpassrerror("Noooki type cheyada ")
  
}
else{
 

 
 const reg_data = {
  username, email, name, phoneNumber, password
}


const {message:messagee} =await SendPost('http://localhost:8000/api/register', reg_data)
console.log(messagee)
  if(messagee.includes("verification"))
  {
    window.location.reload()
    window.location="/"
   
  }

  else if (messagee.includes("email")){
    setemailerror(messagee)

  }
  else if (messagee.includes("password"))
  {
    setpassrerror(messagee)
  }
  else if (messagee.includes("Username"))
  {

    setusererror(messagee)
  }

  else if (messagee.includes("Phone"))
  {

    setphoneerror(messagee)
   
  }
  

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
                    type="password"
                    name="confirmpassword"
                    value={confirmpass}
                    onChange={(e)=> {
                      setConfrpass(e.target.value)
                      
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
                  <input type="submit" value="SIGN UP" ></input>
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




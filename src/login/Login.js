import {useState} from "react"
import SendPost from "../Backend/Sendpost"
import "./Login.css"
const Login = () => {

    const [username,setUser]=useState("")
    const [password,setPass]=useState("")
    const [passerror,setpassrerror]=useState()

    const stylefunction=(color,id)=>{

        document.getElementById(id).style.border=color;
     
     
      }

    const output=async(e)=>{
e.preventDefault();
stylefunction("none","password")
stylefunction("none","username")
        const reg_data = {
            username,password
          }
        const {message:messagee} =await SendPost('http://localhost:8000/api/login', reg_data)
if(!(messagee.includes("logged in"))){
    stylefunction("0.2px outset red","password")
    stylefunction("0.2px outset red","username")
    setpassrerror(messagee)
}
else{

    alert('verified')
    setUser("")
    setPass("")
}


    }
    

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
                <form className="register-form" id="register-form" onSubmit={output}>
                 <div className="form-group">
                   
                     <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" value={username} onChange={(e)=>{
                      setUser(e.target.value)
                     }}></input>
                 </div>
                 <div className="form-group">
                     
                     <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" value={password} onChange={(e)=>{
                         setPass(e.target.value)
                     }}></input>
                     <br></br>
                     <label htmlFor="password">{passerror && passerror}</label>
                 </div>
                 <div className="loginbtn">
                     <input type="submit" value='LOGIN'></input>
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

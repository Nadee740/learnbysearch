import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdDoneAll, MdClear } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import "../login/Login.css"
import { useCookies } from 'react-cookie';
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import Modal from "react-awesome-modal";
import ChangePassword from "../Backend/ChangePassword";

const ForgotPassword = () => {
  const [new_password, setnew_password] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  
  const [visible, setvisible] = useState(false);
  const [confirmerr, setconfrimerr] = useState("");
  const [passerror, setpassrerror] = useState("");
  const [resendmail,setresendmail]=useState()
  const [passVISIBLE,setpassVISIBLE]=useState(false)
  const [confirmpassVISIBLE,setconfirmpassVISIBLE]=useState(false)
  
  let { id } = useParams();
  let {token}=useParams()
  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };

  useEffect(() => {
    GetData()


}, [])

const GetData=async()=>{
    const url=`${window.name}forgot-password/${id}/${token}`
      const { message: messagee } = await ChangePassword(
        url

      );
      console.log(messagee)
    
}

  const closeModal = () => {
    setvisible(false);
  };



  const output = async (e) => {
 e.preventDefault();
 setpassrerror()
 setconfrimerr()
 
    
    if(new_password!=="" &&  confirm_password!=="" && new_password==confirm_password)
    {
        let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{6,})/;

        if (re.test(new_password)) {
    

        
    const log_data = {
        new_password,
        confirm_password
      };
      const { message: messagee } = await Tokenlesssendpost(
        `${window.name}reset-password/${id}/${token}`,
        log_data
      );
      setpassrerror(messagee)
      console.log(messagee,"messa")
      }
      else{
          setpassrerror("Please type a Strong Number")
      }
      }
      else
      {  console.log("NOMa")
          setconfrimerr("Passwords does not match")
      }
  };
  

  return (
    <>
     <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <h1>LEARN BY RESEARCH</h1>
              
            </div>
          </Modal>
        </section>
      </div>
      <section className="sign-in">
        <div className="container">
          <div className="sigin-content">
            <div className="signin-image">
              <figure>
                <img src="../images/change.png" alt="Login pic"></img>
              </figure>
            </div>
            <div className="singin-form">
              <h2 className="form-title">Change Password</h2>
              <form
                className="register-form"
                id="register-form"
                onSubmit={output}
              >
                <div className="form-group">
                <div className="span-icon">
                    <i
                      onClick={() => {
                        setpassVISIBLE(!passVISIBLE);
                     
                      }}
                      class={passVISIBLE ? "fa fa-eye-slash" : "fa fa-eye"}
                    ></i>
                  </div>
                  <input
                    type={passVISIBLE ?"text":"password"}
                    name="password"
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                    value={new_password}
                    onChange={(e) => {
                      setnew_password(e.target.value);
                    }}
                  ></input>
                 <br></br>
                  <label htmlFor="password">{passerror && passerror}</label>
                </div>
                <div className="form-group">
                  <div className="span-icon">
                    <i
                      onClick={() => {
                        setconfirmpassVISIBLE(!confirmpassVISIBLE);
                     
                      }}
                      class={confirmpassVISIBLE ? "fa fa-eye-slash" : "fa fa-eye"}
                    ></i>
                  </div>
                  <input
                    type={confirmpassVISIBLE ? "text" : "password"}
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="confirm Password"
                    autoComplete="off"
                    value={confirm_password}
                    onChange={(e) => {
                      
                      setconfirm_password(e.target.value);
                    }}
                  ></input>

<br></br>
                  <label htmlFor="password">{confirmerr && confirmerr}</label>
                  
           
                </div>
                <div className="loginbtn">
                  <input type="submit" value="CHANGE PASSWORD"></input>
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
  )
};

export default ForgotPassword;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdDoneAll, MdClear } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import "../login/Login.css"
import { useCookies } from 'react-cookie';
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import Modal from "react-awesome-modal";
import ChangePassword from "../Backend/ChangePassword";
import { HiEye, HiEyeOff } from "react-icons/hi";


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
      if(messagee.includes("successfullly"))
      {
      setvisible(true);
    setnew_password("");
    setconfirm_password("");
      
    }
      else
      setpassrerror("Ooops session expired !!")
      
      }
      else{
          setpassrerror("Please type a Strong Password")
      }
      }
      else
      {  
          setconfrimerr("Passwords does not match")
      }
  };
  

  return (
    <>
     <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
            <img
              src="/images/LearnByResearchLogo.png"
              className="logo"
              alt=""
            />
              <p>
                PASSWORD CHANGED SUCCESFULLY !
              </p>
              <Link to="/" onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      <section className="sign-in">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="https://i.ibb.co/nQWSbyT/fin.png"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">CHANGE PASSWORD!</h2>
              <form onSubmit={output}>
              <div className="inputholder" id="pass-holder">
                  <div className="inputholder-top" >
                    <input id="password" type={passVISIBLE?'text':"password"} placeholder="Password" onChange={(e)=>{setnew_password(e.target.value)}}/>
                    {passVISIBLE?<HiEye size="1.3em" color="#404040" onClick={()=>{setpassVISIBLE(!passVISIBLE)}}/>:<HiEyeOff size="1.3em" color="#404040" onClick={()=>{setpassVISIBLE(!passVISIBLE)}} /> }
                  </div>
                  <label className="label" htmlFor="">
                    {passerror&&passerror}
                  </label>
                </div>

                <div className="inputholder" id="pass-holder">
                  <div className="inputholder-top" >
                    <input id="password" type={confirmpassVISIBLE?'text':"password"} placeholder="confirm Password" onChange={(e)=>{setconfirm_password(e.target.value)}}/>
                    {confirmpassVISIBLE?<HiEye size="1.3em" color="#404040" onClick={()=>{setconfirmpassVISIBLE(!confirmpassVISIBLE)}}/>:<HiEyeOff size="1.3em" color="#404040" onClick={()=>{setconfirmpassVISIBLE(!confirmpassVISIBLE)}} /> }
                  </div>
                  <label className="label" htmlFor="">
                    {confirmerr&&confirmerr}
                  </label>
                </div>

                <input
                  type="submit"
                  value="SIGN IN"
                  placeholder="Sign Up"
                  className="submit-btn"
                />
              
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default ForgotPassword;
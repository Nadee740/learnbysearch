import Modal from "react-awesome-modal"
import { useMemo, useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import countryList from "react-select-country-list";
import SendPost from "../Backend/Sendpost";
import MyContainer from "../Calender/Calender";
import COuntryCode from "../Countrycode/countrycode";

import Footer from "../LandingPage/footer/footer";


import "./EditProfile.css";
const EditProfile = () => {
  
  const [FirstName,setFirstName]=useState("")
  const [MiddleName,setMiddleName]=useState("")
  const [LastName,setLastName]=useState("")
  const [PhoneNumber,setPhoneNumber]=useState("")
  const [email,setemail]=useState("")
  const [City,setCity]=useState("")
  const [State,setState]=useState("")
  const [Country,setCountry]=useState("")
  const [Degree,setDegree]=useState("")
  const [Field,setField]=useState("")
  const [CollegeName,setCollegeName]=useState("")
  const [University,setUniversity]=useState("")
  const [GraduationYear,setGraduationYear]=useState("")
  const [value, setdate] = useState(new Date());
  const [visible,setvisible]=useState(false)
  const [countrycode, setcountrycode] = useState('')

  const[emailerror,setemailerr]=useState()

  const options = useMemo(() => countryList().getData(), [])
  
  
  const closeModal=()=> {
    setvisible(false)
}


const setcursor=(id)=>{
  document.getElementById(id).focus()
}

 const stylefunction=(color,id)=>{

   document.getElementById(id).style.border=color;
 }


 const MakeChanges=async()=>{
   const month=parseInt(value.getMonth())+1
   const DOB=value.getDate()+'/'+month+'/'+value.getFullYear()
  const edit_data = {
    FirstName,MiddleName,LastName,DOB,PhoneNumber,email,City,State,Country,Degree,Field,CollegeName,University,GraduationYear
  };
  console.log(edit_data)
  const {message:messagee} =await SendPost(`${window.name}edit-profile`, edit_data)
 
if(messagee.includes("updated"))
{
  setvisible(true)
}
else{
  setemailerr(messagee)
  stylefunction("0.2px outset red","email")
    setcursor("email")
}

}



  return (
     <>
     <div className="popupscreen" >

<section className="popupscreen">


    <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={closeModal}>
        <div className="popup">
            <h1>LEARN BY RESEARCH</h1>
            <p>PROFILE UPDATES SUCCESFULLY ...</p>
            <Link to="/" onClick={closeModal}>Close</Link>
        </div>
    </Modal>
</section>
</div>
      <div className="container-profile">
        <div className="container-profile-col1">
          {/* <img
            src="/images/change.png"
            alt="Edit"
            className="container-profile-img"
          /> */} 
        </div>
        <div className="container-profile-col2 container-profile-col1">
          <h2>Edit Profile</h2>
          <div className="form">
             <input
              type="text"
              name="Firstname"
              id="Firstname"
              placeholder="First name"
              autoComplete="off"
              required
              value={FirstName}
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
            />
            <input
              type="text"
              name="MiddleName"
              id="MiddleName"
              placeholder="Middle Name"
              autoComplete="off"
              required
              value={MiddleName}
              onChange={(e)=>{
                setMiddleName(e.target.value)
              }}
            />
            <input
              type="text"
              name="LastName"
              id="LastName"
              placeholder="Last Name"
              autoComplete="off"
              required
              value={LastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
            />
             <input
             
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              required
              value={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
            />
            <br></br>
                   <label htmlFor="email">{emailerror && emailerror}</label>

      <DatePicker
       onChange={(e)=>{
          setdate(e)
        }}
        value={value}
      />
            
              <input
              type="text"
              name="PhoneNumber"
              id="PhoneNumber"
              placeholder="Phone Number"
              autoComplete="off"
              required
              value={PhoneNumber}
              onChange={(e)=>{setPhoneNumber(e.target.value)}}
            />
             <input
              type="text"
              name="City"
              id="City"
              placeholder="City"
              autoComplete="off"
              required
              value={City}
              onChange={(e)=>{
                setCity(e.target.value)
              }}
            />
             <input
              type="text"
              name="State"
              id="State"
              placeholder="State"
              autoComplete="off"
              required
              value={State}
              onChange={(e)=>{setState(e.target.value)}}

            />
             <input
              type="text"
              name="Country"
              id="Country"
              placeholder="Country"
              autoComplete="off"
              required
              value={Country}
              onChange={(e)=>{
                setCountry(e.target.value)
              }}
            />

              <input
              type="text"
              name="Degree"
              id="Degree"
              placeholder="Degree"
              autoComplete="off"
              required
              value={Degree}
              onChange={(e)=>{setDegree(e.target.value)}}
            />
             <input
              type="text"
              name="Field"
              id="Field"
              placeholder="Field"
              autoComplete="off"
              required
              value={Field}
              onChange={(e)=>{setField(e.target.value)}}
            />
             <input
              type="text"
              name="CollegeName"
              id="CollegeName"
              placeholder="CollegeName"
              autoComplete="off"
              required
              value={CollegeName}
              onChange={(e)=>{setCollegeName(e.target.value)}}
            />
             <input
              type="text"
              name="University"
              id="University"
              placeholder="University"
              autoComplete="off"
              required
              value={University}
              onChange={(e)=>{
                setUniversity(e.target.value)
              }}

            />

             <input
              type="text"
              name="GraduationYear"
              id="GraduationYear"
              placeholder="GraduationYear"
              autoComplete="off"
              required
              value={GraduationYear}
              onChange={(e)=>{setGraduationYear(e.target.value)}}
            /> 
            <button onClick={MakeChanges}>Make Changes</button>
            <Link to="/changepassword" className="changeText">
              Change Your Password
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;

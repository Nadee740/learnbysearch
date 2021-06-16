import Modal from "react-awesome-modal";
import { useMemo, useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import countryList from "react-select-country-list";
import SendPost from "../Backend/Sendpost";
import MyContainer from "../Calender/Calender";
import COuntryCode from "../Countrycode/countrycode";
import { MdDoneAll, MdClear } from "react-icons/md";
import Footer from "../LandingPage/footer/footer";
import { useEffect } from "react";
import "./EditProfile.css";
import Logout from "../Backend/Logout";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Authverifier from "../Backend/Authverifier";

const EditProfile = () => {
  const [userid, setUserid] = useState(localStorage.getItem("loggedinuserid"));
  let userrr = { id: userid };

  const getData = async () => {
    setisLoading(true);
    const { isLoggedIn: messagee, data: datas } = await Authverifier(
      "http://localhost:8000/users/me"
    );
    setisLoggedin(messagee);
    console.log(datas, "Enghaneelum");
    setFirstName(datas.FirstName);
    setMiddleName(datas.MiddleName);
    setLastName(datas.LastName);
    setemail(datas.email);
    setPhoneNumber(datas.phoneNumber);
    setdate(datas.DOB);
    setCity(datas.City);
    setState(datas.State);
    setCountry(datas.Country);
    setDegree(datas.Education ? datas.Education.Degree : "");
    setField(datas.Education ? datas.Education.Field : "");
    setCollegeName(datas.Education ? datas.Education.College : "");
    setUniversity(datas.Education ? datas.Education.University : "");
    setGraduationYear(datas.Education ? datas.Education.GraduationYear : "");
    setisverfied(datas.isPhoneVerified);
    setisLoading(false);
  };

  useEffect(async () => {
    getData();
  }, []);

  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [email, setemail] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [Degree, setDegree] = useState("");
  const [Field, setField] = useState("");
  const [CollegeName, setCollegeName] = useState("");
  const [University, setUniversity] = useState("");
  const [GraduationYear, setGraduationYear] = useState("");
  const [value, setdate] = useState();
  const [visible, setvisible] = useState(false);
  const [otp, setotp] = useState("");
  const [otpsend, setotpsend] = useState(false);
  const [emailerror, setemailerr] = useState();
  const [phoneerror, setphoneerr] = useState();
  const [otperror, setotperr] = useState();
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [isverfied, setisverfied] = useState();

  const [isLoading, setisLoading] = useState(false);

  const submit = (LogoutFromall) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure want to logout ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            if (LogoutFromall) LogOutFromAllDevice();
            else LogOut();
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const LogOut = async () => {
    const { LoggedOut: messagee } = await Logout(`${window.name}logout`);
    if (messagee) {
      console.log(messagee, "LOGOUT");
      localStorage.clear();
      window.location = "/";
    } else {
      console.log("SORRY");
    }
  };
  const LogOutFromAllDevice = async () => {
    const { LoggedOut: messagee } = await Logout(`${window.name}logout-all`);
    if (messagee) {
      console.log(messagee, "LOGOUT");
      localStorage.clear();
      window.location = "/";
    } else {
      console.log("SORRY");
    }
  };

  const closeModal = () => {
    setvisible(false);
  };

  const setcursor = (id) => {
    document.getElementById(id).focus();
  };

  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };

  const VERIFYPhonenumber = async () => {
    console.log(phoneNumber);
    if (
      phoneNumber == "" ||
      phoneNumber.length > 13 ||
      phoneNumber.length < 6
    ) {
      setphoneerr("PLEASE TYPE A VALID PHONE NUMBER");
      stylefunction("0.2px outset red", "PhoneNumber");
      setcursor("PhoneNumber");
    } else {
      const veri_data = {
        number: phoneNumber,
      };
      console.log(veri_data);
      const { message: messagee } = await SendPost(
        `${window.name}number-verification`,
        veri_data
      );
      if (messagee.includes("successfully")) {
        setotpsend(true);
        document.querySelector(".otpdisplay").style.display = "flex";
        setphoneerr(messagee);
        setcursor("otp");
      } else {
        setcursor("PhoneNumber");
        setphoneerr(messagee);
      }
    }
  };

  const VerifyOtp = async () => {
    console.log("otpmon");

    const submit_code = {
      code: otp,
      number: phoneNumber,
    };
    const { message: messagee } = await SendPost(
      `${window.name}submit-code`,
      submit_code
    );

    if (messagee.includes("verified")) {
      setisverfied(true);
    }

    setotperr(messagee);
  };

  const MakeChanges = async (e) => {
    e.preventDefault();
    const DOB = value;
    const edit_data = {
      FirstName,
      MiddleName,
      LastName,
      DOB,
      phoneNumber,
      email,
      City,
      State,
      Country,
      Degree,
      Field,
      CollegeName,
      University,
      GraduationYear,
    };
    console.log(edit_data);
    const { message: messagee } = await SendPost(
      `${window.name}edit-profile`,
      edit_data
    );

    if (messagee.includes("updated")) {
      setvisible(true);
    } else {
      setemailerr(messagee);
      stylefunction("0.2px outset red", "email");
      setcursor("email");
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
              <p>PROFILE UPDATES SUCCESFULLY ...</p>
              <Link to="/" onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      {isLoading ? (
        <div className="isLoading">
          <h1>Loading...</h1>
        </div>
      ) : isLoggedIn ? (
        <section className="sign-up editprofile">
          <div className="container">
            <div className="signup-content">
              <div className="signup-image">
                <img src="../images/setting.svg" alt="Login pic"></img>
              </div>
              <div className="singup-form">
                <h2 className="form-title">EDIT PROFILE</h2>
                <form onSubmit={MakeChanges}>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="First Name" required
                  value={FirstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }} />
                    </div>
                  </div>

                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="Middle Name"  autoComplete="off"
                  value={MiddleName}
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                  }} />
                    </div>
                  </div>

                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="Last Name"
                  autoComplete="off"
                  required
                  value={LastName}
                  className="input"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }} />
                    </div>
                  </div>
                  
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input readonly="true"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                  value={email} />
                      <MdDoneAll size="1.3em" color="#00e676" />
                    </div>
                    <label className="label" htmlFor="">
                  {emailerror && emailerror}
                  </label>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input
                        type="date"
                        placeholder="DD-MM-YY"
                        className="inputdate"
                        onChange={(e) => {
                    console.log(Date.parse(e.target.value));
                    console.log(e.target.value);
                    setdate(e.target.value);
                  }}
                  value={value}
                      />
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="tel" placeholder="Your Phone Number" autoComplete="off"
                  required
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    
                  }} />
                       {isverfied ? (
                  <MdDoneAll size="1.2em" className="emtick" />
                ) : (
                  <MdClear size="1.2em" className="emtick" color="red" />
                )}
                    </div>
                    <label className="label" htmlFor="">
                  {phoneerror && phoneerror}
                  </label>
                  </div>
                  {isverfied ? (
                <></>
              ) :(
                  <button className="edit-profile-btn" onClick={otpsend ? VerifyOtp : VERIFYPhonenumber}>
                  {otpsend ? "VERIFY OTP" : "VERIFY PHONE NUMBER"}
                  </button>)}

                  <div className="inputholder otpdisplay">
                    <div className="inputholder-top">
                      <input type="text" placeholder="OTP" autoComplete="off"
                  className="otp"
                  value={otp}
                  onChange={(e) => {
                    setotp(e.target.value);
                  }}/>
                    </div>
                    <label className="label" htmlFor="">
                  {otperror && otperror}
                  </label>
                  </div>

                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="City" autoComplete="off"
                  required
                  value={City}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }} />
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="State"  autoComplete="off"
                  required
                  value={State}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}/>
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                    <input
                  type="text"
                  name="Country"
                  id="Country"
                  placeholder="Country"
                  autoComplete="off"
                  required
                  value={Country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="Degree" autoComplete="off"
                  required
                  value={Degree}
                  onChange={(e) => {
                    setDegree(e.target.value);
                  }} />
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="Field" autoComplete="off"
                  required
                  value={Field}
                  onChange={(e) => {
                    setField(e.target.value);
                  }}/>
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="College Name" autoComplete="off"
                  required
                  autoComplete="off"
                  required
                  value={CollegeName}
                  onChange={(e) => {
                    setCollegeName(e.target.value);
                  }}/>
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="University"  autoComplete="off"
                  required
                  value={University}
                  onChange={(e) => {
                    setUniversity(e.target.value);
                  }} />
                    </div>
                  </div>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input type="text" placeholder="Graduation Year"   autoComplete="off"
                  required
                  value={GraduationYear}
                  onChange={(e) => {
                    setGraduationYear(e.target.value);
                  }} />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="SAVE CHANGES"
                    className="submit-btn"
                  />
                  <Link>
                    <p className="form-btmtext form-btmtext1">
                      Change Password
                    </p>
                  </Link>
                  <button className="edit-profile-btn edit-profile-lgout">
                    LOG OUT
                  </button>
                  <button className="edit-profile-btn">
                    LOGOUT FROM ALL DEVICES
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="isLoading">
          <h1>Please Log in</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EditProfile;

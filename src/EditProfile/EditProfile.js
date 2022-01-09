import Modal from "react-awesome-modal";
import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

import SendPost from "../Backend/Sendpost";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Country, State, City } from "country-state-city";
import { MdDoneAll, MdClear } from "react-icons/md";
import Footer from "../LandingPage/footer/footer";
import { useEffect } from "react";
import "./EditProfile.css";
import Logout from "../Backend/Logout";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Authverifier from "../Backend/Authverifier";
import Tooltip from "@material-ui/core/Tooltip";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import Createtestemonials from "../Backend/createtestimonials";
import Getusertestimonial from "../Backend/Getusertestimonial";

const EditProfile = () => {

  const history = useHistory();

  const getData = async () => {
    setisLoading(true);
    const { isLoggedIn: message, data: datas } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(message);

   
   
   
     setstudentId(datas._id);
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
    if (datas.referral) {
      setreferal(datas.referral.code)
      setrefcount(datas.referral.count)
    }
   getmytestimonial(datas._id)
    
  };

  useEffect(async () => {
    getAllCountries();
    getCOllegename();
    getData();
    
  }, []);

  const getmytestimonial=async (id) => {
    setisLoading(true)
    console.log(id)
    const data = {
      id: id
    };
     const formData=new FormData()
     formData.append("id",id);
    // const { data } = await Researchpgms(`${window.name}research-programs`);
    const { message } = await Getusertestimonial(
      `${window.name}testimonial`,formData
    );
    // console.log(messagee)
    setisLoading(false)
  }
  ///////////////get the details of the country/////
  const getAllCountries = () => {
    const countries = Country.getAllCountries();
    setallCountry(countries);
  };
  //////////////////////////////////

  //////get the registerd college name////////////
  const getCOllegename = async () => {
    const { data: Datass } = await Researchpgms(`${window.name}get-college`);
    setlistCollege(Datass);
  };
  ////////////////////////////////////////
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [email, setemail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [allcountry, setallCountry] = useState("");
  const [allstate, setallState] = useState("");
  const [allcity, setallCity] = useState("");
  const [Degree, setDegree] = useState("");
  const [Field, setField] = useState("");
  const [referal, setreferal] = useState();
  const [refcount, setrefcount] = useState();
  const [CollegeName, setCollegeName] = useState("");
  const [listofCollege, setlistCollege] = useState();
  const [selectlistofCollege, setselectlistCollege] = useState([
    "r15",
    "rr310",
    "rc200",
    "r3",
    "highness",
  ]);
  const [University, setUniversity] = useState("");
  const [GraduationYear, setGraduationYear] = useState("");
  const [value, setdate] = useState();
  const [visible, setvisible] = useState(false);
  const [showsuggestions, setshowsuggestions] = useState(false);

  const [testimonial, settestimonial] = useState()
  const [profilepic, setprofilepic] = useState("")

  const [otp, setotp] = useState("");
  const [otpsend, setotpsend] = useState(false);
  const [emailerror, setemailerr] = useState();
  const [phoneerror, setphoneerr] = useState();
  const [otperror, setotperr] = useState();
  const [isverfied, setisverfied] = useState();
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [studentId, setstudentId] = useState("");

  const [isLoading, setisLoading] = useState(false);

  const closeModal = () => {
    setvisible(false);
    history.goBack();
  };

  const closeOtpModal = () => {
    setotpsend(false);
  };

  const setcursor = (id) => {
    document.getElementById(id).focus();
  };

  const stylefunction = (color, id) => {
    document.getElementById(id).style.border = color;
  };
  /////////////////for verify phone number that sends otp/////////////////
  const VERIFYPhonenumber = async (e) => {
    e.preventDefault();

    if (
      phoneNumber == "" ||
      phoneNumber.length > 13 ||
      phoneNumber.length < 6
    ) {
      setphoneerr("PLEASE TYPE A VALID PHONE NUMBER");
      stylefunction("2px outset red", "PhoneNumber");
      setcursor("PhoneNumber");
    } else {
      const veri_data = {
        number: phoneNumber,
      };

      const { message: messagee } = await SendPost(
        `${window.name}number-verification`,
        veri_data
      );
      if (messagee.includes("successfully")) {
        setotpsend(true);

        setphoneerr(messagee);
        setcursor("otp");
      } else {
        setcursor("PhoneNumber");
        setphoneerr(messagee);
      }
    }
  };
  /////////////////////////////////////////////////////

  ////////////for checking the otp typed////////////////

  const VerifyOtp = async () => {
    setotperr();

    const submit_code = {
      code: otp,
      number: phoneNumber,
    };
    const { message: messagee } = await SendPost(
      `${window.name}submit-code`,
      submit_code
    );

    if (messagee.includes("verified")) {
      setphoneerr("");
      setisverfied(true);
      setotpsend(false);
    }

    setotperr("wrong code");
  };
  ///////////////////////////////////////////////////

  ///////////////fnctn to call on make changes is clicked //////////

  const MakeChanges = async (e) => {
    e.preventDefault();
    if (city == "") {
      alert("Please choose your city");
    } else {
      const DOB = value;
      const edit_data = {
        FirstName,
        MiddleName,
        LastName,
        DOB,
        phoneNumber,
        email,
        City: city,
        State: state,
        Country: country,
        Degree,
        Field,
        CollegeName,
        University,
        GraduationYear,
      };
      const colldata = {
        college: CollegeName,
      };
     

      const { message: messagee } = await SendPost(
        `${window.name}edit-profile`,
        edit_data
      );

      const { message: result } = await Tokenlesssendpost(
        `${window.name}create-college`,
        colldata
      );
      if(testimonial.length>5 && profilepic!="")
      {
        const formData = new FormData();
        formData.append("studentId",studentId);
        formData.append("image",profilepic);
        formData.append("testimonial",testimonial);

      const { message: createtestimonial } = await Createtestemonials(
        `${window.name}create-testimonial`,
       formData
      );
    
      console.log(createtestimonial)
      }


      if (messagee.includes("updated")) {
        setvisible(true);
      } else {
        setemailerr(messagee.substring(0, 20));
        stylefunction("2px outset red", "email");
        setcursor("email");
      }
    }
  };
  //////////////////////////////////////////////

  //////////////search method for searching the selected colleges//////////
  const searchMethod = (input) => {
    let array = listofCollege;
    let arr = [];
    if (array[0]) {
      array.map((college) => {
        if (college.college.toLowerCase().includes(input.toLowerCase())) {
          arr.push(college.college);
        }
      });
      if (arr.length > 0) {
        setselectlistCollege(arr);
        setshowsuggestions(true);
      } else {
        setshowsuggestions(false);
      }
    }
  };
  ////////////////////////////////////////

  ////////////suggestion list comp of college ///////////////
  const suggestionsListComponent = (
    <ul class="suggestions">
      {selectlistofCollege.map((college, index) => {
        return (
          <li
            onClick={() => {
              setshowsuggestions(false);
              setCollegeName(college);
            }}
            key={index}
            className="suggestion-active"
          >
            {college}
          </li>
        );
      })}
    </ul>
  );
  //////////////////////////////////////

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | EditProfile</title>
      </Helmet>

      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={otpsend}
            width="350"
            height="250"
            effect="fadeInUp"
            onClickAway={closeOtpModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <input
                id="otp"
                type="text"
                placeholder="OTP"
                onChange={(e) => {
                  setotp(e.target.value);
                }}
                className="popup-input"
              ></input>
              <br></br>
              <label htmlFor="">{otperror && otperror}</label>
              <br></br>
              <button className="popup-button" onClick={VerifyOtp}>
                SUBMIT
              </button>
            </div>
          </Modal>
        </section>
      </div>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="350"
            height="250"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <h1>LEARN BY RESEARCH</h1>
              <p>PROFILE UPDATES SUCCESFULLY ...</p>
              <Link to="/editprofile" onClick={closeModal}>Close</Link>
            </div>
          </Modal>
        </section>
      </div>
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : isLoggedIn ? (
        <section className="sign-up editprofile">
          <div className="container">
            <div className="signup-content">
              <div className="signup-image">
                <img src="../images/Profile.svg" alt="Login pic"></img>
              </div>
              <div className="singup-form">
                <h2 className="form-title">EDIT PROFILE</h2>
                <form onSubmit={MakeChanges}>
                  <Tooltip title="Name">
                    <>
                      <p className="inputtext">First Name</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="First Name"
                            required
                            value={FirstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>
                  <Tooltip title="Middle Name">
                    <>
                      <p className="inputtext">Middle Name</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="Middle Name"
                            autoComplete="off"
                            value={MiddleName}
                            onChange={(e) => {
                              setMiddleName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Last Name">
                    <>
                      <p className="inputtext">Last Name</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            name="LastName"
                            id="LastName"
                            placeholder="Last Name"
                            autoComplete="off"
                            required
                            value={LastName}
                            className="input"
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Email">
                    <>
                      <p className="inputtext">Email</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            readonly="true"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                            value={email}
                          />
                          <MdDoneAll size="1.3em" color="#00e676" />
                        </div>
                        <label className="label" htmlFor="">
                          {emailerror && emailerror}
                        </label>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Date of Birth">
                    <>
                      <p className="inputtext">Date Of Birth</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            required
                            type="date"
                            placeholder="DD-MM-YY"
                            className="inputdate"
                            onChange={(e) => {
                              setdate(e.target.value);
                            }}
                            value={value}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>
                  <p className="inputtext">Phone Number</p>
                  <div className="inputholder">
                    <div className="inputholder-top">
                      <input
                        id="PhoneNumber"
                        type="tel"
                        placeholder="Your Phone Number"
                        autoComplete="off"
                        required
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />

                      {isverfied ? (
                        <Tooltip title="Verifeid">
                          <MdDoneAll size="1.2em" className="emtick" />
                        </Tooltip>
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
                  ) : (
                    <button
                      className="edit-profile-btn"
                      onClick={(e) => {
                        VERIFYPhonenumber(e);
                      }}
                    >
                      VERIFY PHONE NUMBER
                    </button>
                  )}

                  <Tooltip title="Country">
                    <>
                      <p className="inputtext">Country</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <select
                            className="selectBox"
                            required
                            name="country"
                            id="country"
                            onChange={(e) => {
                              const data = JSON.parse(e.target.value);
                              console.log(data)
                              setCountry(data.name);
                              setState("");
                              setCity("");
                              setallCity("");
                              const allstates = State.getStatesOfCountry(
                                data.isoCode
                              );

                              setallState(allstates);
                            }}
                          >
                            <option>
                              {country ? country : "Select country"}
                            </option>
                            {allcountry &&
                              allcountry.map((country) => (
                                <option value={JSON.stringify(country)}>
                                  {country.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip>
                    <>
                      <p className="inputtext">State</p>

                      <div className="inputholder">
                        <div className="inputholder-top">
                          <select
                            className="selectBox"
                            name="state"
                            id="state"
                            onChange={(e) => {
                              const data = JSON.parse(e.target.value);
                              setState(data.name);
                              setCity("");
                              const allcities = City.getCitiesOfState(
                                data.countryCode,
                                data.isoCode
                              );
                              setallCity(allcities);
                            }}
                          >
                            <option>{state ? state : "Select state"}</option>
                            {allstate &&
                              allstate.map((state) => (
                                <option value={JSON.stringify(state)}>
                                  {state.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip>
                    <>
                      <p className="inputtext">City</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <select
                            name="city"
                            id="city"
                            className="selectBox"
                            onChange={(e) => {
                              const data = JSON.parse(e.target.value);
                              setCity(data.name);
                            }}
                            name="city"
                            id="city"
                          >
                            <option>{city ? city : "select city"}</option>
                            {allcity &&
                              allcity.map((city) => (
                                <option value={JSON.stringify(city)}>
                                  {city.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Degree">
                    <>
                      <p className="inputtext">Degree</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="Degree"
                            autoComplete="off"
                            required
                            value={Degree}
                            onChange={(e) => {
                              setDegree(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>
                  <Tooltip title="Field">
                    <>
                      <p className="inputtext">Branch/Area of Study</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="Field"
                            autoComplete="off"
                            required
                            value={Field}
                            onChange={(e) => {
                              setField(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>
                  <Tooltip title="College Name">
                    <>
                      <p className="inputtext">College Name</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="College Name"
                            autoComplete="off"
                            required
                            autoComplete="off"
                            required
                            value={CollegeName}
                            onChange={(e) => {
                              setCollegeName(e.target.value);
                              searchMethod(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      {showsuggestions ? suggestionsListComponent : ""}
                    </>
                  </Tooltip>

                  <Tooltip title="University">
                    <>
                      <p className="inputtext">University</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="University"
                            autoComplete="off"
                            required
                            value={University}
                            onChange={(e) => {
                              setUniversity(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Graduation Year">
                    <>
                      <p className="inputtext">Graduation Year</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="Graduation Year"
                            autoComplete="off"
                            required
                            value={GraduationYear}
                            onChange={(e) => {
                              setGraduationYear(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>
                  {referal ? <Tooltip title="Referal code">
                    <>
                      <p className="inputtext">Referal Code</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="Graduation Year"
                            autoComplete="off"
                            required
                            value={referal}
                            readOnly
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip> : ""}

                 <Tooltip title="Testimonial">
                    <>
                      <p className="inputtext">Testimonial</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="text"
                            placeholder="testimonial"
                            autoComplete="off"
                            onChange={e => settestimonial(e.target.value)}
                            value={testimonial}
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <Tooltip title="Testimonial">
                    <>
                      <p className="inputtext">Profile pic</p>
                      <div className="inputholder">
                        <div className="inputholder-top">
                          <input
                            type="file"
                            placeholder="profile pic"
                            accept="image/*"
                            autoComplete="off"
                            
                          onChange={(e) => {
                // console.log(e.target.files)
                return setprofilepic(e.target.files[0]);
              }}
                            
                          />
                        </div>
                      </div>
                    </>
                  </Tooltip>

                  <input
                    // onClick={MakeChanges}
                    type="submit"
                    value="SAVE CHANGES"
                    className="submit-btn"
                  />
                  <Link to="/changepassword">
                    <p className="form-btmtext form-btmtext1">
                      Change Password
                    </p>
                  </Link>
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

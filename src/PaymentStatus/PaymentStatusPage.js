import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Link } from "react-router-dom";
import Authverifier from "../Backend/Authverifier";
import "./payment.css";
const PaymentStatusPage = () => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  let fields=[]
  const [status,setstatus]=useState(6)
  useEffect(async () => {
    setisLoading(true);
    const { isLoggedIn, data } = await Authverifier(`${window.name}users/me`);
    setisLoggedin(isLoggedIn);
    setisLoading(false);
  }, []);
  for(let i=1;i<=Math.ceil(status/3);i++){
  if(i==Math.ceil(status/3)){
    if(status%3==0)
     fields.push( <div className="myapplication-row">
     <p className="myapplication-row-text ">29/09/2021</p>
     <p className="myapplication-row-text ">Paid</p>
     <p className="myapplication-row-text  ">
       <button className="pay-btn pay-btn-paid">Paid</button>
     </p>
   </div>)
    else if(status%3==1)
     fields.push(<div className="myapplication-row">
     <p className="myapplication-row-text ">29/09/2021</p>
     <p className="myapplication-row-text ">Not Paid</p>
     <p className="myapplication-row-text  ">
       <button className="pay-btn pay-btn-np">Pay Now</button>
     </p>
   </div>)
    else 
     fields.push( <div className="myapplication-row">
     <p className="myapplication-row-text ">29/09/2021</p>
     <p className="myapplication-row-text ">Not Paid</p>
     <p className="myapplication-row-text  ">
       <button className="pay-btn pay-btn-deactivated">Pay Now</button>
     </p>
   </div>)
    }
  else
    fields.push(  <div className="myapplication-row">
    <p className="myapplication-row-text ">29/09/2021</p>
    <p className="myapplication-row-text ">Paid</p>
    <p className="myapplication-row-text  ">
      <button className="pay-btn pay-btn-paid">Paid</button>
    </p>
  </div>)
  }

  if (isLoading) {
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );
  }
  if(!isLoggedin){
    return(
      <div className="isLoading">
            <h1>Please Log in</h1>
            <div className="flex-btn">
              <Link to="/signup" className="button1 btn2">Sign up</Link>
              <Link to="/login" className="button1 btn2">Sign in</Link>
            </div>
          </div>
    )
  }
  return (
    <>
      <div className="application-container">
        <div className="applications-heading">
          <h2>My Payments</h2>
        </div>{" "}
        <div className="myapplication-box">
          <div className="myapplication-row">
            <div className="paytable-head ">
              Research Programme:
              <span>Prototyping the future of retail management</span>
            </div>
          </div>
          <div className="myapplication-box-holder">
            <div className="myapplication-row myapplication-row-head">
              <p className="myapplication-row-text myapplication-row-text-head ">
                Due Date
              </p>
              <p className="myapplication-row-text myapplication-row-text-head ">
                Status
              </p>
              <p className="myapplication-row-text myapplication-row-text-head "></p>
            </div>
            <div className="myapplication-row">
              <p className="myapplication-row-text ">29/09/2021</p>
              <p className="myapplication-row-text ">Paid</p>
              <p className="myapplication-row-text  ">
                <button className="pay-btn pay-btn-paid">Paid</button>
              </p>
            </div>
            <div className="myapplication-row">
              <p className="myapplication-row-text ">29/09/2021</p>
              <p className="myapplication-row-text ">Not Paid</p>
              <p className="myapplication-row-text  ">
                <button className="pay-btn pay-btn-np">Pay Now</button>
              </p>
            </div>
            <div className="myapplication-row">
              <p className="myapplication-row-text ">29/09/2021</p>
              <p className="myapplication-row-text ">Not Paid</p>
              <p className="myapplication-row-text  ">
                <button className="pay-btn pay-btn-deactivated">Pay Now</button>
              </p>
            </div>
          </div>
        </div>
        <div className="myapplication-box">
          <div className="myapplication-row">
            <div className="paytable-head ">
              Research Programme:
              <span>Modeling and Analysis of Biomimetic Drone</span>
            </div>
          </div>
          <div className="myapplication-box-holder">
            <div className="myapplication-row myapplication-row-head">
              <p className="myapplication-row-text myapplication-row-text-head ">
                Due Date
              </p>
              <p className="myapplication-row-text myapplication-row-text-head ">
                Status
              </p>
              <p className="myapplication-row-text myapplication-row-text-head "></p>
            </div>
            {fields}
            {/* <div className="myapplication-row">
              <p className="myapplication-row-text ">29/09/2021</p>
              <p className="myapplication-row-text ">Paid</p>
              <p className="myapplication-row-text  ">
                <button className="pay-btn pay-btn-paid">Paid</button>
              </p>
            </div>
            <div className="myapplication-row">
              <p className="myapplication-row-text ">29/09/2021</p>
              <p className="myapplication-row-text ">Not Paid</p>
              <p className="myapplication-row-text  ">
                <button className="pay-btn pay-btn-np">Pay Now</button>
              </p>
            </div>
            <div className="myapplication-row">
              <p className="myapplication-row-text ">29/09/2021</p>
              <p className="myapplication-row-text ">Not Paid</p>
              <p className="myapplication-row-text  ">
                <button className="pay-btn pay-btn-deactivated">Pay Now</button>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentStatusPage;
/*     switch (application.applicationstatus.data) {
                case 4: {
                  classn = "myapplication-row-btn-approv";
                  title = "Approved";
                  break;
                }
                case 3: {
                  classn = "myapplication-row-btn-rej";
                  title = "Rejected";
                  break;
                }
                case 2: {
                  classn = "myapplication-row-btn-pend";
                  title = "Pending";
                  break;
                }
                case 1: {
                  classn = "myapplication-row-btn-sub";
                  title = "Submited";
                  break;
                }
              }

              */

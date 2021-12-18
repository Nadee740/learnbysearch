import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Link } from "react-router-dom";
import Authverifier from "../Backend/Authverifier";
import Researchpgms from "../Backend/Researchpgms";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import Footer from "../LandingPage/footer/footer";
import "./payment.css";
const PaymentStatusPage = () => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [appliedrptdatas, setappliedrpdatas] = useState([]);
  useEffect(async () => {
    setisLoading(true);
    const { isLoggedIn, data } = await Authverifier(`${window.name}users/me`);
    setisLoggedin(isLoggedIn);
    if (isLoggedIn) {
      data.applicationForm.map((application, index) => {
        const app_data = {
          id: application,
        };
        Tokenlesssendpost(
          `${window.name}show-application-status`,
          app_data
        ).then((res) => {
          Researchpgms(
            `${window.name}research-program-id/${res.retdata.rp}`
          ).then((rpdata) => {
            Researchpgms(
              `${window.name}position/${res.retdata.appication[0].position}`
            ).then((position) => {
              setappliedrpdatas((state) => [
                ...state,
                {
                  rp: rpdata,
                  position: position.data.title,
                  data: res.retdata.appication[0],
                },
              ]);
              if (index == data.applicationForm.length - 1) {
                setisLoading(false);
              }
            });
          });
        });
      });
    }

    setisLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );
  }
  if (!isLoggedin) {
    return (
      <div className="isLoading">
        <h1>Please Log in</h1>
        <div className="flex-btn">
          <Link to="/signup" className="button1 btn2">
            Sign up
          </Link>
          <Link to="/login" className="button1 btn2">
            Sign in
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="application-container">
        <div className="applications-heading">
          <h2>My Payments</h2>
        </div>
        {appliedrptdatas.map((data, number) => {
          return data.data.applicationStatus == 6 ? (
            <div className="myapplication-box" key={number}>
              <div className="myapplication-row">
                <div className="paytable-head ">
                  Research Programme:
                  <span>{data.rp.data.title}</span>
                </div>
                <div className="paytable-head2 ">{data.position}</div>
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
                {data.data.paymentStatus.map((paymentstatus, index) => {
                  return (
                    <div className="myapplication-row" key={index}>
                      <p className="myapplication-row-text ">
                        {paymentstatus.deadLine}
                      </p>
                      <p className="myapplication-row-text ">
                        {paymentstatus.status ? "Paid" : "Not paid"}
                      </p>
                      <p className="myapplication-row-text  ">
                        {paymentstatus.status ? (
                          <button className="pay-btn pay-btn-paid">Paid</button>
                        ) : paymentstatus.isOverdue ? (
                          <button className="pay-btn pay-btn-deactivated">
                            Pay Now
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              window.location =
                                "https://pages.razorpay.com/lbrinstallment";
                            }}
                            className="pay-btn pay-btn-np"
                          >
                            Pay Now
                          </button>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <Footer/>
    </>
  );
};

export default PaymentStatusPage;

import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import Authverifier from "../Backend/Authverifier";

const PaymentStatusPage = () => {
const [isLoggedin, setisLoggedin] = useState(false);
const [isLoading, setisLoading] = useState(false);
useEffect(async () => {
setisLoading(true)
const { isLoggedIn, data} = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(isLoggedIn);
    setisLoading(false)
  }, []);
  if(isLoading){
      return(
      <div className="isLoading">
          <SolarSystemLoading />
        </div>)
  }
    return ( 
        <>
        <h1>Payment</h1>
        </>
     );
}
 
export default PaymentStatusPage;
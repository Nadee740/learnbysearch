import React, { useState } from "react";
import { useEffect } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import Researchpgms from "../Backend/Researchpgms";

import "./webinar.css";
import WebinareCard from "./webinarcard";
const WebinarPage = () => {
  const [isLoading,setisLoading]=useState(true)
  const [webinardata,setwebinardata]=useState()

useEffect(()=>{
getwebinardata()
},[])

  const getwebinardata = async () => {
    setisLoading(true);
    const { data: webinardata } = await Researchpgms(
      `${window.name}get-all-webinars`
    );
    if (webinardata) {
      setwebinardata(webinardata);
      
    }
    setisLoading(false);
  };
//   date: "2021-08-17"
// imageUrl: "https://res.cloudinary.com/dn3oddkar/image/upload/v1629043250/webinar_r1aq3h.jpg"
// studentId: (13) ["6114a56a806d4a84faf13d84", "60d832e7c8365a408da92132", "60d832e7c8365a408da92132", "60d832e7c8365a408da92132", "60d832e7c8365a408da92132", "6114a56a806d4a84faf13d84", "60e2de7c216c0a1ec267fc2a", "60e2a02ed5631a038a2e6241", "60e2de7c216c0a1ec267fc2a", "611573da806d4a84faf13db6", "611108b0ce993b374eeefc3f", "611108b0ce993b374eeefc3f", "60e186ac3793cf01a050924c"]
// title: "Research Opportunities In Management Innovations"
// updatedAt: "2021-08-16T10:31:27.947Z"

  return (
    <>{isLoading ? (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    ) :<div className="webinarpage">
      <h2>Webinars</h2>
      <div className="webinarpage-list">
      {webinardata.map((webinar,index)=>(
        <WebinareCard key={index} webinardata={webinar} />
      ))}
      
      </div>
    </div>}
    
    </>
  );
};

export default WebinarPage;

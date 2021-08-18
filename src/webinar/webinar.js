import React from "react";

import "./webinar.css";
import WebinareCard from "./webinarcard";
const WebinarPage = () => {
  return (
    <div className="webinarpage">
      <h2>Webinars</h2>
      <div className="webinarpage-list">
        <WebinareCard /> <WebinareCard /> <WebinareCard />
      </div>
    </div>
  );
};

export default WebinarPage;

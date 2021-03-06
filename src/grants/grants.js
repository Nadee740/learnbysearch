import "./grants.css";
import React, { Component, useEffect, useState } from "react";
import Select from "react-select";
import {
  IoCalendarClearSharp,
  IoChevronForward,
  IoGolfSharp,
  IoTimeOutline,
  IoOptionsSharp,
} from "react-icons/io5";

import Researchpgms from "../Backend/Researchpgms";
const GrantsPage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [allgrants, setallgrants] = useState([]);
  const [filteredgrants, setfiteredgrants] = useState([]);
  const category = [
    { value: "Fellowship", label: "Fellowship" },
    { value: "Research Grant", label: "Research Grant" },
    { value: "Scholarship", label: "Scholarship" },
  ];

  const sortby = [
    { value: "Deadline", label: "Deadline" },
    { value: "Location", label: "Location" },
    { value: "Area of Interest", label: "Area of Interest" },
    { value: "Education", label: "Education" },
    { value: "Category", label: "Category" },
    { value: "Amount", label: "Amount" },
  ];
  const sortbyinnerSelect = [
    { value: "Deadline", label: "Deadline" },
    { value: "Location", label: "Location" },
    { value: "Area of Interest", label: "Area of Interest" },
    { value: "Education", label: "Education" },
    { value: "Category", label: "Category" },
    { value: "Amount", label: "Amount" },
  ];
  const AreaofInterest = [
    { value: "Engineering & Technology", label: "Engineering & Technology" },
    { value: "Art & Literature", label: "Art & Literature" },
    { value: "Biotechnology", label: "Biotechnology" },
    { value: "Biology", label: "Biology" },
    { value: "Medicine", label: "Medicine" },
    { value: "Management", label: "Management" },
    { value: "Pure Science", label: "Pure Science" },
  ];
  const [filter, setFilter] = useState(false);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
    }),
  };
  useEffect(async () => {
    const { data: Datass } = await Researchpgms(`${window.name}grants`);
    setallgrants(Datass);
    setfiteredgrants(Datass);
  }, []);

  return (
    <div className="events">
      {/* ADd graphics */}
      <h2 className="events-head">Grants</h2>
      <img src="/images/grants.svg" alt="Grants" className="events-head-img" />
      <div className="events-row">
        <div className="mob-filter-holder" onClick={() => setFilter(!filter)}>
          <IoOptionsSharp size={"2em"} />
        </div>
        <div
          className={
            filter ? "events-filter " : "events-filter events-filter-mobhide"
          }
        >
          <div className="">
            <p className="events-filter-text">Category</p>
            <div className="">
              <Select
                onChange={(selected) => {
                  setfiteredgrants(allgrants);
                   if(selected.length>0)
                 { let a = [];
                  selected.map((selct) => {
                    a.push(selct.value.toLowerCase());
                  });
                  setfiteredgrants(
                    allgrants.filter((grant) =>
                      a.includes(grant.category.toLowerCase())
                    )
                  );
                }
                }}
                styles={customStyles}
                options={category}
                isMulti={true}
              />
            </div>
            <div className="line"></div>
          </div>
          <div className="">
            <p className="events-filter-text">Sort By</p>
            <div className="">
              <Select
                styles={customStyles}
                options={sortby}
                onChange={(slct) => {
                  if (slct.value == "Date") {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.date - b.date;
                      })
                    );
                  } else if ((slct.value = "Location")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.location - b.location;
                      })
                    );
                  } else if ((slct.value = "Area of interst")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.areaOfInterest - b.areaOfInterest;
                      })
                    );
                  } else if ((slct.value = "Category")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.category - b.category;
                      })
                    );
                  } else if ((slct.value = "Organiser")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.name - b.name;
                      })
                    );
                  }
                }}
              />
            </div>
            <div className="line"></div>
          </div>
          {/* <div className="">
            <p className="events-filter-text">Filter By</p>
            <div className="">
              <Select styles={customStyles} options={sortby} />
            </div>
            <div className="line"></div>
          </div> */}
          <div className="">
            <p className="events-filter-text">Area of Interest</p>
            <div className="">
              <Select
                styles={customStyles}
                options={AreaofInterest}
                isMulti={true}
                onChange={(selected) => {
                  setfiteredgrants(allgrants);
                  if (selected.length > 0) {
                    let a = [];
                    selected.map((selct) => {
                      a.push(selct.value.toLowerCase());
                    });
                    
                
                    setfiteredgrants(
                      allgrants.filter((evnt) =>
                        a.includes(evnt.areaOfInterest.toLowerCase())
                      )
                    );
                  }
                }}
              />
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="events-cards">
          {filteredgrants.map((grant, index) => {
            let classnamearea="";
            let className = "";
            if (grant.category.toLowerCase() == "fellowship") {
              className = "events-cat webinar-chip";
            } else if (grant.category.toLowerCase() == "scholarship") {
              className = "events-cat workshop-chip";
            } else if (grant.category.toLowerCase() == "research grant") {
              className = "events-cat training-chip";
            }
            if(grant.areaOfInterest.toLowerCase()=="engineering & technology")
            {
                classnamearea="chips color-2"
            }
            else if(grant.areaOfInterest.toLowerCase()=="art & literature")
            {
                classnamearea="chips color-1"
            }
            else if(grant.areaOfInterest.toLowerCase()=="pure science")
            {
                classnamearea="chips color-3"
            }
            else if(grant.areaOfInterest.toLowerCase()=="biotechnology")
            {
                classnamearea="chips color-4"
            }
            else if(grant.areaOfInterest.toLowerCase()=="medicine")
            {
                classnamearea="chips color-5"
            }
            return (
              <div className="events-card">
                <div className={className}>{grant.category}</div>
                <h3 className="events-card-title">{grant.title}</h3>
                <p className="events-card-text">
                  {grant.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <div className="events-card-row">
                  <div className="events-card-row-col">
                    <IoTimeOutline color="#484848" size={"1.2em"} />
                    <p className="events-card-row-col-text">
                      Deadline:{grant.deadline}
                    </p>
                  </div>
                  <div className="">
                    <div className="events-card-row-col">
                      <IoGolfSharp color="#484848" size={"1.2em"} />
                      <p className="events-card-row-col-text">
                        {grant.location}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="grant-eligibility-text">{grant.eligibility}</p>
                <div className="organiser">
                  <div className="organiser-col">
                    <p className="organiser-col-text">Amount</p>
                    <p className="organiser-col-text grant-col-text">
                      ??? {grant.amount}
                    </p>
                  </div>
                  <div className="view-detail-btn" onClick={()=>{
                   window.location=grant.applicationLink
                  }}>
                    <p className="organiser-col-text view-detail-btn-text">
                      View Details
                    </p>
                    <IoChevronForward size={"1.5em"} />
                  </div>
                </div>
                <div className={classnamearea}>{grant.areaOfInterest}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrantsPage;

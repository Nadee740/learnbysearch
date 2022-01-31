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
    { value: "Art & Literature", label: "DeadlinArt & Literature" },
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
                  let a = [];
                  selected.map((selct) => {
                    a.push(selct.value.toLowerCase());
                  });
                  setfiteredgrants(
                    filteredgrants.filter((grant) =>
                      a.includes(grant.category.toLowerCase())
                    )
                  );
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
                        return a.event.date - b.event.date;
                      })
                    );
                  } else if ((slct.value = "Location")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.event.location - b.event.location;
                      })
                    );
                  } else if ((slct.value = "Area of interst")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.event.areaOfInterest - b.event.areaOfInterest;
                      })
                    );
                  } else if ((slct.value = "Category")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.event.category - b.event.category;
                      })
                    );
                  } else if ((slct.value = "Organiser")) {
                    setfiteredgrants(
                      filteredgrants.sort(function (a, b) {
                        return a.organizer.name - b.organizer.name;
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
                      filteredgrants.filter((evnt) =>
                        a.includes(evnt.event.areaOfInterest.toLowerCase())
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
            return (
              <div className="events-card">
                <div className="events-cat">{grant.category}</div>
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
                      ₹ {grant.amount}
                    </p>
                  </div>
                  <div className="view-detail-btn">
                    <p className="organiser-col-text view-detail-btn-text">
                      View Details
                    </p>
                    <IoChevronForward size={"1.5em"} />
                  </div>
                </div>
                <div className="chips">{grant.areaOfInterest}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrantsPage;

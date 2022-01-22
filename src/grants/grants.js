import "./grants.css";
import React, { Component } from "react";
import Select from "react-select";
import {
  IoCalendarClearSharp,
  IoChevronForward,
  IoGolfSharp,
  IoTimeOutline,
} from "react-icons/io5";
const GrantsPage = () => {
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
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
    }),
  };
  return (
    <div className="events">
      <h2 className="events-head">Grants</h2>
      <div className="events-row">
        <div className="events-filter">
          <div className="">
            <p className="events-filter-text">Category</p>
            <div className="">
              <Select styles={customStyles} options={category} isMulti={true} />
            </div>
            <div className="line"></div>
          </div>
          <div className="">
            <p className="events-filter-text">Sort By</p>
            <div className="">
              <Select styles={customStyles} options={sortby} isMulti={true} />
            </div>
            <div className="line"></div>
          </div>
          <div className="">
            <p className="events-filter-text">Filter By</p>
            <div className="">
              <Select styles={customStyles} options={sortby} />
            </div>
            <div className="line"></div>
          </div>
          <div className="">
            <p className="events-filter-text">Area of Interest</p>
            <div className="">
              <Select
                styles={customStyles}
                options={sortbyinnerSelect}
                isMulti={true}
              />
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="events-cards">
          <div className="events-card">
            <div className="events-cat">Fellowship</div>
            <h3 className="events-card-title">Title Of the Grant</h3>
            <p className="events-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur ea rem aperiam, vel nihil distinctio debitis reiciendis
              ipsa excepturi. Quaerat laborum officiis est, impedit voluptatum
              error doloribus! Minus, assumenda facilis.
            </p>
            <div className="events-card-row">
              <div className="events-card-row-col">
                <IoTimeOutline color="#484848" size={"1.2em"} />
                <p className="events-card-row-col-text">
                  Deadline:25 June 2022
                </p>
              </div>
              <div className="">
                <div className="events-card-row-col">
                  <IoGolfSharp color="#484848" size={"1.2em"} />
                  <p className="events-card-row-col-text">New York</p>
                </div>
              </div>
            </div>
            <p className="grant-eligibility-text">Eligibility Education</p>
            <div className="organiser">
              <div className="organiser-col">
                <p className="organiser-col-text">Amount</p>
                <p className="organiser-col-text grant-col-text">₹ 12000</p>
              </div>
              <div className="view-detail-btn">
                <p className="organiser-col-text view-detail-btn-text">
                  View Details
                </p>
                <IoChevronForward size={"1.5em"} />
              </div>
            </div>
            <div className="chips">#Area Of Intrest</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantsPage;

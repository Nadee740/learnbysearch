import "./events.css";
import React, { Component } from "react";
import Select from "react-select";
import {
  IoCalendarClearSharp,
  IoChevronForward,
  IoGolfSharp,
  IoTimeOutline,
} from "react-icons/io5";
const EventsPage = () => {
  const category = [
    { value: "Webinar", label: "Webinar" },
    { value: "Workshop", label: "Workshop" },
    { value: "Training", label: "Training" },
    { value: "Conference", label: "Conference" },
  ];

  const sortby = [
    { value: "Date", label: "Date" },
    { value: "Location", label: "Location" },
    { value: "Area of Interest", label: "Area of Interest" },
    { value: "Organiser", label: "Organiser" },
    { value: "Category", label: "Category" },
  ];
  const sortbyinnerSelect = [
    { value: "Date", label: "Date" },
    { value: "Location", label: "Location" },
    { value: "Area of Interest", label: "Area of Interest" },
    { value: "Organiser", label: "Organiser" },
    { value: "Category", label: "Category" },
  ];
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
    }),
  };
  return (
    <div className="events">
      <h2 className="events-head">Events</h2>
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
            <div className="events-cat">Webinar</div>
            <h3 className="events-card-title">Title Of the Event</h3>
            <p className="events-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur ea rem aperiam, vel nihil distinctio debitis reiciendis
              ipsa excepturi. Quaerat laborum officiis est, impedit voluptatum
              error doloribus! Minus, assumenda facilis.
            </p>
            <div className="events-card-row">
              <div className="events-card-row-col">
                <IoCalendarClearSharp color="#484848" size={"1.2em"} />
                <p className="events-card-row-col-text">25 June 2022</p>
              </div>
              <div className="">
                <div className="events-card-row-col">
                  <IoGolfSharp color="#484848" size={"1.2em"} />
                  <p className="events-card-row-col-text">New York</p>
                </div>
              </div>
              <div className="">
                <div className="events-card-row-col">
                  <IoTimeOutline color="#484848" size={"1.2em"} />
                  <p className="events-card-row-col-text">10Am IST</p>
                </div>
              </div>
            </div>
            <div className="organiser">
              <div className="organiser-col">
                <p className="organiser-col-text">OrganisedBy</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                  alt=""
                  className="organiser-logo"
                />
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
          <div className="events-card">
            <div className="events-cat">Webinar</div>
            <h3 className="events-card-title">Title Of the Event</h3>
            <p className="events-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur ea rem aperiam, vel nihil distinctio debitis reiciendis
              ipsa excepturi. Quaerat laborum officiis est, impedit voluptatum
              error doloribus! Minus, assumenda facilis.
            </p>
            <div className="events-card-row">
              <div className="events-card-row-col">
                <IoCalendarClearSharp color="#484848" size={"1.2em"} />
                <p className="events-card-row-col-text">25 June 2022</p>
              </div>
              <div className="">
                <div className="events-card-row-col">
                  <IoGolfSharp color="#484848" size={"1.2em"} />
                  <p className="events-card-row-col-text">New York</p>
                </div>
              </div>
              <div className="">
                <div className="events-card-row-col">
                  <IoTimeOutline color="#484848" size={"1.2em"} />
                  <p className="events-card-row-col-text">10Am IST</p>
                </div>
              </div>
            </div>
            <div className="organiser">
              <div className="organiser-col">
                <p className="organiser-col-text">OrganisedBy</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                  alt=""
                  className="organiser-logo"
                />
              </div>
              <div className="view-detail-btn">
                <p className="organiser-col-text view-detail-btn-text">
                  View Details
                </p>
                <IoChevronForward size={"1.5em"} />
              </div>
            </div>
            <div className="chips">#Area Of Interest</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

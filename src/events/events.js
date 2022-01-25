import "./events.css";
import React, { Component } from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  IoCalendarClearSharp,
  IoChevronForward,
  IoGolfSharp,
  IoTimeOutline,
} from "react-icons/io5";
import Researchpgms from "../Backend/Researchpgms";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
const EventsPage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [allevents, setallevents] = useState([]);
  const [filteredevents, setfilteredevents] = useState([]);
  const category = [
    // { value: "test", label: "test" },
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
  const AreaofInterest = [
    { value: "Engineering & Technology", label: "Engineering & Technology" },
    { value: "Art & Literature", label: "DeadlinArt & Literature" },
    { value: "Biotechnology", label: "Biotechnology" },
    { value: "Biology", label: "Biology" },
    { value: "Medicine", label: "Medicine" },
    { value: "Management", label: "Management" },
    { value: "Pure Science", label: "Pure Science" },
  ];
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
    }),
  };
  useEffect(async () => {
    let arr = [];
    setisLoading(true);
    Researchpgms(`${window.name}events`).then((data) => {
      setallevents(data.data);
      setfilteredevents(data.data);
      data.data.map(async (evnt, index) => {
        const { data: Datass } = await Researchpgms(
          `${window.name}organizer/${evnt.organizerId}`
        );
        arr.push({ event: evnt, organizer: Datass });

        if (arr.length == data.data.length) {
          setallevents(arr);
          setfilteredevents(arr);
          setisLoading(false);
        }
      });
    });
  }, []);

  if (isLoading) {
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );
  }
  return (
    <div className="events">
      <h2 className="events-head">Events</h2>{" "}
      <img src="/images/events.svg" alt="Events" className="events-head-img" />
      <div className="events-row">
        <div className="events-filter">
          <div className="">
            <p className="events-filter-text">Category</p>
            <div className="">
              <Select
                onChange={(selected) => {
                  setfilteredevents(allevents);
                  let a = [];
                  if (selected.length > 0) {
                    selected.map((selct) => {
                      a.push(selct.value.toLowerCase());
                    });
                    setfilteredevents(
                      filteredevents.filter((evnt) =>
                        a.includes(evnt.event.category.toLowerCase())
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
                    setfilteredevents(
                      filteredevents.sort(function (a, b) {
                        return a.event.date - b.event.date;
                      })
                    );
                  } else if ((slct.value = "Location")) {
                    setfilteredevents(
                      filteredevents.sort(function (a, b) {
                        return a.event.location - b.event.location;
                      })
                    );
                  } else if ((slct.value = "Area of interst")) {
                    setfilteredevents(
                      filteredevents.sort(function (a, b) {
                        return a.event.areaOfInterest - b.event.areaOfInterest;
                      })
                    );
                  } else if ((slct.value = "Category")) {
                    setfilteredevents(
                      filteredevents.sort(function (a, b) {
                        return a.event.category - b.event.category;
                      })
                    );
                  } else if ((slct.value = "Organiser")) {
                    setfilteredevents(
                      filteredevents.sort(function (a, b) {
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
                  setfilteredevents(allevents);
                  if (selected.length > 0) {
                    let a = [];
                    selected.map((selct) => {
                      a.push(selct.value.toLowerCase());
                    });
                    setfilteredevents(
                      filteredevents.filter((evnt) =>
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
          {filteredevents.map((event) => {
            return (
              <div className="events-card">
                <div className="events-cat webinar-chip">
                  {event.event.category}
                </div>
                <h3 className="events-card-title">{event.event.title}</h3>
                <p className="events-card-text">
                  {event.event.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <div className="events-card-row">
                  <div className="events-card-row-col">
                    <IoCalendarClearSharp color="#484848" size={"1.2em"} />
                    <p className="events-card-row-col-text">
                      {event.event.date}
                    </p>
                  </div>
                  <div className="">
                    <div className="events-card-row-col">
                      <IoGolfSharp color="#484848" size={"1.2em"} />
                      <p className="events-card-row-col-text">
                        {event.event.locaion}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="events-card-row-col">
                      <IoTimeOutline color="#484848" size={"1.2em"} />
                      <p className="events-card-row-col-text">
                        {event.event.time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="organiser">
                  <div className="organiser-col">
                    <p className="organiser-col-text">{event.organizer.name}</p>
                    <img
                      src={event.organizer.logoUrl}
                      alt=""
                      className="organiser-logo"
                    />
                  </div>
                  <div
                    onClick={() => {
                      window.location = event.event.regLink;
                    }}
                    className="view-detail-btn"
                  >
                    <p className="organiser-col-text view-detail-btn-text">
                      View Details
                    </p>
                    <IoChevronForward size={"1.5em"} />
                  </div>
                </div>
                <div className="chips ">{event.event.areaOfInterest}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

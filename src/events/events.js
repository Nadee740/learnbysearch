import "./events.css";
import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";

import {
  IoCalendarClearSharp,
  IoChevronForward,
  IoGolfSharp,
  IoTimeOutline,
  IoOptionsSharp,
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
  const [filter, setFilter] = useState(false);
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
      if (data.data.length == 0) {
        setisLoading(false);
        return;
      }
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
                  setfilteredevents(allevents);

                  let a = [];
                  if (selected.length > 0) {
                    selected.map((selct) => {
                      a.push(selct.value.toLowerCase());
                    });
                    setfilteredevents(
                      allevents.filter((evnt) =>
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
                  let arr = filteredevents;

                  if (slct.value == "Date") {
                    arr.sort(function (a, b) {
                      return (
                        Date.parse(b.event.date) - Date.parse(a.event.date)
                      );
                    });

                    setfilteredevents(arr);
                  } else if (slct.value == "Location") {
                    arr.sort(function (a, b) {
                      let var1 = a.event.location.toLowerCase();
                      let var2 = b.event.location.toLowerCase();
                      if (var1 < var2) {
                        console.log("hy");
                        return 1;
                      } else return -1;
                      
                    });
                    console.log(
                      arr[0].event.location,
                      filteredevents[0].event.location,
                      "hyy"
                    );
                    setfilteredevents(arr);
                  } else if (slct.value == "Area of interst") {
                    setfilteredevents(
                      filteredevents.sort(function (a, b) {
                        return a.event.areaOfInterest - b.event.areaOfInterest;
                      })
                    );
                  } else if (slct.value == "Category") {
                    setfilteredevents(
                      filteredevents.sort(function (a, b) {
                        return a.event.category - b.event.category;
                      })
                    );
                  } else if (slct.value == "Organiser") {
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
                      allevents.filter((evnt) =>
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
            let className = "";
            if (event.event.category.toLowerCase() == "webinar") {
              className = "events-cat webinar-chip color-1";
            } else if (event.event.category.toLowerCase() == "workshop") {
              className = "events-cat webinar-chip color-3";
            } else if (event.event.category.toLowerCase() == "training") {
              className = "events-cat webinar-chip color-2";
            } else if (event.event.category.toLowerCase() == "conference") {
              className = "events-cat webinar-chip color-4";
            }
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
                    <p className="organiser-col-text ">
                      {event.organizer.name}
                    </p>
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

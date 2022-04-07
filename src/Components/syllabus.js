import { useState } from "react";
import {
  AiFillClockCircle,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import "./syllabus.css";
const Syllabus = ({datas}) => {
    console.log(datas);
  const [stateIndex, setselectedIndex] = useState(0);
  const itemSelected = (index) => {
    setselectedIndex(index);
  };
  const data = [
    {
      head: "Introducing data analytics",

      descr:
        "Data helps us make decisions in everyday life and in business. In this first part of the course, you’ll learn how data analysts use data analytics and the tools of their trade to inform those decisions. You’ll also discover more about this course and the overall program expectations.",
    },
    {
      head: "Python Workshop",
      descr:
        "Data helps us make decisions in everyday life and in business. In this first part of the course, you’ll learn how data analysts use data analytics and the tools of their trade to inform those decisions. You’ll also discover more about this course and the overall program expectations.",
    },
  ];
  return (
    <div className="openprogrammespage-section">
      <p className="openprogrammespage-head">
        Syllabus - What you will learn from this course
      </p>
      {datas.map((item, index) => {
        return (
          <div key={index}>
            <div className="syllabus-row">
              <div className={"syllabus-row-col1"}>
                <p className="syllabus-text">WEEK</p>
                <p className="syllabus-text-count">{index + 1}</p>
              </div>
              <div className="syllabus-row-col2">
                <div className="syllabus-head-holder">
                  <p className="syllabus-head">{item.title}</p>

                  {stateIndex === index ? (
                    <div onClick={() => itemSelected(5)} className="xcx">
                      <AiFillCaretUp size={"1.5rem"} color="#ef6c00" />
                    </div>
                  ) : (
                    <div onClick={() => itemSelected(index)} className="">
                      <AiFillCaretDown size={"1.5rem"} color="#ef6c00" />
                    </div>
                  )}
                </div>
                {index === stateIndex ? (
                  <p className={"syllabus-content-text"}>{item.description}</p>
                ) : null}
              </div>
            </div>
            <div className="line line-light"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Syllabus;

import "./OpenProgrammes.css";
import { useState } from "react";
import OpenprogrammesModel from "../ProgaramesModel/OpenprogrammesModel";

function Openprogramcard(){
  const [visible, setvisible] = useState(false);
  
  const closeModal = () => {
    setvisible(false);
  };
  return (
    <>
    <OpenprogrammesModel visible={visible} closeModal={closeModal}>

    </OpenprogrammesModel>
    <div className="openprogramcard" >
      <img
        src="https://images.unsplash.com/photo-1622890276840-8eabe803e2bb"
        alt="Card Haeder"
        className="openprogramcard-img"
      />
      <p className="openprogramcard-head">Program 1</p>
      <p className="openprogramcard-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        sunt quaerat dignissimos, maxime sapiente, suscipit harum excepturi
        maiores explicabo, veniam hic corporis deserunt commodi voluptates
        voluptatem repudiandae laboriosam modi cum!
      </p>
      <button onClick={()=>{
        setvisible(true)
      }} className="openprogramcard-btn">KNOW MORE</button>
    </div>
    </>
  );
};

export default Openprogramcard;

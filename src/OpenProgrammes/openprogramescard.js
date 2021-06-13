import "./OpenProgrammes.css";
import { useState } from "react";
import OpenprogrammesModel from "../ProgaramesModel/OpenprogrammesModel";

function Openprogramcard({blog}){
  const [visible, setvisible] = useState(false);
  
  const closeModal = () => {
    setvisible(false);
  };

  const htmlpart=blog.description;
  return (
    <>
    <OpenprogrammesModel visible={visible} closeModal={closeModal}>

    </OpenprogrammesModel>
    <div className="openprogramcard" >
      <img
        src={blog.imageUrl}
        alt="Card Haeder"
        className="openprogramcard-img"
      />
      <p className="openprogramcard-head">{blog.title}</p>
     <div dangerouslySetInnerHTML={{__html:htmlpart}}></div>
      <button onClick={()=>{
        window.location="/openprogrammespage"
      }} className="openprogramcard-btn">KNOW MORE</button>
    </div>
    </>
  );
};

export default Openprogramcard;

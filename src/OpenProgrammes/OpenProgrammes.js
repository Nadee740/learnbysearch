import { useEffect } from "react";
import Openprogramcard from "./openprogramescard";
import "./OpenProgrammes.css";
import Researchpgms from "../Backend/Researchpgms";
import { useState } from "react";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import {Helmet} from "react-helmet";


const OpenProgrammes = () => {
       const[blogsData,setblogData]=useState("")
       const[isLoading,setisLoading]=useState(true)
       const [error,seterror]=useState(false);

const getBlogs=async()=>{
  setisLoading(true)
  const { data: Datass } = await Researchpgms(`${window.name}research-programs`)
  setblogData(Datass)
  console.log(Datass.length,"Datasssss")
  
  
  console.log(blogsData,"blogsdata")
  setisLoading(false)
}
       
  useEffect(async() => {
    
    getBlogs()
    
   
  }, [])
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Programs</title>
                
            </Helmet>
        {isLoading?<div className="isLoading"><SolarSystemLoading/></div>:
        error? <div className="isLoading">
          <h1>OOOps an error occured...</h1>
        </div>:
      <div className="openprograms">
        <h2>Open Programs</h2>
        <div className="cardholder">
        {blogsData.length>=1? blogsData.map((blog,index)=>(
       
        
          
          <Openprogramcard blog={blog} key={index} />
       
         
         
        
        )):seterror(true)}
        </div>
      </div>
        }
    </>
  );
};

export default OpenProgrammes;

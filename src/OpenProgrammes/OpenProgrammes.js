import { useEffect } from "react";
import Openprogramcard from "./openprogramescard";
import "./OpenProgrammes.css";
import Researchpgms from "../Backend/Researchpgms";
import { useState } from "react";
const OpenProgrammes = () => {
       const[blogsData,setblogData]=useState("")
       const[isLoading,setisLoading]=useState(true)

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
        {isLoading?<div className="isLoading"><h1>Loading...</h1></div>:
      <div className="openprograms">
        <h2>Open programs</h2>
        <div className="cardholder">
        {blogsData && blogsData.map((blog,index)=>(
       
        
          
          <Openprogramcard blog={blog}  />
       
         
         
        
        ))}
        </div>
      </div>
        }
    </>
  );
};

export default OpenProgrammes;

import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";

const Quizconfirmtaion = () => {
    const { rpid } = useParams();
  const { positionid } = useParams();
  const {appid}=useParams();
  const[isLoading,setisLoading]=useState(true)
  const[rp,setrp]=useState()
  const[postion,setPosition]=useState()
  useEffect(async()=>{

    const { data } = await Researchpgms(`${window.name}research-program-id/${rpid}`)
  setrp(data.title)
  const { data:pos } = await Researchpgms(`${window.name}position/${positionid}`)
  setPosition(pos.title)
  setisLoading(false)
  },[])

  if (isLoading)
  return (
    <div className="isLoading">
      <SolarSystemLoading/>
    </div>
  );
    return ( 
        <>
        <p>
        You are about to take a quiz test for the Research
Program: {rp} for {postion}  which is one
of the most important screening criteria at LBR.
        </p>
        <br />
        <p>   Time required to take this test is 20 minutes.
submitting application is the first step. Inorder to
be eligible for admission to the research Program,
it is mandatory to comlplete this test in the next 2

working days.
</p>
            <Footer></Footer>
        </>
     );
}
 
export default Quizconfirmtaion;
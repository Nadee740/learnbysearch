import "./publishedprogram.css";
import Slider from "react-slick";
import PublishedCard from "./publishedCard";
const Publishedprograms = ({rpdata}) => {
  let count=0
  
  console.log(rpdata)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="blogSlider publishedprograms">
      <h2 className="mentorcarousel-head">Completed Research Programs</h2>
      <div className="slidecontainer ">
        <Slider {...settings}>
        {rpdata.map((rp,index)=>{
          console.log(count)

        if(rp.isCompleted)
         {count=count+1
          return (<PublishedCard rp={rp}/>)
         }
         if(index=rpdata.length-1)
         {
           if(count==1)
           {
             return(<div>

             </div>)
             return(<div>
               
               </div>)
           }
         }
   
        })}
          
        </Slider>{" "}
      </div>
    </div>
  );
};

export default Publishedprograms;

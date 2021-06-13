import "./Blogspage.css";
import { AiOutlineSearch } from "react-icons/ai";
import Blog from "./blog";
import { useEffect,useState  } from "react";
import Researchpgms from "../Backend/Researchpgms";
const BlogsPage = () => {
       const[blogsData,setblogData]=useState("")
       const[blogsfulldata,setblogsfulldata]=useState("")
       const[isLoading,setisLoading]=useState(true)
       const[SearchText,setsearchText]=useState("")
       

  const getBlogs=async()=>{
  setisLoading(true)
  const { data: Datass } = await Researchpgms(`${window.name}blog`)
  setblogData(Datass)
  setblogsfulldata(Datass)
  setisLoading(false)
}

 const searchMethod=(val)=>{
   console.log(val)
   let array=blogsfulldata
   
   console.log(array)
   console.log("Workiing")
   let arr=[]

   array.map((blog)=>{
if(blog.title.toLowerCase().includes(val.toLowerCase()) || blog.author.toLowerCase().includes(val.toLowerCase()))
{
  //fkdjsdf
  console.log(true)
arr.push(blog)

}
else{
  console.log(false)
}
   })

   setblogData(arr)

 }
       
  useEffect(() => {
    
    getBlogs()
    
   
  }, [])
  return (<>
    {isLoading?<div className="isLoading"><h1>Loading...</h1></div>:
    <div className="blogpage">
      <div className="blogheader">
        <div className="blogheader-col1">
          <img
            src="/images/blog.svg"
            alt="Blog Section"
            className="blogheader-img"
          />
        </div>
        <div className="blogheader-col2">
          <h2>Blogs</h2>
          <p className="blogheader-text">
            Blogging is a conversation , not a code
          </p>
        </div>
      </div>
      <div className="searchbarholder">
        <input type="text" className="searchbar" placeholder="Search Blogs" value={SearchText} onChange={(e)=>{
          setsearchText(e.target.value)
          searchMethod(e.target.value)
        }} />
        <AiOutlineSearch size="2em" className="searchbar-icn" />
      </div>
      <div className="blogholder">
      {blogsData.map((blog,index)=>(
        <Blog blog={blog} key={index} />
      ))}
        
        
      </div>
    </div>
    }
    </>
  );
};

export default BlogsPage;

// import logo from './logo.svg';
import Navbar from './NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './login/Login';
import Signup from './Signup/Signup';
import LandingPage from './LandingPage/LandingPage';

import { useEffect, useState } from 'react';
import EditProfile from './EditProfile/EditProfile';
import Changepassword from './Changepassword/Changepassword';
import ContactUs from './Contactus/Contactus';
import BlogsPage from './Blogspage/Blogspage';
import Authverifier from './Backend/Authverifier';
import COuntryCode from './Countrycode/countrycode';
import MyApplications from './MyApplications/MyApplications';
import OpenProgrammes from './OpenProgrammes/OpenProgrammes';
import Open from './test/open';
import BlogsDetailsPage from './BlogsDetailsPage/BlogsDetailsPage';


function App() {
  const [user,setUser]=useState(localStorage.getItem('loggedinuserid'))
  const [isLoggedIn,setisLoggedin]=useState(false)
  const [isLoading,setisLoading]=useState(false)
  useEffect(async() => {
    
  // localStorage.clear()
  setisLoading(true)
  const {isLoggedIn:messagee} =await Authverifier("http://localhost:8000/users/me")
  setisLoggedin(messagee) 
  setisLoading(false)
  console.log(messagee)
      
   }, [])
  
  return (
    
    <div className="App">
     {isLoading?<div className="isLoading"><h1>Loading...</h1></div>: <Router>
       <Navbar/>
       {isLoggedIn ? <Route path="/" exact component={BlogsPage}  /> : <Route path="/" exact component={LandingPage}  /> }
       <Route path='/login' component={Login} />
       <Route path='/signup' component={Signup} />
       <Route path='/editprofile' component={EditProfile} />
       <Route path='/changepassword' component={Changepassword} />
       <Route path='/contactus' component={ContactUs} />
       <Route path='/allblogs' component={BlogsPage} />
       <Route path='/myapplications' component={MyApplications} />
       <Route path='/openprogrammes' exact component={OpenProgrammes} />
       <Route path='/open' component={Open} />
       <Route path='/blogsdetailspage' component={BlogsDetailsPage} />
      
       </Router>} 
      
      
    </div>
   
  );
}

export default App;

// import logo from './logo.svg';
import Navbar from './NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './login/Login';
import Signup from './Signup/Signup';
import LandingPage from './LandingPage/LandingPage';
import Page1 from './Page1/Page1';
import { useEffect, useState } from 'react';
import EditProfile from './EditProfile/EditProfile';
import Changepassword from './Changepassword/Changepassword';
import ContactUs from './Contactus/Contactus';
import BlogsPage from './Blogspage/Blogspage';
import Authverifier from './Backend/Authverifier';

function App() {
  const [user,setUser]=useState(localStorage.getItem('loggedinuserid'))
  const [isLoggedIn,setisLoggedin]=useState(false)
  const [isLoading,setisLoading]=useState(false)
  useEffect(async() => {
  //localStorage.clear()
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
       <Route path='/page1' component={Page1} />
       <Route path='/changepassword' component={Changepassword} />
       <Route path='/contactus' component={ContactUs} />
       <Route path='/allblogs' component={BlogsPage} />
       </Router>} 
      
      
    </div>
   
  );
}

export default App;

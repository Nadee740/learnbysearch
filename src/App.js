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

function App() {
  const [user,setUser]=useState()
  useEffect(() => {
   // localStorage.clear()
    const loggedInUser = localStorage.getItem('userdata')
   
    if (loggedInUser) {
      
setUser(loggedInUser)
      
    }
      
   }, [])
  
  return (
    
    <div className="App">
      
       <Router>
       <Navbar/>
       {user ? <Route path="/" exact component={Page1}  /> : <Route path="/" exact component={LandingPage}  /> }
       <Route path='/login' component={Login} />
       <Route path='/signup' component={Signup} />
       <Route path='/editprofile' component={EditProfile} />
       <Route path='/page1' component={Page1} />
       <Route path='/changepassword' component={Changepassword} />
       <Route path='/contactus' component={ContactUs} />
       <Route path='/allblogs' component={BlogsPage} />
       </Router>
      
    </div>
   
  );
}

export default App;

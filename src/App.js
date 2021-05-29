// import logo from './logo.svg';
import Navbar from './NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './login/Login';
import Signup from './Signup/Signup';
import Examples from './Popup/Popup';
import LandingPage from './LandingPage/LandingPage';
import Page1 from './Page1/Page1';
import { useEffect, useState } from 'react';
import Session from 'react-session-persist/lib';
import EditProfile from './EditProfile/EditProfile';

function App() {
  const [user,setUser]=useState()
  useEffect(() => {
    
    const loggedInUser = sessionStorage.getItem('user')
   
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
       <Route path='/verification' component={Examples} />
       </Router>
      
    </div>
   
  );
}

export default App;

// import logo from './logo.svg';
import Navbar from "./NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./Signup/Signup";
import LandingPage from "./LandingPage/LandingPage";

import { useEffect, useState } from "react";
import EditProfile from "./EditProfile/EditProfile";
import Changepassword from "./Changepassword/Changepassword";
import ContactUs from "./Contactus/Contactus";
import BlogsPage from "./Blogspage/Blogspage";
import Authverifier from "./Backend/Authverifier";
import COuntryCode from "./Countrycode/countrycode";
import MyApplications from "./MyApplications/MyApplications";
import OpenProgrammes from "./OpenProgrammes/OpenProgrammes";

import BlogsDetailsPage from "./BlogsDetailsPage/BlogsDetailsPage";
import OpenProgrammesPage from "./OpenProgrammesPage/OpenProgrammesPage";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ApplicationForm from "./ApplicationForm/ApplicationForm";

import Ongoingresearch from "./ongoingresearch/ongoingresearch";
import OngoingresearchPage from "./ongoingresearchdetailed/ongoingresearchdetailed";
import WebinarPage from "./webinar/webinar";
import SignupasGuest from "./SignupasGuest/SignupasGuest";
import PaymentStatusPage from "./PaymentStatus/PaymentStatusPage";
import SigninAsresearcher from "./SigninAsResearcher/SigninAsresearcher";
import SuggestRP from "./SuggestRP/SuggestRP";

function App() {

  return (
    <div className="App">
       <Router>
          <Navbar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signup/:slug" component={Signup} />
         
          
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/changepassword" component={Changepassword} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/forgot-password/:token" component={ForgotPassword} />
          <Route path="/allblogs" component={BlogsPage} />
          <Route path="/myapplications" component={MyApplications} />
          <Route path="/openprogrammes" exact component={OpenProgrammes} />
          <Route path="/ongoingprogrammes" exact component={Ongoingresearch} />
          <Route path="/webinars" component={WebinarPage} />
          <Route path="/blogsdetailspage/:slug" component={BlogsDetailsPage} />
          <Route
            path="/openprogrammespage/:slug"
            exact
            component={OpenProgrammesPage}
          />
          <Route
            path="/ongoingresearchpage/:slug"
            exact
            component={OngoingresearchPage}
          />
          <Route
            path="/applicationform/:slug"
            exact
            component={ApplicationForm}
          />
          <Route path="/applyasguest/:id" exact component={SignupasGuest} />{" "}
          <Route path="/paymentstatus" exact component={PaymentStatusPage} />
          <Route path="/signinasreasearcher" exact component={SigninAsresearcher} />
          <Route path="/suggestrp" exact component={SuggestRP} />
        </Router>
    
    </div>
  );
}

export default App;


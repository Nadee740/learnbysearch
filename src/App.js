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
import Open from "./test/open";
import BlogsDetailsPage from "./BlogsDetailsPage/BlogsDetailsPage";
import OpenProgrammesPage from "./OpenProgrammesPage/OpenProgrammesPage";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ApplicationForm from "./ApplicationForm/ApplicationForm";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import { SolarSystemLoading } from "react-loadingg";
import Ongoingresearch from "./ongoingresearch/ongoingresearch";
import OngoingresearchPage from "./ongoingresearchdetailed/ongoingresearchdetailed";
import WebinarPage from "./webinar/webinar";

function App() {
  const [user, setUser] = useState(localStorage.getItem("loggedinuserid"));
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  useEffect(async () => {
    // localStorage.clear()
    setisLoading(true);
    const { isLoggedIn: messagee } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    setisLoading(false);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : (
        <Router>
          <Navbar />

          <Route path="/" exact component={LandingPage} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/changepassword" component={Changepassword} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/forgot-password/:token" component={ForgotPassword} />
          <Route path="/allblogs" component={BlogsPage} />
          <Route path="/myapplications" component={MyApplications} />
          <Route path="/openprogrammes" exact component={OpenProgrammes} />
          <Route path="/ongoingprogrammes" exact component={Ongoingresearch} />
          <Route path="/open" component={Open} />
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
        </Router>
      )}
    </div>
  );
}

export default App;
//<Route path="/blogsdetailspage/:id" component={BlogsDetailsPage} />

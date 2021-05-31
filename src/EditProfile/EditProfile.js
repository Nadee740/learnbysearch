import { Link } from "react-router-dom";
import Footer from "../LandingPage/footer/footer";
import "./EditProfile.css";
const EditProfile = () => {
  return (
    <>
      <div className="container-profile">
        <div className="container-profile-col1">
          {/* <img
            src="/images/change.png"
            alt="Edit"
            className="container-profile-img"
          /> */}
        </div>
        <div className="container-profile-col2 container-profile-col1">
          <h2>Edit Profile</h2>
          <div className="form">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />

<input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />

             <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <button>Make Changes</button>
            <Link to="/" className="changeText">
              Change Your Password
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;

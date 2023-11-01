import React from "react";
import Profile from "../Assets/Profile.svg";

function Userprofile() {
  return (
    <div className="profile-wrapper">
        <div className="profile-image">
          <img
            src={Profile}
            alt="User Avatar"
            className="userprofile-icon"
            style={{ width: "64px", height: "64px" }}
          />
        </div>
        <div className="profile-details">
          <div className="profile-name">John Doe</div>
          <div className="profile-email">johndoe@gmail.com</div>
        </div>
      </div>
  );
}

export default Userprofile;

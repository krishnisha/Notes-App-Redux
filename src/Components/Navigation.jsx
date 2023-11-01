import React from "react";
import { NavLink } from "react-router-dom";
import description from "../Assets/description.svg";


function Navigation() {
  return (
    <div className="Nav-links">
      <NavLink className="link-name" to="/">
        <img
          src={description}
          alt="description"
          className="description-icon"
          style={{ width: "32px", height: "32px" }}
        />{" "}
        Notes
      </NavLink>
    </div>
  );
}

export default Navigation;

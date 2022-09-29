import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/demandes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>personne #1</li>
        </NavLink>
        <NavLink to="/demandes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>personne #1</li>
        </NavLink>
        <NavLink to="/demandes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>personne #1</li>
        </NavLink>

         <NavLink to="/demandes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>personne #1</li>
        </NavLink>

        <NavLink to="" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>personne #1</li>
        </NavLink>

      
      </ul>
    </div>
  );
};

export default Navigation;

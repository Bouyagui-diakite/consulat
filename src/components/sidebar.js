import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <h1>PGC</h1>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-dashboard"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/demandes"
              >
                <div className="dropdown">
                <i className="icon fas fa-book"></i>
                <span className="text">Demande de cartes</span>

                </div>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/Demandes-effectues"
              >
                <div className="dropdown">
                <i className="icon fas fa-book"></i>
                <span className="text">Demande effectues</span>

                </div>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/rendez-vous"
              >
                <div className="dropdown">
                <i className="icon fas fa-calendar"></i>
                <span className="text">Prise de rendez-vous</span>

                </div>
              </NavLink>
            </li>
            
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

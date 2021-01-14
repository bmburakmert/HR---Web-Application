import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    const menuItems = {
      Staff: "person",
      Applicants: "folder_shared",
      Positions: "weekend",
      "Position Types": "next_week",
      Permissions: "supervised_user_circle",
    };

    return (
      <nav
        className="container navbar navbar-expand-lg navbar-dark"
        style={{ padding: "16px 0px", borderBottom: "1px solid #9C79E2" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img
          src={require("../images/logo.png")}
          id="logo"
          alt="Logo"
          style={{ height: 32 }}
        />
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{ fontSize: 14 }}>
            {Object.keys(menuItems).map((menuItem) => {
              let iconItem = menuItems[menuItem];
              return (
                <li className="nav-item ml-3" key={menuItem}>
                  <NavLink
                    to={`/${
                      menuItem !== "Position Types"
                        ? menuItem.toLowerCase()
                        : "position-types"
                    }`}
                    key={menuItem}
                    className="nav-link d-flex align-items-center"
                  >
                    <i className="material-icons md-18 pr-2">{iconItem}</i>
                    {menuItem}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a
              className="nav-link d-flex align-items-center p-0 mr-2"
              href="# "
              style={{ color: "#F5ECFE" }}
            >
              <i className="material-icons md-18 pr-2">launch</i>
            </a>
            <a className="nav-link p-0" href="# ">
              <img
                className="rounded-circle"
                src={require("../images/avatar-1.jpg")}
                alt="Profile"
                style={{ height: 36, width: 36 }}
              />
            </a>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;

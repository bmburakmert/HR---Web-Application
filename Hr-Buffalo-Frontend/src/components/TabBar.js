import React from "react";
import FilesTabBar from "./FilesTabBar";
import { NavLink } from "react-router-dom";

class TabBar extends React.Component {
  
  render() {
    const tabItems = {
      Basic: "person",
      Details: "work",
      Attendance: "watch_later",
      Files: "description",
    };
    //console.log(this.props.isEditing);
    const path = this.props.match.url;
    return (
      <nav className="nav mt-4 border-bottom d-flex justify-content-between">
        <div className="d-flex align-items-center pl-0">
          {Object.keys(tabItems).map((tabItem) => {
            let iconItem = tabItems[tabItem];
            return (
              <NavLink
                to={path + "/" + tabItem.toLowerCase()}
                key={tabItem}
                id={tabItem}
                className="nav-link d-flex align-items-center tab_bar"
              >
                <i className="material-icons md-18 pr-2">{iconItem}</i>
                {tabItem}
              </NavLink>
            );
          })}
        </div>
        <div className="pr-3">
          {`/${window.location.pathname}` !== `${path}/Files` ? (
            <div>
            { this.props.isEditing ? 
             (
              <div className="d-flex">
                <button
              type="button"
              className="btn btn-primary d-flex align-items-center"
              style={{ backgroundColor: "#76A9FA", borderColor: "transparent" }}
              onClick={() => this.props.handleDisable()}
            >
              <i className="material-icons pr-1" style={{ fontSize: "18px" }}>
                create
              </i>
              <span
                className="pl-2"
                style={{ color: "#FFF", fontSize: "14px" }}
              >
                Cancel
              </span>
            </button>
            <button
            type="button"
            className="btn btn-primary d-flex ml-3 align-items-center"
            style={{ backgroundColor: "#76A9FA", borderColor: "transparent" }}
            onClick={() => this.props.handleEdit()}
          >
            <i className="material-icons pr-1" style={{ fontSize: "18px" }}>
              create
            </i>
            <span
              className="pl-2"
              style={{ color: "#FFF", fontSize: "14px" }}
            >
              Save
            </span>
          </button>
          </div>
            )
            : (
            <button
              type="button"
              className="btn btn-primary d-flex align-items-center"
              style={{ backgroundColor: "#76A9FA", borderColor: "transparent" }}
              onClick={() => this.props.handleEdit()}
            >
              <i className="material-icons pr-1" style={{ fontSize: "18px" }}>
                create
              </i>
              <span
                className="pl-2"
                style={{ color: "#FFF", fontSize: "14px" }}
              >
                Edit
              </span>
            </button>
            )}
            </div>
          ) : (
            <FilesTabBar />
          )}
        </div>
      </nav>
    );
  }
}

export default TabBar;

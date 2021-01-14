import React, { Component } from "react";

class PermissionsSubNav extends Component {
  render() {
    return (
      <div
        id="sub_nav"
        className="container d-flex justify-content-between"
        style={{ padding: "0  0 104px 0", marginTop: "32px" }}
      >
        <div id="page_title">
          <h2 style={{ color: "#F5ECFE", fontSize: "30px" }}>Permissions</h2>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary d-flex align-items-center"
            style={{ backgroundColor: "#76A9FA", borderColor: "transparent" }}
          >
            <i className="material-icons md-18">security</i>
            <span className="pl-2" style={{ color: "#FFF", fontSize: "14px" }}>
              Access Levels
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default PermissionsSubNav;

import React, { Component } from "react";

class PositionTypesSubNav extends Component {
  render() {
    return (
      <div
        id="sub_nav"
        className="container d-flex justify-content-between"
        style={{ padding: "0  0 104px 0", marginTop: "32px" }}
      >
        <div id="page_title">
          <h2 style={{ color: "#F5ECFE", fontSize: "30px" }}>Position Types</h2>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary d-flex align-items-center"
            style={{ backgroundColor: "#76A9FA", borderColor: "transparent" }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3333 6.99999H1.66666M6.99999 1.66666V12.3333V1.66666Z"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="pl-2" style={{ color: "#FFF", fontSize: "14px" }}>
              New Position Type
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default PositionTypesSubNav;

import React from "react";

class FilesTabBar extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <button
          type="button"
          className="btn btn-primary d-flex align-items-center invisible"
          style={{
            color: "#475569",
            backgroundColor: "#F1F5F9",
            borderColor: "transparent",
          }}
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M-1-1h582v402H-1z" />
            <g>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                d="M1 2a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V2zM11 2a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V2zM1 11.986a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1v-4zM10.986 11.986a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </g>
          </svg>
        </button>
        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mr-2"
          style={{
            color: "#475569",
            backgroundColor: "#F1F5F9",
            borderColor: "transparent",
          }}
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M-1-1h582v402H-1z" />
            <g>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                d="M1 2a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H2a1 1 0 01-1-1V2zM1 8.441a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1zM1 15.017a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1z"
              />
            </g>
          </svg>
        </button>
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
            Add
          </span>
        </button>
      </div>
    );
  }
}

export default FilesTabBar;

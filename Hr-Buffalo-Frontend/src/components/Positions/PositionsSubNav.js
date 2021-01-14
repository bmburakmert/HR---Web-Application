import React from "react";

function PositionsSubNav() {
  return (
    <div
      className="container d-flex justify-content-between"
      style={{ padding: "0  0 104px 0", marginTop: "32px" }}
    >
      <h3 style={{ color: "#F5ECFE" }}>
        Positions
      </h3>
      <button
        type="button"
        className="btn btn-primary d-flex align-items-center"
        style={{ backgroundColor: "#76A9FA", borderColor: "transparent" }}
      >
        <i className="material-icons pr-1" style={{ fontSize: "18px" }}>
          add
        </i>
        <span
          className="pl-2"
          style={{ color: "#FFF", fontSize: "14px" }}
        >
          New Position
        </span>
      </button>
    </div>
  );
}

export default PositionsSubNav;

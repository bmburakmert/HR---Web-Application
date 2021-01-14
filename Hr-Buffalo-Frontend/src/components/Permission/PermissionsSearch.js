import React from "react";
class PermissionsSearch extends React.Component {
  render() {
    return (
      <div
        className="input-group row d-flex justify-content-between"
        style={{
          fontSize: 16,
          color: "#CFD8E3",
        }}
      >
        <div className="input-group mb-2 col-md-11">
          <div className="input-group-prepend">
            <span className="input-group-text bg-transparent">
              <i className="material-icons md-18" style={{ color: "#CFD8E3" }}>
                search
              </i>
            </span>
          </div>
          <input
            className="form-control border-left-0 pl-0"
            id="searchInput"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="input-group mb-2 pl-2 col-md-1 text-nowrap">
          <button
            type="button"
            id="clearFilter"
            className="btn btn-outline-secondary"
            style={{
              color: "#364152",
              backgroundColor: "#F1F5F9",
              border: "1px solid #CFD8E3",
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>
    );
  }
}

export default PermissionsSearch;

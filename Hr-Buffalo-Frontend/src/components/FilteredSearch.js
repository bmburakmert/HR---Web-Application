import React from "react";
import {applicantStatus, locationTypes, positionTypes} from "../firebase/SearchData";

class FilteredSearch extends React.Component {

  render() {
    return (
      <div className="input-group row d-flex justify-content-between" style={{
        fontSize: 16,
        color: "#CFD8E3",
      }} >
        <div className="input-group input-group-merge mb-2 col-md-4">
          <div className="input-group-prepend">
            <span className="input-group-text bg-transparent">
              <i
                className="material-icons md-18"
                style={{ color: "#CFD8E3" }}
              >
                search
          </i></span>
          </div>
          <input className="form-control form-control-prepended border-left-0 pl-0"
            id="searchInput"
            type="text"
            placeholder="Search"
            onInput={this.props.handleFilter}
          />
        </div>
        <div className="input-group mb-2 col-md-2 pl-2">
          <select id="selectLocation" className="custom-select" onChange={this.props.handleFilter}>
            <option defaultValue="loc_0" >Select Location</option>
            {Object.keys(locationTypes).map((locationNumber) => {
              let location = locationTypes[locationNumber];
              return (
                <option defaultValue={locationNumber} key={locationNumber}>{location}</option>
              )
            })}
          </select>
        </div>
        <div className="input-group mb-2 col-md-3 pl-2" >
          <select id="selectPositionType" className="custom-select" onChange={this.props.handleFilter}>
            <option defaultValue="pt_0">Position Type</option>
            {Object.keys(positionTypes).map((positionNumber) => {
              let position = positionTypes[positionNumber];
              return (
                <option defaultValue={positionNumber} key={positionNumber}>{position}</option>
              )
            })}
          </select>
        </div>
        <div className="input-group mb-2 col-md-2 pl-2">
          <select id="selectStatus" className="custom-select" onChange={this.props.handleFilter}>
            <option defaultValue="st_0">Status</option>
            {Object.keys(applicantStatus).map((statusNumber) => {
              let status = applicantStatus[statusNumber];
              return (<option defaultValue={statusNumber} key={statusNumber}>{status}</option>
              )
            })
            }
          </select>
        </div>
        <div className="input-group mb-2 pl-2 col-md-1 text-nowrap">
          <button
            type="button"
            id="clearFilter"
            className="btn btn-secondary"
            style={{ fontSize: 14 }}
            onClick={this.props.handleReset}
          >
            Clear Filter
        </button>
        </div>
      </div>
    );
  }
}

export default FilteredSearch;

import React from "react";
import StaffDataService from "../../services/staff.service";

class TableSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffPositionTypes: [],
      staffLocations: [],
    }
  this.retrieveStaffPositionTypes = this.retrieveStaffPositionTypes.bind(this);
  this.retrieveStaffLocations = this.retrieveStaffLocations.bind(this);
  this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.retrieveStaffPositionTypes();
    this.retrieveStaffLocations();
  }
  retrieveStaffPositionTypes=()=> {
    StaffDataService.getAllPositionTypes()
      .then(response => {
        this.setState({
          staffPositionTypes: response.data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  retrieveStaffLocations=()=> {
    StaffDataService.getAllLocations()
      .then(response => {
        this.setState({
          staffLocations: response.data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    return (
      <div className="card-body">
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
              {this.state.staffLocations.map((location, index) => {
                return (
                  <option defaultValue={location.name} key={index}>{location.name}</option>
                )
              })}
            </select>
          </div>
          <div className="input-group mb-2 col-md-3 pl-2" >
            <select id="selectPositionType" className="custom-select" onChange={this.props.handleFilter}>
              <option defaultValue="pt_0">Position Type</option>
              {this.state.staffPositionTypes.map((type, index) => {
                return (
                  <option defaultValue={type.name} key={index}>{type.name}</option>
                )
              })}
            </select>
          </div>
          <div className="input-group mb-2 col-md-2 pl-2">
            <select id="selectStatus" className="custom-select" onChange={this.props.handleFilter}>
              <option defaultValue="Status">Status</option>
              <option defaultValue="Active" key="0">Active</option>
              <option defaultValue="Passive" key="1">Passive</option>
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
      </div>
    );
  }
}

export default TableSearch;

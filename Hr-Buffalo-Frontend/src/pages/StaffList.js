import React from "react";
import NavBar from "../components/Staff/NavBar";
import TableSearch from "../components/Staff/TableSearch";
import TableContent from "../components/Staff/TableContent";
import TableFooter from "../components/TableFooter";
import Footer from "../components/Footer";

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredItems:[],
      pageOfItems: [],
      selectedLocation: "Select Location",
      selectedPosition: "Position Type",
      selectedStatus: "Status",
      searchInputValue: ""
    };
    this.handleReset = this.handleReset.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.retrieveStaffList = this.retrieveStaffList.bind(this);
    this.changeFiltered = this.changeFiltered.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.retrieveStaffList();
  }

  retrieveStaffList=()=> {
    this.props.retrieveStaffWithPositions();
  }

  handleReset(e) {
    e.preventDefault();
    this.retrieveStaffList();
    this.setState({ selectedLocation: "Select Location" });
    document.getElementById("selectLocation").value = "Select Location";
    this.setState({ selectedPosition: "Position Type" });
    document.getElementById("selectPositionType").value = "Position Type";
    this.setState({ selectedStatus: "Status" });
    document.getElementById("selectStatus").value = "Status";
    this.setState({ searchInputValue: "" });
    document.getElementById("searchInput").value = "";
  }

  handleFilter(e) {
    if (e.target.id === "selectLocation") { this.setState({ selectedLocation: e.target.value }) }
    if (e.target.id === "selectPositionType") { this.setState({ selectedPosition: e.target.value }) }
    if (e.target.id === "selectStatus") { this.setState({ selectedStatus: e.target.value }) }
    if (e.target.id === "searchInput") { this.setState({ searchInputValue: e.target.value }) }

    const inputValue = e.currentTarget.value.toString().toLowerCase();
    const newFilteredItems = this.props.staff.filter(item => {
      const titleSearch = item.name + item.position.roomNumber + item.contactProfile.cellPhone + item.contactProfile.emailAddress;
      return e.target.id === "selectLocation" ?
        (item.position.location.name + item.position.roomNumber + "Select Location").toLowerCase().includes(inputValue) &&
        (item.position.positionType.name + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase()) &&
        ((item.isActive ? "Active" : "Passive") + "Status").toLowerCase().includes(this.state.selectedStatus.toLowerCase()) &&
        (titleSearch).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
        : e.target.id === "selectPositionType" ?
          (item.position.positionType.name + "Position Type").toLowerCase().includes(inputValue) &&
          (item.position.location.name + item.position.roomNumber + "Select Location").toLowerCase().includes(this.state.selectedLocation.toLowerCase()) &&
          ((item.isActive ? "Active" : "Passive") + "Status").toLowerCase().includes(this.state.selectedStatus.toLowerCase()) &&
          (titleSearch).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
          : e.target.id === "selectStatus" ?
            ((item.isActive ? "Active" : "Passive") + "Status").toLowerCase().includes(inputValue) &&
            (item.position.positionType.name + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase()) &&
            (item.position.location.name + item.position.roomNumber + "Select Location").toLowerCase().includes(this.state.selectedLocation.toLowerCase()) &&
            (titleSearch).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
            : e.target.id === "searchInput" ?
              (titleSearch).toLowerCase().includes(inputValue) &&
              ((item.isActive ? "Active" : "Passive") + "Status").toLowerCase().includes(this.state.selectedStatus.toLowerCase()) &&
              (item.position.positionType.name + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase()) &&
              (item.position.location.name + item.position.roomNumber + "Select Location").toLowerCase().includes(this.state.selectedLocation.toLowerCase())
              : "";
    });
    if (newFilteredItems.length === 0) { // The loop to display breaks when there's no match for the items so we need to do this
      newFilteredItems.push({ name:"", id: "", email: "", password: "", position : {role: "", title:"", roomNumber:"", location: {name:""}, positionType:{name:""} }, isActive: "", identity: { imageUrl: "" }, contactProfile:{cellPhone:"", emailAddress:""}});
    }
    this.setState({ filteredItems: newFilteredItems });
    this.changeFiltered(newFilteredItems);
  }

  changeFiltered=(data)=>{
    this.props.onChangeFiltered(data);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {

    let noResultsMessage = (this.props.filtered.map((item, index) => {
      return item.id === "" ? <div key={index}>No results found!</div> : ''
    }));
    return (
      <div className="StaffList">
        <NavBar retrieveStaffList={this.retrieveStaffList.bind(this)}/>
        <main
          className="container p-0 rounded"
          style={{ marginTop: "-75px", backgroundColor: "#FFF" }}
        >
          <div className="card shadow-sm">
            <TableSearch handleFilter={this.handleFilter} handleReset={this.handleReset} />
            <TableContent staff={this.state.pageOfItems} retrieveStaffList={this.retrieveStaffList.bind(this)}/>
            <TableFooter items={this.props.filtered} onChangePage={this.onChangePage} />
            {noResultsMessage}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default StaffList;

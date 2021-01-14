import React from "react";
import FilteredSearch from "../FilteredSearch";
import ApplicantsHeader from "./ApplicantsHeader";
import TableFooter from "../TableFooter";

class ApplicantsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      onLoadItems: [],
      filteredItems: [],
      pageOfItems: [],
      selectedLocation: "Select Location",
      selectedPosition: "Position Type",
      selectedStatus: "Status",
      searchInputValue: ""
    };
    this.handleReset = this.handleReset.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.setState({
      onLoadItems: this.props.applicant,
      filteredItems: this.props.applicant
    });
  }

  
  handleReset(e) {
    e.preventDefault();
    this.setState({ filteredItems: this.state.onLoadItems });
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
    if (e.target.id === "selectLocation"){this.setState({ selectedLocation: e.target.value })}
      if (e.target.id === "selectPositionType"){this.setState({ selectedPosition: e.target.value })}
        if(e.target.id === "selectStatus"){this.setState({ selectedStatus: e.target.value })}
          if(e.target.id === "searchInput"){this.setState({ searchInputValue: e.target.value })}

    const inputValue = e.currentTarget.value.toString().toLowerCase();

    const newFilteredItems = this.state.onLoadItems.filter(item => {
      return e.target.id === "selectLocation" ?
        (item.location + "Select Location").toLowerCase().includes(inputValue) &&
          (item.positionType + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase()) &&
          (item.status + "Status").toLowerCase().includes(this.state.selectedStatus.toLowerCase()) &&
          (item.name.fullName).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
      : e.target.id === "selectPositionType" ?
        (item.positionType + "Position Type").toLowerCase().includes(inputValue) &&
          (item.location + "Select Location").toLowerCase().includes(this.state.selectedLocation.toLowerCase()) &&
          (item.status + "Status").toLowerCase().includes(this.state.selectedStatus.toLowerCase()) &&
          (item.name.fullName).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
      : e.target.id === "selectStatus" ?
        (item.status + "Status").toLowerCase().includes(inputValue) &&
          (item.positionType + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase()) &&
          (item.location + "Select Location").toLowerCase().includes(this.state.selectedLocation.toLowerCase()) &&
          (item.name.fullName).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
      : e.target.id === "searchInput" ?
        (item.name.fullName).toLowerCase().includes(inputValue) &&
          (item.status + "Status").toLowerCase().includes(this.state.selectedStatus.toLowerCase()) &&
          (item.positionType + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase()) &&
          (item.location + "Select Location").toLowerCase().includes(this.state.selectedLocation.toLowerCase())
          : "";
    });
    if (newFilteredItems.length === 0) { // The loop to display breaks when there's no match for the items so we need to do this
      newFilteredItems.push({ id: "", name: { fullName: "" }, positionType: "", location: "", internal: "", status: "" });
    }
    this.setState({ filteredItems: newFilteredItems });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    let noResultsMessage = (this.state.filteredItems.map((item, index) => {
      return item.id === "" ? <div key={index}>No results found!</div> : ''
    }));
  
    return (
      <main
        className="container p-0 rounded"
        style={{ marginTop: "-75px", backgroundColor: "#FFF" }}
      >
        <div className="card shadow-sm">
          <div className="card-body">
            <FilteredSearch handleFilter={this.handleFilter} handleReset={this.handleReset}/>
          </div>
          <table className="table table-responsive-sm">
            <ApplicantsHeader />
            <tbody style={{ fontSize: 14, fontWeight: 500 }}>
              {this.state.pageOfItems.map((item, index) => {
                return (
                  <tr className={`text-left ${item.id === "" ? 'd-none':""}`} key={index}>
                    <td className="align-middle pl-4">
                      <span>{item.name.fullName}</span>
                    </td>
                    <td className="align-middle pl-4">
                      <span>{item.positionType}</span>
                    </td>
                    <td className="align-middle pl-4">
                      <span>{item.location}</span>
                    </td>
                    <td className="align-middle pl-4">
                      <span>{`${item.internal ? "Yes" : "No"}`}</span>
                    </td>
                    <td className="align-middle pl-4">
                      <span
                        className={`badge badge-pill ${
                          item.status === "New Application" ? "badge-gray"
                            : item.status === "Screening" ? "badge-yellow"
                              : item.status === "Interview Scheduled" ? "badge-indigo"
                                : item.status === "Interviewed" ? "badge-blue"
                                  : item.status === "Withdrawn" ? "badge-danger"
                                    : item.status === "Keep on File" ? "badge-orange"
                                      : item.status === "Hiring in Process" ? "badge-teal"
                                        : "badge-primary"}`
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="align-middle pl-4">
                      <button className="btn align-middle">...</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            {noResultsMessage}
            <TableFooter items={this.state.filteredItems} onChangePage={this.onChangePage} />
          </div>
        </div>
      </main>
    );
  }
}

export default ApplicantsContent;

import React from "react";
import PositionTypesSearch from "./PositionTypesSearch";
import PositionTypesHeader from "./PositionTypesHeader";
import TableFooter from "../TableFooter";

  
  class PositionTypesContent extends React.Component {
    constructor() {
      super();
      this.state = {
        onLoadItems: [],
        filteredItems: [],
        pageOfItems: [],
        selectedPosition: "Position Type",
        selectedBudget: "Budget Code",
        searchInputValue: ""
      };
      this.handleReset = this.handleReset.bind(this);
      this.onChangePage = this.onChangePage.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
      this.setState({
        onLoadItems: this.props.position,
        filteredItems: this.props.position
      });
    }
  
    handleReset(e) {
      e.preventDefault();
      this.setState({ filteredItems: this.state.onLoadItems });
      this.setState({ selectedPosition: "Position Type" });
      document.getElementById("selectPositionType").value = "Position Type";
      this.setState({ selectedBudget: "Budget Code" });
      document.getElementById("selectBudget").value = "Budget Code";
      this.setState({ searchInputValue: "" });
      document.getElementById("searchInput").value = "";
    }
  
    handleFilter(e) {
        if (e.target.id === "selectPositionType"){this.setState({ selectedPosition: e.target.value })}
          if(e.target.id === "selectBudget"){this.setState({ selectedBudget: e.target.value })}
            if(e.target.id === "searchInput"){this.setState({ searchInputValue: e.target.value })}
  
      const inputValue = e.currentTarget.value.toString().toLowerCase();
      
      const newFilteredItems = this.state.onLoadItems.filter(item => {
        return e.target.id === "selectPositionType" ?
          (item.positionType + "Position Type").toLowerCase().includes(inputValue) &&
          (item.budgetCode + "Budget Code").toLowerCase().includes(this.state.selectedBudget.toLowerCase()) &&
          (item.title).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
        : e.target.id === "selectBudget" ?
          (item.budgetCode + "Budget Code").toLowerCase().includes(inputValue) &&
          (item.positionType + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase()) &&
          (item.title).toLowerCase().includes(this.state.searchInputValue.toLowerCase())
        : e.target.id === "searchInput" ?
          (item.title).toLowerCase().includes(inputValue) &&
          (item.budgetCode + "Budget Code").toLowerCase().includes(this.state.selectedBudget.toLowerCase()) &&
          (item.positionType + "Position Type").toLowerCase().includes(this.state.selectedPosition.toLowerCase())
        : ""
      });
      if (newFilteredItems.length === 0) { // The loop to display breaks when there's no match for the items so we need to do this
        newFilteredItems.push({ id: "", title:"", positionType: "", budgetCode: "" });
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
          className="container p-0"
          style={{ marginTop: "-75px", backgroundColor: "#FFF" }}
        >
          <div className="card shadow-sm">
            <div className="card-body">
            <PositionTypesSearch handleFilter={this.handleFilter} handleReset={this.handleReset} />
            </div>
            <table className="table table-responsive-sm">
              <PositionTypesHeader />
              <tbody style={{ fontSize: 14, fontWeight: 500 }}>
                {this.state.pageOfItems.map((item,index) => {
                  return (
                    <tr className={`text-left ${item.id === "" ? 'd-none':""}`} key={index}>
                      <td className="align-middle pl-4">
                        <span>{item.title}</span>
                      </td>
                      <td className="align-middle pl-4">
                        <span>{item.positionType}</span>
                      </td>
                      <td className="align-middle pl-4">
                        <span>{item.budgetCode}</span>
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
    
export default PositionTypesContent;

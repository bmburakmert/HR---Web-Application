import React from "react";
import "./App.css";
import { Route, Redirect, Switch} from "react-router-dom";
import StaffList from "./StaffList";
import StaffDetails from "./StaffDetails";
import Applicants from "./Applicants";
import Positions from "./Positions";
import PositionTypes from "./PositionTypes";
import Permissions from "./Permissions";
import NotFound from "./NotFound";
import StaffDataService from "../services/staff.service";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffWithPosition: [],
      filteredItems: [],
    }
  this.retrieveStaffWithPositions = this.retrieveStaffWithPositions.bind(this);
  this.componentDidMount = this.componentDidMount.bind(this);
  this.onChangeFiltered = this.onChangeFiltered.bind(this);
  }

  componentDidMount() {
    this.retrieveStaffWithPositions();
  }

  retrieveStaffWithPositions=()=> {
    StaffDataService.getAll()
      .then(response => {
        this.setState({
          staffWithPosition: response.data,
          filteredItems: response.data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeFiltered(data){
    this.setState({ filteredItems: data });
  }

  render() {

    return (
    <div>
      <Switch>
        <Route exact path="/staff" render={(props) => (
          <StaffList {...props} staff={this.state.staffWithPosition} filtered={this.state.filteredItems}
          onChangeFiltered={this.onChangeFiltered.bind(this)}
          retrieveStaffWithPositions={this.retrieveStaffWithPositions.bind(this)}/>
          )} />
        <Redirect exact to="/staff" from="/"></Redirect>
        <Route exact path="/applicants" component={Applicants} />
        <Route exact path="/positions" component={Positions} />
        <Route exact path="/position-types" component={PositionTypes} />
        <Route exact path="/permissions" component={Permissions} />
        <Route path="/staff/:id" render={(props) => (
          <StaffDetails {...props} staff={this.state.staffWithPosition}/>
          )} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div> 
    );
  }
}
export default App;


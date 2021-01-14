import React from "react";
import "./StaffDetails.css";
import NavBarDetail from "../components/NavBarDetail";
import StatisticCards from "../components/Staff/StatisticCards";
import TabBar from "../components/TabBar";
import Basic from "../components/Basic/Basic";
import Details from "../components/Details/Details";
import Attendence from "../components/Attendance/Attendance";
import Files from "../components/Files/Files";
import Footer from "../components/Footer";
import {Redirect, Switch, Route} from "react-router-dom";
import NotFound from "./NotFound";


class StaffDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isEditing: false,
    };
    this.handleEditInputs = this.handleEditInputs.bind(this);
    this.handleDisableInputs = this.handleDisableInputs.bind(this);
  }

  handleEditInputs() {
    this.setState({ isEditing: true });
  }
  handleDisableInputs() {
    this.setState({ isEditing: false });
  }

  render() {
    const userId = this.props.match.params.id;
    const user = this.props.staff.find((user) => user.id === userId);
    //console.log(user);
    return (
      <div className="StaffDetails">
        <NavBarDetail staffData={user} />
        <main>
          <div className="container" style={{ marginTop: "-75px" }}>
            <StatisticCards staffData={user} />
          </div>
          <div className="container card shadow-sm p-0 mt-3">
            <div className="card-body p-0">
              <TabBar
                match={this.props.match}
                handleEdit={this.handleEditInputs}
                handleDisable={this.handleDisableInputs}
                isEditing={this.state.isEditing}
              />
            </div>
              <div>
                <Switch>
                  <Route
                    exact
                    path={`/staff/${userId}/basic`}
                    render={(props) => (
                      <Basic
                        staffData={user}
                        isEditing={this.state.isEditing}
                        {...props}
                      />
                    )}
                  />
                  <Redirect
                    exact
                    to={`/staff/${userId}/basic`}
                    from="/staff/:id"
                  ></Redirect>
                  <Route
                    exact
                    path={`/staff/${userId}/details`}
                    render={(props) => (
                      <Details 
                        staffData={user}
                        isEditing={this.state.isEditing} 
                        {...props}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={`${this.props.match.url}/attendance`}
                    render={(props) => (
                      <Attendence 
                        contactId={userId} 
                        isEditing={this.state.isEditing}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={`${this.props.match.url}/files`}
                    render={(props) => (
                      <Files 
                        contactId={userId}
                        isEditing={this.state.isEditing} 
                        {...props}
                      />
                    )}
                  />
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
export default StaffDetails;

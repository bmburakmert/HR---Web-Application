import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StaffDataService from "../../services/staff.service";

class TableContent extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.updateStaff = this.updateStaff.bind(this);
    this.terminateOneUser = this.terminateOneUser.bind(this);
    this.updateStaffPosition = this.updateStaffPosition.bind(this);
    this.getCurrentStaff = this.getCurrentStaff.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.handleCancelModal = this.handleCancelModal.bind(this);
    this.getAllVacantPositions = this.getAllVacantPositions.bind(this);

    this.state = {
      vacantPositions:[],
      date: new Date(),
      currentStaff: "",
      currentPosition: ""
    };
    this.baseState = this.state.currentStaff

  }

  handleChange = date => {
    this.setState({
      date: date
    });
  }

  getCurrentStaff(id) {

    const user = this.props.staff.find(user => user.id === id)
        this.setState({
          currentPosition: user.position.title, 
          currentStaff: {
            name: user.name,
            user_id: user.id,
            imageUrl: user.identity.imageUrl || '/image/avatars/avatar-0.png',
            salutation: user.identity.salutation,
            firstName: user.identity.firstName,
            middleName: user.identity.middleName || "", 
            lastName: user.identity.lastName,
            office: user.position.location.name,
            roomNumber: user.position.roomNumber,
            phoneExt: user.position.phoneExtensionension,
            cellPhone: user.contactProfile.cellPhone,
            emailPersonal: user.contactProfile.emailAddress,
            position: user.position.title,
            currentPosition: user.position.title, 
            id: user.id
          }
        });
  }
 
  getAllVacantPositions() {
    StaffDataService.getAllVacantPositions()
      .then(response => {
        this.setState({
          vacantPositions: response.data
        })
      })
  }

  refreshList() {
    this.setState({currentStaff: this.baseState});
  }

  handleCloseModal () {
    window.$('#editStaffModal').modal('hide');
    window.$('#changePositionModal').modal('hide');
    window.$('#terminateStaffModal').modal('hide');
    this.props.retrieveStaffList();
  }
  handleCancelModal(){
    this.setState({currentStaff: this.baseState});
  }

  onChangeInput(e) {
    var currentStaff = { ...this.state.currentStaff };
    currentStaff[e.target.name] = e.target.value;
    this.setState({ currentStaff });
  }

  updateStaff() {
    console.log(this.state.currentStaff.id);
    console.log(this.state.currentStaff);
    StaffDataService.updateOneUser(
      this.state.currentStaff.id,
      this.state.currentStaff
    )
    .then(response => {
      this.handleCloseModal();
    })
      .catch(e => {
        console.log(e);
      });
  }

  
  terminateOneUser() {
    StaffDataService.terminateUser(
      this.state.currentStaff.id,
      this.state.currentStaff
    )
    .then(response => {
      this.handleCloseModal();
      console.log(response.data);
    })
      .catch(e => {
        console.log(e);
      });
  }

  updateStaffPosition() {
    StaffDataService.updateOneUserPosition(
      this.state.currentStaff.id,
      this.state.currentStaff
    )
    .then(response => {
      this.handleCloseModal();
      console.log(response.data);
    })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentStaff } = this.state;
    return (
      <div className="table-responsive-sm">
        <table className="table table-responsive-sm">
          <thead className="thead-light" style={{ fontSize: 12 }}>
            <tr className="align-middle text-left">
              <th className="pl-3" scope="col" colSpan="2">
                TITLE
          </th>
              <th scope="col">LOCATION</th>
              <th scope="col">PHONE</th>
              <th scope="col">EMAIL</th>
              <th scope="col">STATUS</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody style={{ fontSize: 14, fontWeight: 500 }}>
            {this.props.staff &&
              this.props.staff.map((user, index) => {
                return (
                  <tr className={`text-left ${user.id === "" ? 'd-none' : ""}`} key={index}>
                    <td className="align-middle text-center">
                      <img
                        style={{ height: 48, width: 48 }}
                        src={user.identity.imageUrl || '/image/avatars/avatar-0.png'}
                        className="rounded-circle"
                        alt="Profile"
                      />
                    </td>
                    <td className="align-middle">
                      <Link to={"/staff/" + user.id + "/basic"} key={user.id}>
                        <span>{user.name}</span> <br></br>
                        <span
                          style={{ fontSize: 12, color: "#8799B0" }}
                        >
                          {user.position.title}
                        </span>
                      </Link>
                    </td>
                    <td className="align-middle">
                      <span>{user.position.location.name}</span>
                      <br></br>
                      <span style={{ fontSize: 12, color: "#8799B0" }}>
                        {user.position.roomNumber}
                      </span>
                    </td>
                    <td className="align-middle">
                      <span>{user.contactProfile.cellPhone}</span>
                      <br></br>
                      <span style={{ fontSize: 12, color: "#8799B0" }}>
                        {user.position.phoneExtension}
                      </span>
                    </td>
                    <td className="align-middle">
                      <span>{user.contactProfile.emailAddress}</span>
                      <br></br>
                      <span style={{ fontSize: 12, color: "#8799B0" }}>
                        {user.email}
                      </span>
                    </td>
                    <td className="align-middle">
                      <span
                        className={
                          user.isActive
                            ? "badge badge-success"
                            : "badge badge-danger"
                        }
                      >
                        {" "}
                        {user.isActive ? "Active" : "Passive"}{" "}
                      </span>
                    </td>
                    <td className="align-middle">
                      <div className="btn-group dropleft">
                        <button onClick={this.getAllVacantPositions}
                          className="btn align-middle"
                          type="button"
                          data-target={"threeDot" + user.id}
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id={"threeDot" + user.id}
                          onFocus={()=>this.getCurrentStaff(user.id)}
                          key={index}
                        >
                          <span className="material-icons">more_horiz</span>
                        </button>
                        <div className="dropdown-menu">
                          <Link
                            aria-labelledby={"threeDot" + user.id}
                            className="d-flex align-items-center mb-2"
                            to={"/staff/" + currentStaff.id + "/basic"}
                            key={currentStaff.id}
                          >
                            <i className="material-icons md-18 mr-2">visibility</i>
                        View
                      </Link>
                          <Link
                            to=" "
                            type="button"
                            className="d-flex align-items-center mb-2"
                            data-toggle="modal"
                            data-target="#editStaffModal"
                          >
                            <i className="material-icons md-18 mr-2">create</i>
                        Edit
                      </Link>
                          <Link
                            to=" "
                            type="button"
                            className="d-flex align-items-center mb-2"
                            data-toggle="modal"
                            data-target="#changePositionModal"
                          >
                            <i className="material-icons md-18 mr-2">swap_horiz</i>
                        Change Position
                      </Link>
                          <Link
                            to=" "
                            type="button"
                            className="d-flex align-items-center"
                            data-toggle="modal"
                            data-target="#terminateStaffModal"
                          >
                            <i className="material-icons md-18 mr-2">clear</i>
                        Terminate
                      </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {currentStaff && (
          <div>
            <div
              className="modal fade"
              id="editStaffModal"
              data-backdrop="static"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header p-2">
                    <span className="ml-2">
                      <h5>Edit Staff</h5>
                      <h5
                        className="modal-title"
                        id="editStaffModalLabel"
                      >
                        {currentStaff.name}
                      </h5>
                    </span>
                    <button
                      type="button"
                      className="close m-0 pt-0"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={()=>this.handleCancelModal()}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body p-2">
                    <div className="d-flex justify-content-center m-2">
                      <img
                        className="rounded-circle "
                        src={currentStaff.imageUrl}
                        alt="Profile"
                        style={{ height: 72, width: 72 }}
                      />
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="staffSalutation"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Salutation
                              </label>
                      <div className="col-sm-5">
                        <select id="staffSalutation"
                          className="custom-select"
                          name="salutation"
                          value={currentStaff.salutation}
                          onChange={this.onChangeInput}
                          style={{ fontSize: 16, color: "#8799B0" }}
                          required>
                          <option value={currentStaff.salutation} disabled>{currentStaff.salutation}</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Miss">Miss</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Dr.">Dr.</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="staffFirstName"
                        className="col-sm-4 col-form-label text-right"
                      >
                        First Name
                              </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="staffFirstName" name="firstName" value={currentStaff.firstName}
                          onChange={this.onChangeInput} required />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="staffMiddleName"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Middle Name
                              </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="staffMiddleName" name="middleName" value={currentStaff.middleName}
                          onChange={this.onChangeInput} />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="taffLastName"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Last Name
                              </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="staffLastName" name="lastName" value={currentStaff.lastName}
                          onChange={this.onChangeInput} required />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="currentPersonalEmail"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Personal Email
                              </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="currentPersonalEmail" name="emailPersonal" value={currentStaff.emailPersonal} onChange={this.onChangeInput} required />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="staffCellPhone"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Cell Phone
                              </label>
                      <div className="col-sm-7">
                        <input type="tel" className="form-control" id="staffCellPhone" name="cellPhone" value={currentStaff.cellPhone} onChange={this.onChangeInput} required />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer p-2">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={()=>this.handleCancelModal()}
                    >
                      Cancel
                          </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.updateStaff}
                    >
                      Save Staff
                          </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="changePositionModal"
              data-backdrop="static"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header p-2">
                    <span className="ml-2">
                      <h5>Change Position</h5>
                      <h5
                        className="modal-title "
                        id="changePositionModalLabel"
                      >
                        {currentStaff.name}
                      </h5>
                    </span>
                    <button
                      type="button"
                      className="close m-0 pt-0"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body p-2">
                    <form>
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="staffOffice"
                          className="col-sm-4 col-form-label text-right"
                        >
                          Current Position
                              </label>
                        <div className="col-sm-7" >
                          <input
                            className="form-control"
                            id="staffOffice"
                            name="office"
                            type="text"
                            value={this.state.currentPosition}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                      <label
                        htmlFor="staffPosition"
                        className="col-sm-4 col-form-label text-right"
                      >
                        New Position
                              </label>
                      <div className="col-sm-7">
                      <select id="staffPosition" className="form-control" name="position" value={currentStaff.position}
                          onChange={this.onChangeInput}  required>
                          <option value={this.state.currentPosition}>{this.state.currentPosition}</option>
                          {this.state.vacantPositions.map(
                            (vacantPosition, index) => <option key={index} value={vacantPosition.title}>{vacantPosition.title}</option>
                          )}
                        </select>
                      </div>
                    </div>
                    
                      </form>
                  </div>
                  <div className="modal-footer p-2">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={()=>this.handleCancelModal()}
                    >
                      Cancel
                          </button>
                    <button type="button" className="btn btn-primary" onClick={this.updateStaffPosition}>
                      Update Position
                          </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="terminateStaffModal"
              data-backdrop="static"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header p-2">
                    <span className="ml-0">
                      <h5>Terminate</h5>
                      <h5
                        className="modal-title"
                        id="terminateStaffModalLabel"
                      >
                        {currentStaff.name}
                      </h5>
                    </span>
                    <button
                      type="button"
                      className="close m-0 pt-0"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body p-2">
                    <form>
                      <div className="form-group row mb-2">
                        <label
                          htmlFor="terminateReason"
                          className="col-sm-3 col-form-label text-right"
                        >
                          Reason
                              </label>
                        <div className="col-sm-7">
                          <input
                            className="form-control"
                            id="terminateReason"
                            name="reason"
                            type="text"
                            placeholder={"Enter the reason"}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <label
                          className="col-sm-3 col-form-label text-right"
                        >
                          Date
                              </label>
                        <div className="col-sm-7">
                          <DatePicker id={"terminate_" + currentStaff.id}
                            className="form-control rounded-0"
                            dateFormat="yyyy-MM-dd"
                            selected={this.state.date}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                          </button>
                    <button type="button" className="btn btn-primary" onClick={this.terminateOneUser}>
                      Terminate
                          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TableContent;

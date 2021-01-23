import React, { Component } from "react";
import Nav from "../Nav";
import StaffDataService from "../../services/staff.service";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.handleCancelModal = this.handleCancelModal.bind(this);
    this.getAllVacantPositions = this.getAllVacantPositions.bind(this);

    this.state = {
      vacantPositions:[],
      newUser: {
        imgUrl: '/image/avatars/avatar-0.png',
        salutation: '',
        firstName: '',
        middleName: '',
        lastName: '',
        position: '',
        emailPersonal: '',
        cellPhone: ''
      },
      showAlertSuccess: false
    };
    this.baseState = this.state.newUser
  }

  onChangeInput(e) {
    var newUser = { ...this.state.newUser };
    newUser[e.target.name] = e.target.value;
    this.setState({ newUser });
    console.log(e.target.value)
  }

  handleCloseModal() {
    window.$('#newHireModal').modal('hide');
    
  }

  saveUser() {
    // create basic object first
    var userData = {
      salutation: this.state.newUser.salutation,
      firstName: this.state.newUser.firstName,
      middleName: this.state.newUser.middleName,
      lastName: this.state.newUser.lastName,
      position: this.state.newUser.position,
      emailPersonal: this.state.newUser.emailPersonal,
      cellPhone: this.state.newUser.cellPhone,
    };
    // create user basic with basic
    StaffDataService.create(userData)
      .then(response => {
        this.handleCloseModal();
        this.setState({ newUser: this.baseState });
        this.setState({ showAlertSuccess: true });
        setTimeout(() => this.setState({ showAlertSuccess: false }), 5000);
        this.props.retrieveStaffList();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

  }

  handleCloseAlert() {
    this.setState({ showAlertSuccess: false });
  }

  handleCancelModal() {
    this.setState({ newUser: this.baseState });
  }

  getAllVacantPositions() {
    StaffDataService.getAllVacantPositions()
      .then(response => {
        this.setState({
          vacantPositions: response.data
        })
      })
  }


  render() {

    const { newUser, showAlertSuccess } = this.state;

    let alertSuccess = showAlertSuccess === true ?
      <div className="alert alert-success mb-0 pb-1 fade show" role="alert"
        style={{ fontSize: 14 }} >
        <strong>Congratulations!</strong> New user created successfully...
        <button type="button" className="close" onClick={this.handleCloseAlert}>
          <span className="pl-3 align-top" aria-hidden="true">&times;</span>
        </button>
      </div> : '';

    return (
      <header style={{ backgroundColor: "#553C9A" }}>
        <Nav />
        <div
          id="sub_nav"
          className="container d-flex justify-content-between"
          style={{ padding: "0  0 104px 0", marginTop: "32px" }}
        >
          <div id="page_title">
            <h2 style={{ color: "#F5ECFE", fontSize: "30px" }}>Staff List</h2>
          </div>
          {alertSuccess}
          <div>
            <button onClick={this.getAllVacantPositions}
              type="button" data-toggle="modal" data-target="#newHireModal"
              className="btn btn-primary d-flex align-items-center ml-auto"
              style={{ backgroundColor: "#76A9FA", borderColor: "transparent" }}
            >
              <span className="material-icons pl-2">add</span>
              <span className="pl-2" style={{ color: "#FFF", fontSize: "14px" }}>
                New Hire
            </span>
            </button>
          </div>
          {/* New Hire Modal */}
          <div
            className="modal fade"
            id="newHireModal"
            data-backdrop="static"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="newHireModalLabel"
            aria-hidden="true"
          > 
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header p-2">
                  <span className="ml-2">
                    <h5
                      className="modal-title"
                      id="newHireModalLabel"
                    > Add New Staff 
                    </h5>
                  </span>
                  <button
                    type="button"
                    className="close m-0 p-0 pr-2"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={this.handleCancelModal}
                  >
                    <span className="align-top" aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body p-2">
                  <form id="modalForm" onSubmit={e => { e.preventDefault(); this.saveUser() }} >
                    <div className="d-flex justify-content-center m-2">
                      <img
                        className="rounded-circle "
                        src={newUser.imgUrl}
                        alt="Profile"
                        style={{ height: 72, width: 72 }}
                      />
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="userSalutation"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Salutation
                                </label>
                      <div className="col-sm-5">
                        <select id="userSalutation" className="custom-select form-control" name="salutation" value={newUser.salutation} onChange={this.onChangeInput}
                          style={{ fontSize: 16, color: "#8799B0" }}
                          required>
                          <option value="" disabled>-- Select --</option>
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
                        htmlFor="userFirstName"
                        className="col-sm-4 col-form-label text-right"
                      >
                        First Name
                                </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="userFirstName" name="firstName" value={newUser.firstName}
                          onChange={this.onChangeInput} required />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="userMiddleName"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Middle Name
                                </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="userMiddleName" name="middleName" value={newUser.middleName}
                          onChange={this.onChangeInput} />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="userLastName"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Last Name
                                </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="userLastName" name="lastName" value={newUser.lastName}
                          onChange={this.onChangeInput} required />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="userPosition"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Position
                                </label>
                      <div className="col-sm-7">
                        <select id="userPosition" className="form-control" name="position" value={newUser.position}
                          onChange={this.onChangeInput}  required>
                          <option value="" disabled>-- Select --</option>
                          {this.state.vacantPositions.map(
                            (vacantPosition, index) => <option key={index} value={vacantPosition.id}>{vacantPosition.title}</option>
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="personalEmail"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Personal Email
                                </label>
                      <div className="col-sm-7">
                        <input type="text" className="form-control" id="personalEmail" name="emailPersonal" value={newUser.emailPersonal} onChange={this.onChangeInput} required />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label
                        htmlFor="userCellPhone"
                        className="col-sm-4 col-form-label text-right"
                      >
                        Cell Phone
                              </label>
                      <div className="col-sm-7">
                        <input type="tel" className="form-control" id="userCellPhone" name="cellPhone" value={newUser.cellPhone} onChange={this.onChangeInput} required />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer p-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={this.handleCancelModal}
                  >
                    Cancel
                          </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    form="modalForm"
                  >
                    Add New Staff
                          </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;

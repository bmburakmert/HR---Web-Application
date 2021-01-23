import React from "react";

class Basic extends React.Component {

  render() {
    const isEditing = this.props.isEditing;
    const user = this.props.staffData;
    return (
      <div className="pl-3 pr-3">
        <div className="row mt-3 pb-2 border-bottom">
          <div
            className="col-4 text-left"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            <span>Personal Information</span>
          </div>
          <div
            className="col-8 text-left text-muted"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            <div>
              <img
                style={{ height: 72, width: 72 }}
                src={user.identity.imageUrl || "/image/avatars/avatar-0.png"}
                className="rounded-circle"
                alt="Profile"
              />
              <button
                type="button"
                id="imgChangeBtn"
                className="btn btn-outline-secondary ml-3 align-middle d-none"
              >
                Change
            </button>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputTitle">Salutation</label>
                  <select
                    id="inputTitle"
                    className="custom-select"
                    style={{ fontSize: 16 }}
                    disabled={!isEditing}
                  >
                    <option value="0" defaultValue>
                      {user.identity.salutation}
                    </option>
                    <option value="1">Dr.</option>
                    <option value="2">Mr.</option>
                    <option value="3">Mrs.</option>
                    <option value="4">Miss.</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputFirstname">Firstname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstname"
                    defaultValue={user.identity.firstName}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputMiddlename">Middlename</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMiddlename"
                    defaultValue={user.identity.middleName}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="inputLastname">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastname"
                    defaultValue={user.identity.lastName}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3 pb-2 border-bottom">
          <div
            className="col-4 text-left"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            <span>Office Location</span>
          </div>
          <div
            className="col-8 text-left text-muted"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputPosition">Position</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPosition"
                    defaultValue={user.position.title}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPhoneExt">Phone Extention</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        <span className="material-icons">phone_forwarded</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0 pl-0"
                      id="inputPhoneExt"
                      defaultValue={user.position.phoneExtension}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputLocation">Location</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        <span className="material-icons">domain</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0 pl-0"
                      id="inputLocation"
                      defaultValue={user.position.location.name}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputRoom">Room</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        <span className="material-icons">meeting_room</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0 pl-0"
                      id="inputRoom"
                      defaultValue={user.position.roomNumber}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3 pb-2 border-bottom">
          <div
            className="col-4 text-left"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            <span>Contact</span>
          </div>
          <div
            className="col-8 text-left text-muted"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputWorkEmail">Work Email</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        <span className="material-icons">contact_mail</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0 pl-0"
                      id="inputWorkEmail"
                      defaultValue={user.email}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPersonalEmail">Personal Email</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        <span className="material-icons">email</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0 pl-0"
                      id="inputPersonalEmail"
                      defaultValue={user.contactProfile.emailAddress}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCellPhone">Cell Phone</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        <span className="material-icons">phone</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0 pl-0"
                      id="inputCellPhone"
                      defaultValue={user.contactProfile.cellPhone}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputAddress">Home Address</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        <span className="material-icons">location_on</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0 pl-0"
                      id="inputAddress"
                      defaultValue={user.position.location.address}
                      disabled={!isEditing}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        id="changeBtn"
                        className="btn btn-secondary"
                        style={{ fontSize: 16 }}
                      >
                        Change
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Basic;

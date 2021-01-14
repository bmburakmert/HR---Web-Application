import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleChange = (date) => {
    this.setState({
      date: date,
    });
  };

  componentDidMount() {
    var today = new Date();
    const hireDate =
      this.props.staffData.hireDate || this.props.staffData.createdAt || today;
    this.setState({
      date: new Date(hireDate),
    });
  }

  render() {
    const isEditing = this.props.isEditing;
    const detail = this.props.staffData;
    return (
      <div className="pl-3 pr-3">
        <div className="row mt-3 pb-2 border-bottom">
          <div className="col-4 d-flex ">
            <span style={{ fontSize: 18, fontWeight: 500 }}>Employment</span>
          </div>
          <div
            className="col-8 text-left text-muted"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputHireDate">Hire Date</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <div
                        className="input-group-text bg-transparent"
                        id="basic-addon1"
                      >
                        <span className="material-icons">date_range</span>
                      </div>
                    </div>
                    <DatePicker
                      id="inputHireDate"
                      className="form-control border-left-0 rounded-0"
                      dateFormat="yyyy-MM-dd"
                      selected={this.state.date}
                      onChange={this.handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmploymentBasis">Employment Basis</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-right-0"
                      defaultValue={detail.employmentBasis}
                      placeholder="EmploymentBasis"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      id="inputEmploymentBasis"
                      disabled={!isEditing}
                    />
                    <div className="input-group-append border-left-0">
                      <span
                        className="input-group-text bg-white"
                        id="basic-addon2"
                      >
                        %
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputContractWorkDays">
                    Contract Work Days
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-right-0"
                      defaultValue={detail.workDays}
                      placeholder="Work Days"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      id="inputContractWorkDays"
                      disabled={!isEditing}
                    />
                    <div className="input-group-append border-left-0">
                      <span
                        className="input-group-text bg-white"
                        id="basic-addon2"
                      >
                        Days
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputContractWorkMonths">
                    Contract Work Months
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-right-0"
                      defaultValue={detail.workMonth}
                      placeholder="Work Months"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      id="inputContractWorkMonths"
                      disabled={!isEditing}
                    />
                    <div className="input-group-append border-left-0">
                      <span
                        className="input-group-text bg-white"
                        id="basic-addon2"
                      >
                        Months
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="selectEducationLevel">Education Level</label>
                  <div className="input-group mb-3">
                    <select id="selectEducationLevel" className="custom-select" disabled={!isEditing}>
                      <option defaultValue="0">
                        {detail.educationLevel} +30 or more hours
                      </option>
                      <option defaultValue="1">
                        Master's +30 or more hours
                      </option>
                      <option defaultValue="2">
                        Doctor's +30 or more hours
                      </option>
                      <option defaultValue="3">
                        Bachelor's +30 or more hours
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputTeachingExperience">
                    Teaching Experience
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-right-0"
                      defaultValue={detail.experience}
                      placeholder=""
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      id="inputTeachingExperience"
                      disabled={!isEditing}
                    />
                    <div className="input-group-append border-left-0">
                      <span
                        className="input-group-text bg-white"
                        id="basic-addon2"
                      >
                        Years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3 pb-2 border-bottom">
          <div className="col-4 d-flex">
            <span style={{ fontSize: 18, fontWeight: 500 }}>Personal</span>
          </div>
          <div
            className="col-8 text-left text-muted"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputBirthDate">Birth Date</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend border-right-0">
                      <div
                        className="input-group-text bg-transparent"
                        id="basic-addon1"
                      >
                        <span className="material-icons">event</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0"
                      defaultValue={detail.birthDate}
                      placeholder="Birth Date"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="inputBirthDate"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPlaceOfBirth">Place of Birth</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={detail.placeOFBirth}
                      placeholder="Place of Birth"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      id="inputPlaceOfBirth"
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputNativeLanguage">Native Language</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={detail.nativeLanguage}
                      placeholder="Native Language"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      id="inputNativeLanguage"
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputSecondaryLanguage">
                    Secondary Language
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={detail.secondaryLanguage}
                      placeholder="Secondary Language"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      id="inputSecondaryLanguage"
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="selectGender">Gender</label>
                  <div className="input-group mb-3">
                    <select id="selectGender" className="custom-select" disabled={!isEditing}>
                      <option defaultValue="0">{detail.gender}</option>
                      <option defaultValue="1">Male</option>
                      <option defaultValue="2">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="selectCountryOrigin">Country of Origin</label>
                  <div className="input-group mb-3">
                    <select id="selectCountryOrigin" className="custom-select" disabled={!isEditing}>
                      <option defaultValue="0">{detail.countryOrigin}</option>
                      <option defaultValue="1">United States</option>
                      <option defaultValue="2">UK</option>
                      <option defaultValue="3">Japan</option>
                      <option defaultValue="4">China</option>
                      <option defaultValue="5">Greece</option>
                      <option defaultValue="6">Russia</option>
                      <option defaultValue="7">Turkey</option>
                    </select>
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="selectRace">Race</label>
                  <div className="input-group mb-3">
                    <select id="selectRace" className="custom-select" disabled={!isEditing}>
                      <option defaultValue="0">{detail.race}</option>
                      <option defaultValue="1">White</option>
                      <option defaultValue="2">Black</option>
                      <option defaultValue="3">Hispanic</option>
                      <option defaultValue="4">Latino</option>
                      <option defaultValue="5">Asian</option>
                      <option defaultValue="6">Afro-American</option>
                      <option defaultValue="7">Caucasian</option>
                    </select>
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="isHispanic">Hispanic</label>
                  <div className="input-group mb-3">
                    <select id="isHispanic" className="custom-select" disabled={!isEditing}>
                      <option defaultValue="0">
                        {`${detail.isHispanic}` ? "Yes" : "No"}
                      </option>
                      <option defaultValue="1">
                        {`${detail.isHispanic}` ? "No" : "Yes"}
                      </option>
                    </select>
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
export default Details;

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Moment from 'react-moment';

class Employment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    date: new Date(),
  };
};

handleChange = date => {
  this.setState({
    date: date
  });
};

componentDidMount() {
  var today = new Date();
  const hireDate = this.props.staffDetail.hireDate || this.props.staffDetail.createdAt|| today;
  this.setState({
    date: new Date(hireDate)
  });
}

render() {
  const detail = this.props.staffDetail;

    return (
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
                    <DatePicker id="inputHireDate"
                      className="form-control border-left-0 rounded-0"
                      dateFormat="yyyy-MM-dd"
                      selected={this.state.date}
                      onChange={this.handleChange}
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
                  <select id="selectEducationLevel" className="custom-select">
                    <option defaultValue="0">{detail.educationLevel} +30 or more hours</option>
                    <option defaultValue="1">Master's +30 or more hours</option>
                    <option defaultValue="2">Doctor's +30 or more hours</option>
                    <option defaultValue="3">Bachelor's +30 or more hours</option>
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
    );
  }
}

export default Employment;

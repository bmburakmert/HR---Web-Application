import React from "react";


class StatisticCards extends React.Component {
  render() {

    return (
      <div className="card-deck text-muted row">
        <div className="card shadow-sm col-3 p-0 ml-0">
          <div className="card-body">
            <p className="card-text mb-2" style={{ fontSize: 14 }}>
              Annual Salary
            </p>
            <span
              className="font-weight-bold text-dark"
              style={{ fontSize: 32 }}
            >
              
            </span>
          </div>
        </div>
        <div className="card shadow-sm col-2 p-0">
          <div className="card-body">
            <p className="card-text mb-2" style={{ fontSize: 14 }}>
              Employment
            </p>
            <span
              className="font-weight-bold text-dark"
              style={{ fontSize: 32 }}
            >
               %
            </span>
          </div>
        </div>
        <div className="card shadow-sm col-2 p-0">
          <div className="card-body">
            <p className="card-text mb-2" style={{ fontSize: 14 }}>
              Contract
            </p>
            <span
              className="font-weight-bold text-dark"
              style={{ fontSize: 32 }}
            >
              {" "}
            </span>
            <span className="card-text" style={{ fontSize: 24 }}>
              Days
            </span>
          </div>
        </div>
        <div className="card shadow-sm col-2 p-0">
          <div className="card-body">
            <p className="card-text mb-2" style={{ fontSize: 14 }}>
              Contract
            </p>
            <span
              className="font-weight-bold text-dark"
              style={{ fontSize: 32 }}
            >
              {" "}
            </span>
            <span className="card-text" style={{ fontSize: 24 }}>
              Months
            </span>
          </div>
        </div>
        <div className="card shadow-sm col-3 p-0 mr-0">
          <div className="card-body">
            <p className="card-text mb-2" style={{ fontSize: 14 }}>
              Hire Date
            </p>
            <span
              className="font-weight-bold text-dark"
              style={{ fontSize: 32 }}
            >
              
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default StatisticCards;

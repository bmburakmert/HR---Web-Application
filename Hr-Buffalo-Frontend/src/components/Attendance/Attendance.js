import React from "react";
import { Link } from "react-router-dom";

class Attendance extends React.Component {
  render() {
    return (
    <div className="Attendance text-center">
        <h3>Attendance</h3>
        <p>This page will be ready soon...</p>
        <Link to="/staff" > Go To Home Page
        </Link>
    </div>
    )
  }
}

export default Attendance;

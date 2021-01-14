import React from "react";

class ApplicantsHeader extends React.Component {
  render() {
    return (
      <thead className="thead-light" style={{ fontSize: 12 }}>
        <tr className="align-middle text-left">
          <th scope="col" className="pl-4">NAME</th>
          <th scope="col" className="pl-4">APPLIED POSITION</th>
          <th scope="col" className="pl-4">LOCATION</th>
          <th scope="col" className="pl-4">INTERNAL</th>
          <th scope="col" className="pl-4">STATUS</th>
          <th scope="col" className="pl-4"></th>
        </tr>
      </thead>
    );
  }
}

export default ApplicantsHeader;

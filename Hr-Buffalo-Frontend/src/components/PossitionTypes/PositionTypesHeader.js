import React from "react";

class PositionTypesHeader extends React.Component {
  render() {
    return (
      <thead className="thead-light" style={{ fontSize: 12 }}>
        <tr className="align-middle text-left">
          <th scope="col" className="pl-4">NAME</th>
          <th scope="col" className="pl-4">POSITION TYPE</th>
          <th scope="col" className="pl-4">BUDGET CODE</th>
          <th scope="col" className="pl-4"></th>
        </tr>
      </thead>
    );
  }
}

export default PositionTypesHeader;

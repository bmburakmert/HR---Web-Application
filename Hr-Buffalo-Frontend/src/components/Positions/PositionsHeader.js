import React from "react";

class PositionsHeader extends React.Component {
  render() {
    return (
      <thead className="thead-light" style={{ fontSize: 12 }}>
        <tr className="align-middle text-left">
          <th scope="col"  className="pl-4">TITLE</th>
          <th scope="col"  className="pl-4">POSITION TYPE</th>
          <th scope="col"  className="pl-4">LOCATION</th>
          <th scope="col"  className="pl-4">REPORTS TO</th>
          <th scope="col"  className="pl-4">STATUS</th>
          <th scope="col"  className="pl-4"></th>
        </tr>
      </thead>
    );
  }
}

export default PositionsHeader;

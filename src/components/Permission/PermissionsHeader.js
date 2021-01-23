import React from "react";

class PermissionsHeader extends React.Component {
  render() {
    return (
      <thead className="thead-light" style={{ fontSize: 12 }}>
        <tr className="align-middle text-left ">
          <th scope="col">NO</th>
          <th scope="col">PERMISSION</th>
          <th scope="col">ADMIN</th>
          <th scope="col"></th>
        </tr>
      </thead>
    );
  }
}

export default PermissionsHeader;

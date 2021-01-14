import React from "react";

class TableHeader extends React.Component {
  render() {
    return (
      <thead className="thead-light" style={{ fontSize: 12 }}>
        <tr className="align-middle text-left">
          <th className="pl-3" scope="col" colSpan="2">
            TITLE
          </th>
          <th scope="col">LOCATION</th>
          <th scope="col">PHONE</th>
          <th scope="col">EMAIL</th>
          <th scope="col">STATUS</th>
          <th scope="col"></th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

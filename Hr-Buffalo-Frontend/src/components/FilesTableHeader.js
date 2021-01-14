import React from "react";

class FilesTableHeader extends React.Component {
  render() {
    return (
      <thead className="thead-light" style={{ fontSize: 12 }}>
        <tr className="align-middle text-left">
          <th className="pl-3" scope="col" colSpan="2">
            NAME
          </th>
          <th scope="col">CREATED BY</th>
          <th scope="col">CREATED AT</th>
          <th scope="col">SIZE</th>
          <th scope="col"></th>
        </tr>
      </thead>
    );
  }
}

export default FilesTableHeader;

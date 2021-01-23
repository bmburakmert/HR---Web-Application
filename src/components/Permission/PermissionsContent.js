import React from "react";
import PermissionsSearch from "./PermissionsSearch";
import PermissionsHeader from "./PermissionsHeader";
import TableFooter from "../TableFooter";

class PermissionsContent extends React.Component {
  render() {
    return (
      <main
        className="container p-0"
        style={{ marginTop: "-75px", backgroundColor: "#FFF" }}
      >
        <div className="card shadow-sm">
          <div className="card-body">
            <PermissionsSearch />
          </div>
          <table className="table table-responsive-sm">
            <PermissionsHeader />
            <tbody style={{ fontSize: 14, fontWeight: 500 }}>
              <tr className="text-left">
                <td className="align-middle">
                  <span>1</span>
                </td>
                <td className="align-middle">
                  <span>Edit Any Permission</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" defaultChecked />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>2</span>
                </td>
                <td className="align-middle">
                  <span>Edit Any Position</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" defaultChecked />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>3</span>
                </td>
                <td className="align-middle">
                  <span>Edit Any Position Type</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>4</span>
                </td>
                <td className="align-middle">
                  <span>Edit Any Staff Info</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" defaultChecked />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>5</span>
                </td>
                <td className="align-middle">
                  <span>Handle Hiring Process</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>6</span>
                </td>
                <td className="align-middle">
                  <span>View All Applicants</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>7</span>
                </td>
                <td className="align-middle">
                  <span>View All Position Types</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" defaultChecked />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>8</span>
                </td>
                <td className="align-middle">
                  <span>View All Positions</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" defaultChecked />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
              <tr className="text-left">
                <td className="align-middle">
                  <span>9</span>
                </td>
                <td className="align-middle">
                  <span>View All Staff Info</span>
                </td>
                <td className="align-middle">
                  <input type="checkbox" />
                </td>
                <td className="align-middle text-center">
                  <button className="btn align-middle">...</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="card-footer">
            <TableFooter />
          </div>
        </div>
      </main>
    );
  }
}

export default PermissionsContent;

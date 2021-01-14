import React from "react";
import TableSearch from "../../components/Staff/TableSearch";
import FilesTableHeader from "../FilesTableHeader";
import FileDetails from "./FilesDetails";
import firebase from "../../firebase/firebaseConfig";
import TableFooter from "../TableFooter";

class Files extends React.Component {
  constructor(props) {
    super(props);
    this.getFilesData = this.getFilesData.bind(this);
  }
  
  getFilesData() {
    const id = this.props.contactId;
    let staffFiles = "";
    firebase.database().ref("staff-list/" + id ).child("files").on("value", (snap) => {
      staffFiles = snap.val();
    });
    console.log(staffFiles)
    return staffFiles;
  }

  render() {
    
    return (
      <div>
        <div className="card-body">
          <TableSearch />
        </div>
        <table className="table table-responsive-sm">
          <FilesTableHeader information={this.getFilesData()} />
          <FileDetails information={this.getFilesData()} />
        </table>
        <div className="card-footer">
          <TableFooter />
        </div>
      </div>
    );
  }
}

export default Files;

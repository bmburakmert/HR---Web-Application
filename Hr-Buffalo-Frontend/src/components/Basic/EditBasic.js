import React from "react";
import Basic from "./Basic";

class EditBasic extends React.Component {
  
  render() {
    return (
      <div
        className="modal fade"
        id="editBasicModal"
        tabindex="-1"
        role="dialog"
        ariaLabelledby="editBasicModalLabel"
        ariaHidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn btn-secondary"
                dataDismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
            <div className="modal-body">{<Basic />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default  EditBasic;

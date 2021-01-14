import React from "react";

class Personal extends React.Component {
  render() {
    const detail = this.props.staffDetail;
    return (
      <div className="row mt-3 pb-2 border-bottom">
        <div className="col-4 d-flex">
          <span style={{ fontSize: 18, fontWeight: 500 }}>Personal</span>
        </div>
        <div
          className="col-8 text-left text-muted"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputBirthDate">Birth Date</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend border-right-0">
                    <div
                      className="input-group-text bg-transparent"
                      id="basic-addon1"
                    >
                      <span className="material-icons">event</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control border-left-0"
                    defaultValue={detail.birthDate}
                    placeholder="Birth Date"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="inputBirthDate"
                  />
                </div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPlaceOfBirth">Place of Birth</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={detail.placeOFBirth}
                    placeholder="Place of Birth"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    id="inputPlaceOfBirth"
                  />
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="inputNativeLanguage">Native Language</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={detail.nativeLanguage}
                    placeholder="Native Language"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    id="inputNativeLanguage"
                  />
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="inputSecondaryLanguage">
                  Secondary Language
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={detail.secondaryLanguage}
                    placeholder="Secondary Language"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    id="inputSecondaryLanguage"
                  />
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="selectGender">Gender</label>
                <div className="input-group mb-3">
                  <select id="selectGender" className="custom-select">
                    <option defaultValue="0">{detail.gender}</option>
                    <option defaultValue="1">Male</option>
                    <option defaultValue="2">Female</option>
                  </select>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="selectCountryOrigin">Country of Origin</label>
                <div className="input-group mb-3">
                  <select id="selectCountryOrigin" className="custom-select">
                    <option defaultValue="0">{detail.countryOrigin}</option>
                    <option defaultValue="1">United States</option>
                    <option defaultValue="2">UK</option>
                    <option defaultValue="3">Japan</option>
                    <option defaultValue="4">China</option>
                    <option defaultValue="5">Greece</option>
                    <option defaultValue="6">Russia</option>
                    <option defaultValue="7">Turkey</option>
                  </select>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="selectRace">Race</label>
                <div className="input-group mb-3">
                  <select id="selectRace" className="custom-select">
                    <option defaultValue="0">{detail.race}</option>
                    <option defaultValue="1">White</option>
                    <option defaultValue="2">Black</option>
                    <option defaultValue="3">Hispanic</option>
                    <option defaultValue="4">Latino</option>
                    <option defaultValue="5">Asian</option>
                    <option defaultValue="6">Afro-American</option>
                    <option defaultValue="7">Caucasian</option>
                  </select>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="isHispanic">Hispanic</label>
                <div className="input-group mb-3">
                  <select id="isHispanic" className="custom-select">
                    <option defaultValue="0">{`${detail.isHispanic}` ? "Yes" : "No"}</option>
                    <option defaultValue="1">{`${detail.isHispanic}` ? "No" : "Yes"}</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Personal;

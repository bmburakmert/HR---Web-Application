import React from "react";
import Nav from "./Nav";

class NavBarDetail extends React.Component {

  render() {
    const user = this.props.staffData;
    return (
      <header style={{ backgroundColor: "#553C9A" }}>
        <Nav />
        <div
          className="container d-flex justify-content-between"
          style={{ padding: "0  0 104px 0", marginTop: "32px" }}
        >
          <div className="media">
            <img
              src={user.identity.imageUrl || "/image/avatars/avatar-0.png"}
              className="align-self-center rounded-circle"
              alt="avatar"
              style={{
                height: "64px",
                width: "64px",
                border: "3px solid #D6BCFA",
                boxSizing: "border-box",
              }}
            />
            <div className="text-left ml-3">
              <h2
                className="text-light d-flex align-items-center"
                style={{ fontSize: "30px" }}
              >
                {user.name}{" "}
                <span style={{ fontSize: "12px", width: "57px", height: "20px" }}
                  className={`badge badge-pill ml-2 ${user.isActive ? "badge-success" : "badge-danger"}`}
                >
                  {user.isActive ? "Active" : "Passive"}{" "}
                </span>
              </h2>
              <div>
                <p className="d-flex align-items-center"
                  style={{ fontSize: "14px", color: "#F5ECFE" }}
                >
                  <span className="material-icons mr-2">business_center</span>
                  {" "}
                  {user.position.title}
                  <span className="material-icons mr-2 ml-2">business</span>{" "}
                  {user.position.phoneExtension}
                  <span className="material-icons mr-2 ml-4">phone_forwarded</span>{" "}
                  {user.position.roomNumber}
                  <span className="material-icons mr-2 ml-4">mail</span>
                  {user.email}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons" style={{ color: "#F5ECFE" }}>more_horiz</span>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBarDetail;

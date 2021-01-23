import React from "react";
import Nav from "../components/Nav";
import PermissionsSubNav from "../components/Permission/PermissionsSubNav";
import PermissionsContent from "../components/Permission/PermissionsContent";
import Footer from "../components/Footer";


function Permissions() {
  return (
    <div className="Permissions">
      <nav style={{ backgroundColor: "#553C9A" }}>
        <Nav />
        <PermissionsSubNav />
      </nav>
      <PermissionsContent />
      <Footer />
    </div>
  );
}

export default Permissions;

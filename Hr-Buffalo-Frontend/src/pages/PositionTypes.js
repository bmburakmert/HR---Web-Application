import React from "react";
import Nav from "../components/Nav";
import PositionTypesSubNav from "../components/PossitionTypes/PositionTypesSubNav";
import PositionTypesContent from "../components/PossitionTypes/PositionTypesContent";
import Footer from "../components/Footer";
import {positions} from "../firebase/PositionsData";

function PositionTypes() {
  return (
    <div className="PositionTypes">
      <header style={{ backgroundColor: "#553C9A" }}>
        <Nav />
        <PositionTypesSubNav />
      </header>
      <PositionTypesContent position={positions}/>
      <Footer />
    </div>
  );
}

export default PositionTypes;

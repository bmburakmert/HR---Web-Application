import React from "react";
import Nav from "../components/Nav";
import PositionsSubNav from "../components/Positions/PositionsSubNav";
import PositionsContent from "../components/Positions/PositionsContent";
import Footer from "../components/Footer";
import {positions} from "../firebase/PositionsData";

function Positions() {
  return (
    <div className="Positions">
      <header style={{ backgroundColor: "#553C9A" }}>
        <Nav />
        <PositionsSubNav />
      </header>
      <PositionsContent position={positions} />
      <Footer />
    </div>
  );
}

export default Positions;

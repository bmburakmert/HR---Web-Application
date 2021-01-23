import React from "react";
import Nav from "../components/Nav";
import ApplicantsSubNav from "../components/Applicants/ApplicantsSubNav";
import ApplicantsContent from "../components/Applicants/ApplicantsContent";
import Footer from "../components/Footer";
import {applicants} from "../firebase/ApplicantsData";

function Applicants() {
  return (
    <div className="Applicants">
      <header style={{ backgroundColor: "#553C9A" }}>
        <Nav />
        <ApplicantsSubNav />
      </header>
      <ApplicantsContent applicant={applicants} />
      <Footer />
    </div>
  );
}

export default Applicants;

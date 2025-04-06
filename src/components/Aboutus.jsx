import React from "react";
import Sidebar from "./Sidebar";

const Aboutus = () => {
  return (
    <div>
      <div className="container">
        <div className="aboutus-1">
          <Sidebar />
        </div>
        <div className="aboutus-2">
          <h1 className="head">About Us</h1>
          <p>
            Teleport is a travel tech startup that simplifies travel visa
            applications, owned by Tropelet Technologies Private Limited (the
            'Company').
            <br />
            <br />
            Do you love to travel but hate the process of applying for visas? So
            did we. Our platform is fast, easy to use, and provides real-time
            status updates so you can track your application <br />
            <br />
            progress and avoid any stressful surprises. We reduce the time to
            apply for a visa from hours to a few minutes! The Company is a
            private limited company, incorporated in the year 2022, having its
            registered office in Mumbai. The next time you need a visa, give us
            a try: <a href="https://useteleport.com">
              https://useteleport.com
            </a>{" "}
            <br />
            <br />
            <b>Contact Us</b>
            <br />
            <br />
            BHIVE Workspace - No.112, AKR Tech Park, 'B' and, 7th Mile Hosur Rd
            Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

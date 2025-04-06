import React from "react";
import Sidebar from "./Sidebar";

const Contactus = () => {
  return (
    <div>
      <div className="container">
        <div className="contact-1">
          <Sidebar />
        </div>
        <div className="contact-2">
          <h1 className='head'>Contact Us</h1>
          <p>
            You can reach us on WhatsApp us on <b>917892522684</b> or call us on{" "}
            <b>07314852914</b>
            <br />
            <br />
            Address
            <br />
            <br />
            <b>Bengaluru</b>
            <br />
            BHIVE Workspace - No.112, AKR Tech Park, "B" and, 7th Mile Hosur Rd
            Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068
            <br />
            <br />
            <b>Mumbai</b>
            <br />
            Godrej Greenville Park, Lal Bahadur Shastri Marg, Mumbai,
            Maharashtra, 400086
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

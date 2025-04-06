import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Component } from "react";
import Termsandconditions from "./components/Termsandconditions";
import Sidebar from "./components/Sidebar";
import Pricing from "./components/Pricing";
import Privacyandpolicy from "./components/Privacyandpolicy";
import Contactus from "./components/Contactus";
import Blogs from "./components/Blogs";
import Aboutus from "./components/Aboutus";
import Refundcancellationpolicy from "./components/Refundcancellationpolicy";
import Mainpage from "./components/mainpage/Mainpage";
import CountryList from "./components/mainpage/CountryList";
import Countrypage from "./components/Countrypage";

function App() {
  return (
    <>
      <div>
        <Header />
        {/* <Mainpage /> */}
        {/* <Countries /> */}

        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/Terms-and-conditions"
            element={<Termsandconditions />}
          ></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Privacy-policy" element={<Privacyandpolicy />}></Route>
          <Route path="/Contact-Us" element={<Contactus />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/About-Us" element={<Aboutus />}></Route>
          <Route
            path="/Refund-And-cancellation-policy"
            element={<Refundcancellationpolicy />}
          ></Route>
          <Route path="/countryList/:id/:Name" element={<Countrypage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

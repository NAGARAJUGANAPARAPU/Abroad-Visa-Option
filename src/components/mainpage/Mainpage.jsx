import React from "react";
import Banner from "./Banner";
import Visaportal from "./Visaportal";
import Locations from "./Locations";
import Feature from "./Feature";
import Toprated from "./Toprated";
import Expert from "./Expert";
import Destination from "./Destination";
import Country from "./CountryList";

const Mainpage = () => {
  return (
    <div>
      <Banner />
      <Visaportal />
      {/* <Locations /> */}
      <Country />
      <Feature />
      <Toprated />
      <Expert />
      <Destination />
    </div>
  );
};

export default Mainpage;

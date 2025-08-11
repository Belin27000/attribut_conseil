import React from "react";
import "./googleRate.scss";
import LogoGoogle from "@/Assets/Images/google.png";
// import placeDetails from '@/_Services/FetchGoogleMaps.service.js';

const GoogleRate = () => {
  // console.log('google', res.);
  return (
    <div className="Rate">
      <div className="Logo-container">
        <img
          src={LogoGoogle}
          alt=""
          className="Logo"
          width={265}
          height={265}
        />
      </div>
    </div>
  );
};

export default GoogleRate;

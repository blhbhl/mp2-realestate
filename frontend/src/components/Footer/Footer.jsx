import React from "react";
import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to give all people <br />
            the best place for them to live.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Find Us</span>
          <span className="secondaryText">5th Avenue Taguig, Metro Manila</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>About Us</span>
          </div>
          <ScrollToTop 
            smooth top="400" 
            width="25" 
            height="25"
            className="scroll"
            viewBox="0 0 250 250"
            />
        </div>
      </div>
    </div>
  );
};

export default Footer;

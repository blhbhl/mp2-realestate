import React from "react";
import "./Seller.css";

const Seller = () => {
  return (
    <section id="seller" className="se-wrapper">
      <div className="paddings innerWidth flexCenter se-container">
        {/* left side */}
        <div className="se-left">
          <div className="se-image-container">
            <img src="./sale-1.png" alt="image" />
          </div>
          <span className="orangeText"><span>₱</span>190,000
          </span>
          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>
        </div>

        {/* right */}
        <div className="flexColStart se-right se-container">
        <div className="se-image-container">
            <img src="./sale-2.png" alt="image" />
          </div>
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>
        </div>
      </div>





        
    </section>
  );
};

export default Seller;

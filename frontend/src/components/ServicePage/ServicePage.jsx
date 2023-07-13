import React from 'react';
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <section className="service" id="service">
      <div id="services" className="s-wrapper">
        <div className="paddings innerWidth r-container">
          <p className="orangeText">Our Services</p>
          <h2 className="primaryText">Our Main Focus</h2>
          <ul className="service-list">
            <li>
              <a href="/buy-a-home">
                <div className="service-card">
                  <div className="card-icon">
                    <img src="/service-1.png" alt="Service icon" />
                  </div>
                  <h3 className="card-title">
                    Buy a home
                  </h3>
                  <p className="secondaryText">
                    Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                  </p>
                  <a href="/buy-a-home" className="card-link">
                    <span>Find A Home</span>
                  </a>
                </div>
              </a>
            </li>
            <li>
              <a href="/rent-a-home">
                <div className="service-card">
                  <div className="card-icon">
                    <img src="/service-2.png" alt="Service icon" />
                  </div>
                  <h3 className="card-title">
                    Rent a home
                  </h3>
                  <p className="secondaryText">
                    Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                  </p>
                  <a href="/rent-a-home" className="card-link">
                    <span>Find A Home</span>
                  </a>
                </div>
              </a>
            </li>
            <li>
              <a href="/sell-a-home">
                <div className="service-card">
                  <div className="card-icon">
                    <img src="/service-3.png" alt="Service icon" />
                  </div>
                  <h3 className="card-title">
                    Sell a home
                  </h3>
                  <p className="secondaryText">
                    Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                  </p>
                  <a href="/sell-a-home" className="card-link">
                    <span>Find A Home</span>
                  </a>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

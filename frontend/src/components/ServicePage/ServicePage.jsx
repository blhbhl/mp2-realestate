import React from 'react';
import "./ServicePage.css";
import { Link } from 'react-router-dom';

const ServicePage = () => {

  return (
    <section className="service" id="service">
      <div id="services" className="s-wrapper">
        <div className="paddings innerWidth r-container">
          <p className="orangeText">Our Services</p>
          <h2 className="primaryText">Our Main Focus</h2>
          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="/service-1.png" alt="Service icon" />
                </div>
                <h3 className="card-title">
                  <Link to={"/buy-a-home"}>Buy a home</Link>
                </h3>
                <p className="secondaryText">
                  over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
                </p>
                <Link to={"/buy-a-home"} className='card-link'>
                  <span>Find A Home</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="/service-2.png" alt="Service icon" />
                </div>
                <h3 className="card-title">
                  <a href="#">Rent a home</a>
                </h3>
                <p className="secondaryText">
                  over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
                </p>
                <a href="#" className="card-link">
                  <span>Find A Home</span>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="/service-3.png" alt="Service icon" />
                </div>
                <h3 className="card-title">
                  <Link to={"/sell-a-home"}>Sell a home</Link>
                </h3>
                <p className="secondaryText">
                  over 1 million+ homes for sale available on the website, we can match you with a house you will want
                  to call home.
                </p>
                <Link to={"/sell-a-home"} className="card-link">
                  <span>Find A Home</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
};

export default ServicePage;
import React from "react";
import "./ServicePage.css";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <section className="service" id="service">
      <div id="services" className="s-wrapper">
        <div className="paddings innerWidth r-container">
          <p className="orangeText">Our Services</p>
          <h2 className="primaryText">Our Main Focus</h2>
          <div className="grid mx-auto md:grid-cols-2 md:gap-10 grid-cols-1 gap-0">
            <a
              href="/buy-a-home"
              className="transition-all hover:shadow-lg hover:border-b-8 hover:border-b-blue-700 rounded-lg border p-5 flex flex-col justify-center h-fit w-fit items-center md:mx-auto"
            >
              <img className="w-fit" src="/service-1.png" alt="Service icon" />
              <h3 className="card-title">
                <Link to={"/buy-a-home"}>Buy a home</Link>
              </h3>
              <p className="text-center text-slate-600 text-sm pt-4">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
              <Link to={"/buy-a-home"} className="card-link">
                <span>Find A Home</span>
              </Link>
            </a>
            <a
              href="/sell-a-home"
              className="transition-all hover:shadow-lg hover:border-b-8 hover:border-b-blue-700 rounded-lg border p-5 flex flex-col justify-center h-fit w-fit items-center md:mx-auto"
            >
              <div className="">
                <img src="/service-3.png" alt="Service icon" />
              </div>
              <h3 className="card-title">
                <Link to={"/sell-a-home"}>Sell a home</Link>
              </h3>
              <p className="text-center text-slate-600 text-sm pt-4">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
              <Link to={"/sell-a-home"} className="card-link">
                <span>Find A Home</span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

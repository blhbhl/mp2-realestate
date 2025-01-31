import React, { useState } from "react";
import "./Seller.css";

const Seller = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyArea, setPropertyArea] = useState("");
  const [propertyAge, setPropertyAge] = useState("");
  const [additionalProperties, setAdditionalProperties] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the form values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
    console.log("Property Type:", propertyType);
    console.log("Property Area:", propertyArea);
    console.log("Property Age:", propertyAge);
    console.log("Additional Properties:", additionalProperties);
  };

  return (
    <section className="for-sale" id="sale">
      <div id="sale" className="s-wrapper">
        <div className="paddings innerWidth r-container">
          <p className="orangeText">Sell A Home</p>
          <h2 className="primaryText">Valuation Request Form</h2>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                Phone Number:
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>

              <label>
                Address:
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>

              <label htmlFor="propertyType">Property Type:</label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Select property type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>

              <label htmlFor="propertyArea">Property Area (in sqft):</label>
              <input
                type="number"
                id="propertyArea"
                value={propertyArea}
                onChange={(e) => setPropertyArea(e.target.value)}
              />

              <label htmlFor="propertyAge">Property Age:</label>
              <input
                type="number"
                id="propertyAge"
                value={propertyAge}
                onChange={(e) => setPropertyAge(e.target.value)}
              />

              <label className="textarea-label">
                Additional Properties:
                <textarea
                  className="textarea-input"
                  value={additionalProperties}
                  onChange={(e) => setAdditionalProperties(e.target.value)}
                ></textarea>
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seller;

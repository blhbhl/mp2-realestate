import React, { useState } from 'react';
import "./Seller.css";

const Seller = () => {
  const [propertyType, setPropertyType] = useState('');
  const [propertyArea, setPropertyArea] = useState('');
  const [propertyAge, setPropertyAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the form values
    console.log('Property Type:', propertyType);
    console.log('Property Area:', propertyArea);
    console.log('Property Age:', propertyAge);
  };

  return (

    <section className="for-sale" id="sale">
  <div id="sale" className="s-wrapper">
  <div className="paddings innerWidth r-container">
    <p className="orangeText">Sell A Home</p>
    <h2 className="primaryText">Valuation Request Form</h2>
    <div className="form">
    <form onSubmit={handleSubmit}>
      <label htmlFor="propertyType">Property Type:</label>
      <select id="propertyType" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
        <option value="">Select property type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="condo">Condo</option>
      </select>

      <label htmlFor="propertyArea">Property Area (in sqft):</label>
      <input type="number" id="propertyArea" value={propertyArea} onChange={(e) => setPropertyArea(e.target.value)} />

      <label htmlFor="propertyAge">Property Age:</label>
      <input type="number" id="propertyAge" value={propertyAge} onChange={(e) => setPropertyAge(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
    </div>

    </div>
  </div>
</section>
  );
};

export default Seller;

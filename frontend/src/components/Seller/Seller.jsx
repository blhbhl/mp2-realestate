import React, { useState } from "react";
import "./Seller.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "./SellerValidation";

const Seller = () => {

  function uploadImage(file, callback, error) {
    const formData = new FormData();
    formData.append('image', file);
  
    axios.post('http://localhost:3001/upload', formData)
      .then(response => {
        console.log('File uploaded successfully:', response.data);
        callback(response.data)
      })
      .catch(e => {
        console.error('Error uploading file:', e);
        error(e);
      });
  } 


  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    propertyType: "",
    propertyArea: "",
    propertyAge: "",
    additionalProperties: "",
    image: null // Add image property to the state
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    if (e.target.name === "image") {
      // If the input field is an image, access the file using e.target.files[0]
      setValues(prev => ({...prev, [e.target.name]: e.target.files[0]}));
    } else {
      setValues(prev => ({...prev, [e.target.name]: e.target.value}));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const err = Validation(values);
    setErrors(err);
    if (
      err.name === "" &&
      err.email === "" &&
      err.phoneNumber === "" &&
      err.address === "" &&
      err.propertyType === "" &&
      err.propertyArea === "" &&
      err.propertyAge === ""
    ) {
      // const formData = new FormData();
      // formData.append("image", values.image); // Append the image to the form data

      // // Append other form values to the form data
      // for (const key in values) {
      //   if (key !== "image") {
      //     formData.append(key, values[key]);
      //   }
      // }
      const file = event.target;

      console.log(values.image)

      uploadImage(values.image, (imageUploadResult) => {
        console.log('image upload result', imageUploadResult);
        const valuesToSendToBackend = {
          ...values,
          image: imageUploadResult.filename
        }

        axios
          .post("http://localhost:3001/sell-a-home", valuesToSendToBackend)
          .then((response) => {
            if (response.data === "Failed") {
              navigate("/");
              alert("Submitted successfully!");
            } else {
              alert("Unable to submit the form!");
            }
          })
          .catch((error) => {
            console.error("Error inserting seller: ", error);
          });
      }, err => {
        console.error(err)
      })

    }
  };

  return (
    <section className="for-sale" id="sale">
      <div id="sale" className="s-wrapper">
        <div className="paddings innercd Width r-container">
          <p className="orangeText p-marg">Sell A Home</p>
          <h2 className="primaryText">Valuation Request Form</h2>

          <div className="form">
            <form onSubmit={handleSubmit} autoComplete="on">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleInput}
                placeholder="Enter FullName"
              />
              {errors.name && <span className="span-red">{errors.name}</span>}

              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="Enter Email"
              />
              {errors.email && <span className="span-red">{errors.email}</span>}

              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleInput}
                placeholder="Enter Phone Number"
              />
              {errors.phoneNumber && (
                <span className="span-red">{errors.phoneNumber}</span>
              )}

              <label>Address:</label>
              <input
                type="text"
                name="address"
                onChange={handleInput}
                placeholder="Enter Address"
              />
              {errors.address && (
                <span className="span-red">{errors.address}</span>
              )}

              <label htmlFor="propertyType">Property Type:</label>
              <select
                id="propertyType"
                name="propertyType"
                onChange={handleInput}
              >
                <option value="">Select property type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>
              {errors.propertyType && (
                <span className="span-red">{errors.propertyType}</span>
              )}

              <label htmlFor="propertyArea">Property Area (in sqft):</label>
              <input
                type="number"
                name="propertyArea"
                id="propertyArea"
                onChange={handleInput}
                placeholder="Enter Property Area"
              />
              {errors.propertyArea && (
                <span className="span-red">{errors.propertyArea}</span>
              )}

              <label htmlFor="propertyAge">Property Age:</label>
              <input
                type="number"
                name="propertyAge"
                id="propertyAge"
                onChange={handleInput}
                placeholder="Enter Property Age"
              />

              <label className="textarea-label">
                Additional Properties:
              </label>
              <textarea
                className="textarea-input"
                name="additionalProperties"
                onChange={handleInput}
                placeholder="Enter Additional Properties"
              ></textarea>

              <label>Image:</label>
              <input
                type="file"
                name="image"
                onChange={handleInput}
                accept="image/*"
              />

              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seller;

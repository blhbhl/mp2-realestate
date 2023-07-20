import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./RegisterValidation";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if(err.name === "" && err.email === "" && err.password === "") {
      axios.post('http://localhost:3001/register', values)
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log(err));
    }
  };



  return (
    <div className="formBody">
      <Link to={"/"}>
      <button className='home-button button'>Go Back Home</button>
      </Link>
      <h2>Register Here</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          placeholder="Enter Fullname"
        />
        {errors.name && <span className="span-red">{errors.name}</span>}
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleInput}
          placeholder="Enter Email"
        />
        {errors.email && <span className="span-red">{errors.email}</span>}
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInput}
          placeholder="Enter password"
        />
        {errors.password && <span className="span-red">{errors.password}</span>}
        
        <button type="submit" className="button">
          Register
        </button>
        <p className="register-p">
          Already have an account? Login{" "}
          <Link to="/login" className="plink">
            here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;

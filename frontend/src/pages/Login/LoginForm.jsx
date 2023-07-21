import React, { useState } from 'react';
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import Validation from './LoginValidation';
import axios from 'axios';
import { BiShow, BiHide } from "react-icons/bi"


const LoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if(err.email === "" && err.password === "") {
      axios.post('http://localhost:3001/login', values)
      .then(res => {
        if(res.data.Status === "Success") {
          navigate('/');
        } else {
            alert(res.data.Message);
        }
      })
      .catch(err => console.log(err));
    }


  };

  return (
    <div className='formBody'>
      <Link to={"/"}>
      <button className='home-button button'>Go Back Home</button>
      </Link>
      <h2>Login Here</h2>
      <form onSubmit={handleSubmit}  className='login-form'>
        <label htmlFor='email'> Email:</label>
          <input
            type="email"
            name='email'
            onChange={handleInput}
            placeholder='Enter email'
          />
          {errors.email && <span className='span-red'>{errors.email}</span>}
        <label htmlFor='password'>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            onChange={handleInput}
            placeholder='Enter password'
          />
          {showPassword ? (
            <BiHide onClick={handleTogglePassword} className='eye-icon'/>
          ): (
            <BiShow onClick={handleTogglePassword} className='eye-icon'/>
          )}  
          
          {errors.password && <span className='span-red'>{errors.password}</span>}   
        <button className="button" type="submit" >Login</button>
        <p className='login-p'>Don't have an account yet? Register <Link to="/register"  className='p-link'>here</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
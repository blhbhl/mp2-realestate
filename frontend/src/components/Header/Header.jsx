import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import LoginForm from "../../pages/Login/LoginForm";
import axios from "axios";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(res => {
        if(res.data.Status ==="Success") {
          setAuth(true);
        } else {
          
        }
    })
  }, [])

    const handleLogout = () => {
      axios.get('http://localhost:3001/logout')
      .then(res => {
        if(res.data.Status === "Success") {
          location.reload(true);
          setAuth(false);
        } else {
          alert("Error");
        }
      }) .catch(err => console.log(err));
    }


  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
        <img src="./logo.png" alt="logo" width={100} />
        </Link>
        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies">Residencies</a>
            <a href="#services">Services</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            {
              auth ?
              <button className="button" onClick={handleLogout}>Logout</button>
              :
              <Link to="/login">
              <button className="button" onClick={LoginForm}>Login</button>
              </Link>
            }
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
import React from "react";
import './header.css'
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
const Header = () => {
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav">
            <ul className="flex">
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i>Sign In
            </button>
          </div>
          <div className="toggle">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

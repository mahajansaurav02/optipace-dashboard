import React from "react";
import "./Navbar.css";
import { LuBellDot } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <span className="menu-icon">&#9776;</span> 
        </button>
        <div className="logo">Logo</div>
      </div>

      <div className="navbar-middle">
      <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />
        
      </div>

      <div className="navbar-right">
        <div className="icon notification-icon"><LuBellDot /></div>
        <div className="icon help-icon"><IoMdHelpCircleOutline />
        </div>
        <div className="profile-icon">JA</div>
      </div>
    </div>
  );
};

export default Navbar;

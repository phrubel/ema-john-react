import React from "react";
import { Link } from "react-router-dom";
// For Logo Import
import logo from "../../images/logo.png";
// For Css File Import
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link> <br/>
        <input className="input" type="text" placeholder={"Serach Your Choise"}/>
        
      </nav>
    </div>
  );
};

export default Header;

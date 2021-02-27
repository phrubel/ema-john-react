import React from "react";
// For Logo Import
import logo from "../../images/logo.png";
// For Css File Import
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a> <br/>
        <input className="input" type="text" placeholder={"Serach Your Choise"}/>
        
      </nav>
    </div>
  );
};

export default Header;

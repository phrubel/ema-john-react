import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
// For Logo Import
import logo from "../../images/logo.png";
// For Css File Import
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link> 
        <button onClick={()=>setLoggedInUser({})}>Sign Out</button>
        <br/>
        <input className="input" type="text" placeholder={"Serach Your Choise"}/>
        
      </nav>
    </div>
  );
};

export default Header;

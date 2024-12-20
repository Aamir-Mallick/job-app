import React from "react";
import "./header.css";
import logo from "../../assets/techm_logo.png";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        {" "}
        <img src={logo} alt="logo" />{" "}
      </div>
      <div className="header-menu">
        <p className="item">Life in tech</p>
        <p className="item">get Started</p>
        <p className="item">alumni</p>
        <p className="item">contact us</p>
        <Button variant="outlined">sign up/login</Button>
      </div>
    </div>
  );
};

export default Header;

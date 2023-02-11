import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>ECO</h1>
      <div className="main">
        <div className="info">
          <p>
            1 million employees in 96 countries more committed to their company!
          </p>
          <p>Squadeasy France 157 boulevard Mac Donald 75019 Paris</p>
          <p>Available on Play Store</p>
        </div>
        <div className="support">
          <ul>
            <li>Join Us</li>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Box.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import bga from "../../images/redbg.jpg";

const Box = () => {
  return (
    <div className="box">
      <p>
        We still have a lot of things to tell you. We can't put everything on
        the site. And then you have inevitably many questions to ask us.
      </p>
      <h1>Let's Connect to make this world a better place !</h1>
      <div className="h_line"></div>

      <div className="abc"></div>

      <div className="parallel">
        <div className="inner">
          <div className="input">
            <h1>Subscribe for daily updates... </h1>

            <div className="form">
              <input
                className="email"
                type="email"
                placeholder="Enter your email here"
              />
            </div>

            <button className="btn"> Submit</button>
          </div>
        </div>
      </div>

      <dic className="abc"></dic>
    </div>
  );
};

export default Box;

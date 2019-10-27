import React from "react";
import "./Banner.css";

const Banner = () => (
    <div className="banner text-center d-flex align-items-center justify-content-center">
        <div>
          <h2 className ="title">Seinfeld Clicky Game</h2>
          <p className="m-0">Click on a character in Seinfeld to earn points, but don't click on a character more than once!</p>
        </div>
    </div>
  );
  
  export default Banner;
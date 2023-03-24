import React from "react";
import "./Explore.css";

//Places
import Places from "./Places/Places";

export default function Explore() {
  return (
    <div className="explore">
      <div className="explore-content">
        <div className="explore-image">
          <img src="./image/Group 313.png" alt="" />
        </div>
        <h3 className="explore-title">Explore Destinations & Activities</h3>
      </div>
      <Places></Places>
      <button className="explore-btn">View More</button>
    </div>
  );
}

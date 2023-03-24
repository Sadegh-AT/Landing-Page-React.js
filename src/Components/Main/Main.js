import React from "react";
import "./Main.css";

// Boxes
import Boxes from "./Boxes/Boxes";

// Explore
import Explore from "./Explore/Explore";

export default function Main() {
  return (
    <div>
      <div className="container">
        <Boxes></Boxes>
        <Explore></Explore>
      </div>
    </div>
  );
}

import React from "react";
import "./Main.css";

// Boxes
import Boxes from "./Boxes/Boxes";

// Explore
import Explore from "./Explore/Explore";

// Newsletter
import Newsletter from "./Newsletter/Newsletter";

export default function Main() {
  return (
    <main>
      <div className="container">
        <Boxes></Boxes>
        <Explore></Explore>
        <Newsletter></Newsletter>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}

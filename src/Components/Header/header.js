import React from "react";
import "./Header.css";

// Navbar
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Navbar></Navbar>
      </div>
    </div>
  );
}

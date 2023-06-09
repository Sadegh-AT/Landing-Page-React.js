import React from "react";
import "./Header.css";

// Navbar
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Navbar></Navbar>
        <div className="haeder-content">
          <h1 className="header-title">Find Yourself Outside.</h1>
          <h4 className="header-text">
            Book unique camping experiences on over 300,000 campsites, cabins,
            RV parks, public parks and more.
          </h4>
          <button className="header-btn">Discover</button>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import "./Header.css";

// Navbar
import navbar from "./Navbar/navbar";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <navbar></navbar>
      </div>
    </div>
  );
}

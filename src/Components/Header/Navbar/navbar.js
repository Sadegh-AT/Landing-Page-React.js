import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nabvbar">
      <div className="menu-div">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <g transform="translate(0 -0.266)">
              <circle
                cx="25"
                cy="25"
                r="25"
                transform="translate(0 0.266)"
                fill="#e76f51"
              />
              <path
                d="M18.962-15.292a4.18,4.18,0,0,1-.3,1.237A3.231,3.231,0,0,1,17.951-13a3.642,3.642,0,0,1-1.139.756,5.089,5.089,0,0,1-1.6.373,7.131,7.131,0,0,1-1.757-.059q-.854-.137-1.7-.314t-1.678-.324A6.871,6.871,0,0,0,8.4-12.661a5.757,5.757,0,0,0-1.394.294,3.813,3.813,0,0,0-1.217.677,3.266,3.266,0,0,0-.854,1.119,3.674,3.674,0,0,0-.324,1.6,3.04,3.04,0,0,0,.236,1.227,4.13,4.13,0,0,0,.54.923,3.008,3.008,0,0,0,.579.579q.275.2.353.177a6.332,6.332,0,0,1-2.748.2A4.347,4.347,0,0,1,1.53-6.762,4.028,4.028,0,0,1,.313-8.46a4.731,4.731,0,0,1-.275-2.2,5.461,5.461,0,0,1,.638-2.12,5.239,5.239,0,0,1,1.355-1.6,6.385,6.385,0,0,1,1.953-1.031,8.462,8.462,0,0,1,2.434-.412,10.11,10.11,0,0,1,2.365.2q1.148.236,2.248.55t2.13.6a10.79,10.79,0,0,0,2.022.363,5.8,5.8,0,0,0,1.934-.167A4.707,4.707,0,0,0,18.962-15.292ZM7.93-9.343q.039-.118.147-.471a3.866,3.866,0,0,0,.147-.756,2.423,2.423,0,0,0-.049-.785.807.807,0,0,0-.422-.559q.393.02.471.02h.51a4.481,4.481,0,0,1,2.13.53,3.007,3.007,0,0,1,1.129,1.129,2.883,2.883,0,0,1,.353,1.384,3.964,3.964,0,0,1-.2,1.3L9.971-1.118Q9.932-1,9.824-.647a3.866,3.866,0,0,0-.147.756,2.423,2.423,0,0,0,.049.785.807.807,0,0,0,.422.559q-.393-.02-.471-.02h-.51A4.481,4.481,0,0,1,7.037.9,3.007,3.007,0,0,1,5.908-.225a2.883,2.883,0,0,1-.353-1.384,3.964,3.964,0,0,1,.2-1.3Z"
                transform="translate(15.989 32.095)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <ul className="menu">
          <li className="active">
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0">Destination</a>
          </li>
          <li>
            <a href="#0">Near me</a>
          </li>
          <li>
            <a href="#0">Events</a>
          </li>
          <li>
            <a href="#0">Blog</a>
          </li>
          <li>
            <a href="#0">Gallery </a>
          </li>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-btns">
        <a href="#d">Sign up</a>
        <a href="#d" className="active">
          Sign in
        </a>
      </div>
      <div className="hamb-menu">
        <div>
          <img src="./image/menu.png" alt="" />
        </div>
      </div>
    </div>
  );
}

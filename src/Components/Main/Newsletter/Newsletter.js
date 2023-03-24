import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h4 className="newsletter-title">Let's Stay in Touch</h4>
        <p className="newsletter-text">
          Get travel planning ideas, helpful tips, and stories from our visitors
          delivered right to your inbox.
        </p>
        <div className="newsletter-input">
          <input placeholder="Email" type="text" />
          <div className="send-btn">
            <svg
              id="Group_236"
              data-name="Group 236"
              xmlns="http://www.w3.org/2000/svg"
              width="24.162"
              height="18.23"
              viewBox="0 0 24.162 18.23"
            >
              <path
                id="Path_909"
                data-name="Path 909"
                d="M9.778,15.82,6.954,17.7a.55.55,0,0,1-.816-.439V13.121l11.546-8.66L3.88,11.8.3,9.356A.748.748,0,0,1,.491,8.039L23.709-.37c.314-.126.565.251.377.565L13.606,17.514a.773.773,0,0,1-1.067.188Z"
                transform="translate(0.012 0.395)"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="newsletter-image">
        <img src="./image/tent.png" alt="" />
      </div>
      <div className="newsletter-shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="967.668"
          height="1000.568"
          viewBox="0 0 967.668 1000.568"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.102"
              x2="1.115"
              y1="0.459"
              y2="0.475"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#ffd2c6"></stop>
              <stop offset="1" stopColor="#fff"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#linear-gradient)"
            d="M519.044 1000.568c286.66 0 653.871-523.406 308.75-523.406S805.7 0 519.044 0 0 223.985 0 500.284s232.384 500.284 519.044 500.284z"
            data-name="Path 954"
          ></path>
        </svg>
      </div>
    </div>
  );
}

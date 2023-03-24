import React from "react";
import "./BoxItem.css";

export default function BoxItem(props, children) {
  let { title, text, logo } = props;
  return (
    <div className="box-body">
      <div className="box-logo">
        <img src={logo} alt="" />
      </div>
      <div className="box-content">
        <h6 className="box-title">{title}</h6>
        <h6 className="box-text">{text}</h6>
      </div>
    </div>
  );
}

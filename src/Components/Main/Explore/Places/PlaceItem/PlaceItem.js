import React from "react";
import "./PlaceItem.css";

export default function PlaceItem(props) {
  let { image, price, title, text } = props;
  return (
    <div className="place-body">
      <div className="place-cover">
        <div className="place-like"></div>
        <div className="place-image">
          <img src={image} alt="" />
        </div>
        <div className="place-price">${price}/night</div>
      </div>
      <div className="place-content">
        <h5 className="place-title">{title}</h5>
        <p className="place-text">{text}</p>
        <button className="place-btn">Read More</button>
      </div>
    </div>
  );
}

PlaceItem.defaultProps = {
  image: "./image/no-photo.png",
};

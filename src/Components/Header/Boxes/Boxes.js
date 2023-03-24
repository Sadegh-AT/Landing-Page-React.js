import React from "react";
import "./Boxes.css";

//Box Item
import BoxItem from "./BoxItem/BoxItem";

let arg = [
  {
    id: 0,
    title: "Camping & Day Use",
    text: "Return to your favorite spot or discover a new one that’s right for you.",
    logo: "./image/Group 20s3.png",
  },
  {
    id: 1,
    title: "Tours & Tickets",
    text: "Return to your favorite spot or discover a new one that’s right for you.",
    logo: "./image/Group s203.png",
  },
  {
    id: 2,
    title: "Permits",
    text: "Return to your favorite spot or discover a new one that’s right for you.",
    logo: "./image/Group 203.png",
  },
  {
    id: 3,
    title: "Recreation Activities",
    text: "Return to your favorite spot or discover a new one that’s right for you.",
    logo: "./image/fishing.png",
  },
];

export default function Boxes() {
  return (
    <div className="boxes">
      <BoxItem {...arg[0]}></BoxItem>
      <BoxItem {...arg[1]}></BoxItem>
      <BoxItem {...arg[2]}></BoxItem>
      <BoxItem {...arg[3]}></BoxItem>
    </div>
  );
}

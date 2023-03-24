import React from "react";
import "./Places.css";

// Place Item
import PlaceItem from "./PlaceItem/PlaceItem";

export default function Places() {
  let array = [
    {
      id: 0,
      image: "./image/image1.jpg",
      price: 36,
      title: "Trickle Creek Ranch",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 1,
      image: "./image/image2.jpg",
      price: 36,
      title: "Dragonfly Tiny Cabin",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 2,
      image: "./image/image3.jpg",
      price: 36,
      title: "Tiny Cabin in the mountains",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 3,
      image: "./image/image4.jpg",
      price: 36,
      title: "The Stuga",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 4,
      image: "./image/image5.jpg",
      price: 36,
      title: "Luxury Tiny Beach Cabin",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 5,
      image: "./image/image6.jpg",
      price: 36,
      title: "The Summit Cabin",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 6,
      image: "./image/image7.jpg",
      price: 36,
      title: "Kindred Spirits Cabin",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 7,
      image: "./image/image8.jpg",
      price: 36,
      title: "The Hermitage Cabin",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 8,
      image: "./image/image9.jpg",
      price: 36,
      title: "Red Lifeguard Stand",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 9,
      image: "./image/image10.jpg",
      price: 36,
      title: "The Tree House",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 10,
      image: "./image/image11.jpg",
      price: 36,
      title: "Barrier island elevated tent",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
    {
      id: 11,
      image: "./image/image12.jpg",
      price: 36,
      title: "Ninovan on the Shore",
      text: "Book unique camping experiences on over 300,000 campsites.",
    },
  ];
  return (
    <div className="places">
      <PlaceItem {...array[0]}></PlaceItem>
      <PlaceItem {...array[1]}></PlaceItem>
      <PlaceItem {...array[2]}></PlaceItem>
      <PlaceItem {...array[3]}></PlaceItem>
      <PlaceItem {...array[4]}></PlaceItem>
      <PlaceItem {...array[5]}></PlaceItem>
      <PlaceItem {...array[6]}></PlaceItem>
      <PlaceItem {...array[7]}></PlaceItem>
      <PlaceItem {...array[8]}></PlaceItem>
      <PlaceItem {...array[9]}></PlaceItem>
      <PlaceItem {...array[10]}></PlaceItem>
      <PlaceItem {...array[11]}></PlaceItem>
    </div>
  );
}

import React from 'react';
import './css/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="text">Welcome to my calculator!</h1>
      <p className="home-text">
        This is a small project that give you the ability to do simple calculations.
        <br />
        You also can get a random Quote in the Quote tab.
      </p>
    </div>
  );
}

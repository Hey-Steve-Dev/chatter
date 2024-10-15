import React from "react";
import { Link } from "react-router-dom";

import backgroundImage from "./images/background-1.webp";

const Home = () => {
  console.log(backgroundImage);

  const divStyle = {
    position: "relative", // Position relative to handle absolute positioning inside
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    position: "absolute", // Positioned relative to parent div
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black overlay with 50% transparency (adjust as needed)
    zIndex: 1, // Ensure the overlay is above the background
  };

  const contentStyle = {
    position: "relative", // Relative to show above the overlay
    zIndex: 2, // Ensure content is above the overlay
    color: "#fff", // Example content styling
    textAlign: "center",
    paddingTop: "20vh", // Vertically center content
  };

  return (
    <div style={divStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1>Welcome to News Chatter</h1>
        <h2>Find and discuss news.</h2>
        <p>
          News Chatter lets you have one on one conversation about news topics
          from around the world.
        </p>
        <div className="homepage-call-to-action">
          <div className="how-it-works">
            <h2>How It Works</h2>
            <p>Learn how News Chatter works.</p>
            <Link to="/about">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="find-new">
            <h2>Conversations</h2>
            <p>Find an open conversation or start your own.</p>
            <Link to="/conversations">
              <button>Get Started</button>
            </Link>
          </div>
          <div className="conversations">
            <h2>Search News</h2>
            <p>Find News Stories and open discussions.</p>
            <Link to="/news-search">
              <button>Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

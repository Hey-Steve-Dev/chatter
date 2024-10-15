import React from "react";

import backgroundImage from "./images/background-2.webp";

const About = () => {
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
        <p>Find and discuss news</p>
        <div className="homepage-call-to-action">
          <div className="how-it-works">
            <h2>Find a news story you want to discuss.</h2>
            <p>
              You can choose from news stories on the feed or select someone who
              wants to discuss a news story.
            </p>
          </div>
          <div className="find-new">
            <h2>Set Options</h2>
            <p>
              When you open a discussion you can set the discussion to be public
              or private. This can only be changed if both parties agree.
            </p>
          </div>
          <div className="conversations">
            <h2>Talk about it</h2>
            <p>
              Once you find a news story that you want to engage with, start the
              disucssion with an opinion about the story.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

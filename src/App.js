// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./Profile";
import NewsSearch from "./NewsSearch";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Conversations from "./Conversations";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import FetchProfile from "./FetchProfile";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Clear local storage before anything runs
    localStorage.clear();

    // Create an array to hold 100 instances of FetchProfile
    const newProfiles = Array(100).fill(null);

    setProfiles(newProfiles);

    // After all profiles have been rendered, log local storage
    console.log(
      "Local Storage after rendering:",
      JSON.stringify(localStorage, null, 2)
    );
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news-search" element={<NewsSearch />} />
          {/* Optionally, you can add a default route */}
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Render FetchProfile 100 times */}
        <div>
          {profiles.map((_, index) => (
            <FetchProfile key={index} />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;

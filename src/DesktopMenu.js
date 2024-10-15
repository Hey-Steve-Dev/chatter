import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div className="desktopMenu">
      <Link to="/about">About</Link>
      <Link to="/conversations">Chatter</Link>
      <Link to="/news-search">Stories</Link>
    </div>
  );
};

export default DesktopMenu;

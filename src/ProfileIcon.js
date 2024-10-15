import React from "react";
import headshot from "./images/profile-headshot-placeholder.webp";
import { useNavigate } from "react-router-dom";

// ItemImage component to display the item image
const ProfileIcon = ({}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile"); // Navigate to /home page
  };

  return (
    <div className="profileIcon">
      <img
        src={headshot}
        alt="logo"
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
        onClick={handleClick} // Correctly use the onClick event here
      />
    </div>
  );
};

export default ProfileIcon;

import React, { useEffect } from "react";
import FetchProfile from "./FetchProfile";
import FetchFromLocalStorage from "./FetchFromLocalStorage";

const ProfileBoard = () => {
  // Clear local storage before starting to ensure no previous data exists
  useEffect(() => {
    localStorage.removeItem("userProfiles");
  }, []);

  return (
    <div className="profile-board">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index}>
          <FetchProfile />
        </div>
      ))}

      <FetchFromLocalStorage />
    </div>
  );
};

export default ProfileBoard;

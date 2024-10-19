import React from "react";
import headshot from "./images/profile-headshot-placeholder.webp"; // Ensure the path is correct

const ProfileCard = ({}) => {
  return (
    <div className="user-profile-card">
      <div className="user-name">
        <h3 className="user-profile-h2">
          {"John"} {"Smith"}
        </h3>
      </div>
      <div className="user-image">
        <img
          src={headshot} // Use the imported image directly
          alt="profile"
        />
      </div>
      <p className="user-gender">Gender: {"Male"}</p>

      <p className="user-location">
        Location: {"Columbus"}, {"Ohio"}
      </p>

      <p className="user-time-zone">Timezone: {"EST"}</p>

      {/* Online/Offline Indicator and Props Badge */}
      <div className="status-props-wrapper">
        <div className={`status-indicator online`}>Online</div>
        <div className="props-badge">
          <span>Props: 56</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

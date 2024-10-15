import React from "react";

const FetchFromLocalStorage = () => {
  // Retrieve user profiles array from localStorage
  const savedProfiles = JSON.parse(localStorage.getItem("userProfiles")) || [];

  return (
    <div className="user-profile-board">
      {savedProfiles.map((userData, index) => {
        // Destructure the user data for easier use
        const { name, location, email, dob, phone, cell, picture, nat } =
          userData;

        return (
          <div className="user-profile-card" key={index}>
            <h2 className="user-profile-h2">User Profile</h2>
            <div className="user-image">
              <img src={picture.large} alt={`${name.first} ${name.last}`} />
            </div>
            <div>
              <h3 className="user-name">{`${name.title} ${name.first} ${name.last}`}</h3>
              <p className="user-gender">
                <strong>Gender:</strong> {userData.gender}
              </p>
              <p className="user-nationality">
                <strong>Nationality:</strong> {nat}
              </p>
              <p className="user-email">
                <strong>Email:</strong> {email}
              </p>
              <p className="user-dob">
                <strong>Date of Birth:</strong>{" "}
                {new Date(dob.date).toLocaleDateString()} ({dob.age} years old)
              </p>
              <p className="user-phone">
                <strong>Phone:</strong> {phone}
              </p>
              <p className="user-cell">
                <strong>Cell:</strong> {cell}
              </p>
            </div>
            <div>
              <h4>Location</h4>
              <p className="user-address">{`${location.street.number} ${location.street.name}`}</p>
              <p>{`${location.city}, ${location.state}, ${location.country} ${location.postcode}`}</p>
              <p className="user-time-zone">
                <strong>Timezone:</strong> {location.timezone.description} (UTC{" "}
                {location.timezone.offset})
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FetchFromLocalStorage;

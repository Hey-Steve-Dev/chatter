import React, { useEffect, useState } from "react";
import sampleUser from "./sampleUsers.json"; // Adjust path if necessary
import GenerateProfileNews from "./GenerateProfileNews";

const ProfileBoard = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]); // Filtered profiles for search
  const [statuses, setStatuses] = useState([]); // Array to hold online/offline status
  const [propsValues, setPropsValues] = useState([]); // Array to hold "props" values
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
  const [selectedCountry, setSelectedCountry] = useState(""); // Country filter

  useEffect(() => {
    // Parse the userProfiles JSON string from the file
    const parsedProfiles = JSON.parse(sampleUser.userProfiles);

    // Filter out profiles with duplicate image URLs and from Iran
    const uniqueProfiles = [];
    const imageSet = new Set();

    parsedProfiles.forEach((profile) => {
      const imageUrl = profile.picture.large;
      const country = profile.location.country;

      // Check if the profile is from Iran or if the image URL is a duplicate
      if (country !== "Iran" && !imageSet.has(imageUrl)) {
        uniqueProfiles.push(profile); // Add profile if it's not from Iran and has a unique image URL
        imageSet.add(imageUrl); // Mark this image as seen
      }
    });

    setUserProfiles(uniqueProfiles);
    setFilteredProfiles(uniqueProfiles); // Initially show all profiles

    // Randomly assign 2/3 profiles as "online" and 1/3 as "offline"
    const statusArray = uniqueProfiles.map(() =>
      Math.random() < 0.67 ? "online" : "offline"
    );
    setStatuses(statusArray);

    // Assign random "props" values (over 100) for each profile
    const propsArray = uniqueProfiles.map(
      () => Math.floor(Math.random() * 900) + 101 // Random number between 101 and 1000
    );
    setPropsValues(propsArray);
  }, []);

  // Get a unique list of countries for the dropdown
  const uniqueCountries = [
    ...new Set(userProfiles.map((profile) => profile.location.country)),
  ];

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    filterProfiles(event.target.value.toLowerCase(), selectedCountry);
  };

  // Function to handle country dropdown change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    filterProfiles(searchTerm, event.target.value);
  };

  // Filter profiles based on search term and selected country
  const filterProfiles = (searchValue, countryValue) => {
    const filtered = userProfiles.filter((profile) => {
      const fullName = `${profile.name.first.toLowerCase()} ${profile.name.last.toLowerCase()}`;
      const matchesSearch = fullName.includes(searchValue);
      const matchesCountry =
        countryValue === "" || profile.location.country === countryValue;
      return matchesSearch && matchesCountry;
    });

    setFilteredProfiles(filtered);
  };

  return (
    <div>
      {/* Navigation bar with search feature and country filter */}
      <nav className="conversationNavbar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          className="country-dropdown"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">All Countries</option>
          {uniqueCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </nav>

      <div className="user-profile-board">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <div key={index} className="user-profile-card">
              <div className="user-name">
                <h3 className="user-profile-h2">
                  {profile.name.first} {profile.name.last}
                </h3>
              </div>
              <div className="user-image">
                <img
                  src={profile.picture.large} // Use the large image here
                  alt={`${profile.name.first} large`}
                />
              </div>
              <p className="user-gender">Gender: {profile.gender}</p>

              <p className="user-location">
                Location: {profile.location.city}, {profile.location.country}
              </p>

              <p className="user-time-zone">
                Timezone: {profile.location.timezone.description}
              </p>

              {/* Online/Offline Indicator and Props Badge */}
              <div className="status-props-wrapper">
                <div className={`status-indicator ${statuses[index]}`}>
                  {statuses[index] === "online" ? "Online" : "Offline"}
                </div>
                <div className="props-badge">
                  <span>Props: {propsValues[index]}</span>
                </div>
              </div>
              <GenerateProfileNews />
            </div>
          ))
        ) : (
          <p>No profiles found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBoard;

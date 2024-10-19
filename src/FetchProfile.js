import React, { useState, useEffect } from "react";

const FetchProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("fetch profile");

  useEffect(() => {
    // Fetch data from the RandomUser API
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        setUserData(user);
        setLoading(false);

        // Get existing profiles from localStorage
        const existingProfiles =
          JSON.parse(localStorage.getItem("userProfiles")) || [];

        // Add the new profile to the array
        existingProfiles.push(user);

        // Save the updated profiles array to localStorage
        localStorage.setItem("userProfiles", JSON.stringify(existingProfiles));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return null; // Not displaying anything as we only fetch the profile here
};

export default FetchProfile;

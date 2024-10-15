import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if the menu is open or closed
  //The below checks the screen size and displays the correct menu accordingly.
  useEffect(() => {
    // Check for screen size using matchMedia
    const mediaQuery = window.matchMedia("(max-width: 650px)");
    const hamburgerMenu = document.querySelector(".hamburgerMenu");
    const desktopMenu = document.querySelector(".desktopMenu");

    // Function to handle screen size change
    const handleScreenChange = (e) => {
      // If true, screen is <= 650px
      if (
        !(
          desktopMenu.classList.contains("displayFlex") &&
          hamburgerMenu.classList.contains("displayFlex")
        )
      ) {
        // Run the media query code if the condition is NOT met

        if (e.matches) {
          // This is when the screen matches the mobile condition max-width: 650px
          desktopMenu.classList.remove("displayFlex");
          desktopMenu.classList.add("displayNone");
          hamburgerMenu.classList.remove("displayNone");
          hamburgerMenu.classList.add("displayFlex");
        } else {
          // This is when the screen is larger (desktop view)
          desktopMenu.classList.remove("displayNone");
          desktopMenu.classList.add("displayFlex");
          hamburgerMenu.classList.remove("displayFlex");
          hamburgerMenu.classList.add("displayNone");
        }
      } else {
      }
    };

    // Attach listener to media query
    mediaQuery.addEventListener("change", handleScreenChange);

    // Check initial screen size
    handleScreenChange(mediaQuery);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  // Toggle the menu's state and the display of elements
  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Select the existing elements by their class names
    const companyDetails = document.querySelector(".companyDetails");

    const desktopMenu = document.querySelector(".desktopMenu");
    const profileImage = document.querySelector(".profileImage");

    if (isOpen) {
      companyDetails.classList.remove("displayNone");
      companyDetails.classList.add("displayFlex");

      desktopMenu.classList.remove("displayFlex");
      desktopMenu.classList.add("displayNone");

      profileImage.classList.remove("displayNone");
      profileImage.classList.add("displayBlock");
    } else {
      companyDetails.classList.remove("displayFlex");
      companyDetails.classList.add("displayNone");

      desktopMenu.classList.remove("displayNone");
      desktopMenu.classList.add("displayFlex");

      profileImage.classList.remove("displayBlock");
      profileImage.classList.add("displayNone");
    }
  };

  return (
    <div className="hamburgerMenu" onClick={toggleMenu}>
      <FaBars />
    </div>
  );
};

export default HamburgerMenu;

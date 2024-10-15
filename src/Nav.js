import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";
import CompanyLogo from "./CompanyLogo";
import ProfileIcon from "./ProfileIcon";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/home" className="companyDetails">
          <CompanyLogo />
        </Link>
      </div>

      <div className="desktopMenu">
        <DesktopMenu />
      </div>
      <div className="hamburgerMenu">
        <HamburgerMenu />
      </div>
      <Link to="/profile" className="profile profileImage">
        <ProfileIcon />
      </Link>
    </div>
  );
};

export default Nav;

import React from "react";
import "../index.css";

/**
 * Header component renders the app logo, title, and icons.
 * @returns {JSX.Element} The app header.
 */
function Header() {
  return (
    <header className="header">
      <div className="podcastLogoAndTitle">
        <img
          src="/assets/icons8-microphone-50.png"
          alt="PodcastApp Logo"
          className="podcastAppLogo"
        />
        <h1 className="podcastTitle">PodGenius</h1>
      </div>
      <div className="podcastSearchAndProfile">
        <img
          src="/assets/icons8-search-30.png"
          alt="search icon"
          className="searchIcon"
        />
        <img
          src="/assets/icons8-profile-picture-50.png"
          alt="profile icon"
          className="profileIcon"
        />
      </div>
    </header>
  );
}

export default Header;

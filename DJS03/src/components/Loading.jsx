import React from "react";
import "../index.css";

/**
 * Loading component shows an animated spinner while data loads.
 * @returns {JSX.Element}
 */
function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading Podcasts...</p>
    </div>
  );
}

export default Loading;

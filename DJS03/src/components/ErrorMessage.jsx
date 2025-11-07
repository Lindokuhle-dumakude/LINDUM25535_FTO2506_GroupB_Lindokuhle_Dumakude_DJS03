import React from "react";
import "../index.css";

/**
 * ErrorMessage component displays a styled error notice.
 * @param {Object} props
 * @param {string} props.message - Error text
 * @returns {JSX.Element}
 */
function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <p>⚠️ {message}</p>
    </div>
  );
}

export default ErrorMessage;

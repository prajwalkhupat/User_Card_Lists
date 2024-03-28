import React from "react";
import "./InitialsImage.css"; // Import CSS file for styling (you can adjust styling as needed)

const InitialsImage = ({ name }) => {
  // Extracting initials from the name
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return <div className="initials-image">{initials}</div>;
};

export default InitialsImage;

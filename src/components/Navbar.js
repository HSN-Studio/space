import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  //States
  const [url, seturl] = useState(null);

  //Regular Functions

  // Lifecycle Methods
  useEffect(() => {
    seturl(window.location.href);
  }, []);

  // JSX
  return (
    <div className="navbar">
      <ul>
        <li className={url === "http://localhost:3000/" ? "active" : null}>
          <a href="#">00 Home</a>
        </li>
        <li>
          <a href="#">01 Destination</a>
        </li>
        <li>02 Crew</li>
        <li>03 Technology</li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header>
      <nav>
        <a className="active" href="">
          Live
        </a>
        <a href="">Experience</a>
      </nav>
    </header>
  );
}

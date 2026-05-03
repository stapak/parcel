import { useState } from "react";
import HeaderPic from "./subcomp/HeaderPic";
import HeaderLinks from "./subcomp/HeaderLinks";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">

      <HeaderPic />

      {/* TOGGLE BUTTON (mobile only) */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* LINKS + BUTTON */}
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <HeaderLinks />
        <button className="login-btn">Login</button>
      </div>

    </header>
  );
}

export default Header;
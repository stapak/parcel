import { useState } from "react";
import HeaderPic from "./subcomp/HeaderPic";
import HeaderLinks from "./subcomp/HeaderLinks";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
      </div>

    </header>
  );
}

export default Header;
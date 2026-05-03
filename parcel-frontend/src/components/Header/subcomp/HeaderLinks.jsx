import { NavLink } from "react-router-dom";

function HeaderLinks() {
  return (
    <div className="header-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "header-link active" : "header-link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          isActive ? "header-link active" : "header-link"
        }
      >
        About us
      </NavLink>

      <NavLink
        to="/track"
        className={({ isActive }) =>
          isActive ? "header-link active" : "header-link"
        }
      >
        Track
      </NavLink>
    </div>
  );
}

export default HeaderLinks;
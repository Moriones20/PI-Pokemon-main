import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";
import iconPokemon from "../../Assets/pokemon-icon.png";
import iconLogout from "../../Assets/logout.png";

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-container">
          <NavLink to={"/home"}>
            <div className="icon-pokemon">
              <img src={iconPokemon} alt="Pokemon-icon" />
            </div>
          </NavLink>
        <div className="links">
          {location.pathname !== "/create" && (
            <NavLink to={"/create"}>
              <button className="btn-create-pokemon">Create Pokemon</button>
            </NavLink>
          )}
        </div>
        <div className="logout">
          <NavLink to={"/"}>
            <img src={iconLogout} alt="logout" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

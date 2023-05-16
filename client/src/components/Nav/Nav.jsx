import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <NavLink to={"/home"}>
          <button>Home</button>
        </NavLink>
        <NavLink to={"/create"}>
          <button>Create Pokemon</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

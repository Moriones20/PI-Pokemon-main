import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <NavLink to={"/home"}>
        <button>Home</button>
      </NavLink>
      <NavLink to={"/create"}>
        <button>Create Pokemon</button>
      </NavLink>
    </div>
  );
};

export default Nav;

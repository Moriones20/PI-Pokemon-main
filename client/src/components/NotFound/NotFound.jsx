import "./NotFound.css";
import { NavLink } from "react-router-dom";
import sign from "../../Assets/404.png"

const NotFound = () => {
  return (
    <div className="container-404">
      <img src={sign} alt="sign"className="sign-404" />
      <div className="text-404">
      <h1>ARE YOU LOST?</h1>
      <NavLink to={"/"}>
        <button className="btn-404">REDIRECT TO HOME</button>
      </NavLink>
      </div>
    </div>
  );
};

export default NotFound;

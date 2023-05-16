import "./Landing.css";
import imgPokemon from "../../Assets/pokemon.png";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-box">
        <div className="principal-text">
          <h1>Bienvenidos a la API Pokemon</h1>
          <h3>
            ¡Bienvenido a nuestra página Pokémon! Aquí encontrarás una lista
            completa de todos los Pokémons que existen, con todos los detalles
            sobre cada uno de ellos, ¡además podrás crear tus propios Pokémons!
          </h3>
        </div>
        <div className="img-btn">
          <img src={imgPokemon} alt="Pokemon" />
          <NavLink to={"/home"}>
            <button>
              <span>Ingresar</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;

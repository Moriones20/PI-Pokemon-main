import imgPokemon from "../../Assets/pokemon.png";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Bienvenidos a la API Pokemon </h1>
      <h3>
        ¡Bienvenido a nuestra página Pokémon! Aquí encontrarás una lista
        completa de todos los Pokémons que existen, con todos los detalles sobre
        cada uno de ellos, ¡además podrás crear tus propios Pokémons!
      </h3>
      <img src={imgPokemon} alt="Pokemon" />
      <NavLink to={"/home"}>
        <button>Ingresar</button>
      </NavLink>
    </div>
  );
};

export default Landing;

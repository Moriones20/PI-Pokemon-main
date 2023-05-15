import Validation from "./Validation";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = () => {
  const endpoint = "http://localhost:3001/pokemons/";
  const Types = useSelector((state) => state.types);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validation({
        ...pokemon,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleCheckboxChange = (event) => {
    const type = event.target.value;

    if (event.target.checked) {
      setSelectedTypes([...selectedTypes, type]);
      setPokemon((prevPokemon) => ({
        ...prevPokemon,
        types: [...prevPokemon.types, type],
      }));
    } else {
      setSelectedTypes(selectedTypes.filter((selected) => selected !== type));
      setPokemon((prevPokemon) => ({
        ...prevPokemon,
        types: prevPokemon.types.filter((selected) => selected !== type),
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        const { data } = await axios.post(endpoint, pokemon);
        window.alert(data.message);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          window.alert(error.response.data.message);
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>¡Crea tu propio Pokemon!</h1>

        <span>Name: </span>
        <input
          type="text"
          name="name"
          autoComplete="off"
          required={true}
          value={pokemon.name}
          onChange={handleChange}
        />
        {errors.name && <p className="danger">{errors.name}</p>}

        <span>Image: </span>
        <input
          type="text"
          name="image"
          autoComplete="off"
          required={true}
          value={pokemon.image}
          onChange={handleChange}
        />
        {errors.image && <p className="danger">{errors.image}</p>}

        <span>Hp: </span>
        <input
          type="number"
          name="hp"
          autoComplete="off"
          required={true}
          value={pokemon.hp}
          onChange={handleChange}
        />
        {errors.hp && <p className="danger">{errors.hp}</p>}

        <span>Attack: </span>
        <input
          type="number"
          name="attack"
          autoComplete="off"
          required={true}
          value={pokemon.attack}
          onChange={handleChange}
        />
        {errors.attack && <p className="danger">{errors.attack}</p>}

        <span>Defense: </span>
        <input
          type="number"
          name="defense"
          autoComplete="off"
          required={true}
          value={pokemon.defense}
          onChange={handleChange}
        />
        {errors.defense && <p className="danger">{errors.defense}</p>}

        <span>Speed: </span>
        <input
          type="number"
          name="speed"
          autoComplete="off"
          value={pokemon.speed}
          onChange={handleChange}
        />
        {errors.speed && <p className="danger">{errors.speed}</p>}

        <span>Height: </span>
        <input
          type="number"
          name="height"
          autoComplete="off"
          value={pokemon.height}
          onChange={handleChange}
        />

        <span>Weight: </span>
        <input
          type="number"
          name="weight"
          autoComplete="off"
          value={pokemon.weight}
          onChange={handleChange}
        />

        <span>Type: </span>
        <div>
          {Types?.map((type) => {
            return (
              <label key={type.id}>
                <input
                  type="checkbox"
                  name="types"
                  value={type.name}
                  checked={selectedTypes.includes(type.name)}
                  onChange={handleCheckboxChange}
                />
                {type.name}
              </label>
            );
          })}
          <p>Types selected: {selectedTypes.join(", ")}</p>
        </div>

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Form;

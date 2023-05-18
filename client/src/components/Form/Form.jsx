import "./Form.css";
import axios from "axios";
import Validation from "./Validation";
import { addTypes } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const endpoint = "http://localhost:3001/pokemons/";
  const Types = useSelector((state) => state.types);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: "",
  });
  const isFormValid =
    pokemon.name &&
    pokemon.image &&
    pokemon.hp &&
    pokemon.attack &&
    pokemon.defense &&
    pokemon.speed &&
    selectedTypes.length > 0;

  useEffect(() => {
    dispatch(addTypes());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemon((prevPokemon) => ({
      ...prevPokemon,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: Validation({ ...prevErrors, [name]: value })[name],
    }));
  };

  const handleCheckboxChange = (event) => {
    const type = event.target.value;

    if (event.target.checked) {
      setPokemon((prevPokemon) => ({
        ...prevPokemon,
        types: [...prevPokemon.types, type],
      }));
      setSelectedTypes([...selectedTypes, type]);
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
    if (Object.values(errors).some((error) => error !== "")) {
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
    <div className="container-create">
      <form onSubmit={handleSubmit} className="form-create">
        <p className="title">¡Crea tu propio Pokemon!</p>

        <label htmlFor="">
          <input
            type="text"
            name="name"
            autoComplete="off"
            required={true}
            value={pokemon.name}
            onChange={handleChange}
            className="input-form"
          />
          <span>Name: </span>
        </label>
        {errors.name && <p className="danger">{errors.name}</p>}

        <label htmlFor="">
          <input
            type="text"
            name="image"
            autoComplete="off"
            required={true}
            value={pokemon.image}
            onChange={handleChange}
            className="input-form"
          />
          <span>Image: </span>
        </label>
        {errors.image && <p className="danger">{errors.image}</p>}

        <div className="flex">
          <label htmlFor="">
            <input
              type="number"
              name="hp"
              autoComplete="off"
              required={true}
              value={pokemon.hp}
              onChange={handleChange}
              className="input-form"
            />
            <span>Hp: </span>
          </label>
          {errors.hp && <p className="danger">{errors.hp}</p>}

          <label htmlFor="">
            <input
              type="number"
              name="attack"
              autoComplete="off"
              required={true}
              value={pokemon.attack}
              onChange={handleChange}
              className="input-form"
            />
            <span>Attack: </span>
          </label>
          {errors.attack && <p className="danger">{errors.attack}</p>}
        </div>

        <div className="flex">
          <label htmlFor="">
            <input
              type="number"
              name="defense"
              autoComplete="off"
              required={true}
              value={pokemon.defense}
              onChange={handleChange}
              className="input-form"
            />
            <span>Defense: </span>
          </label>
          {errors.defense && <p className="danger">{errors.defense}</p>}

          <label htmlFor="">
            <input
              type="number"
              name="speed"
              autoComplete="off"
              required={true}
              value={pokemon.speed}
              onChange={handleChange}
              className="input-form"
            />
            <span>Speed: </span>
          </label>
          {errors.speed && <p className="danger">{errors.speed}</p>}
        </div>

        <div className="flex">
          <label>
            <input
              type="number"
              name="height"
              autoComplete="off"
              required={false}
              value={pokemon.height}
              onChange={handleChange}
              className="input-form"
            />
            <span>Height: </span>
          </label>

          <label htmlFor="">
            <input
              type="number"
              name="weight"
              autoComplete="off"
              required={false}
              value={pokemon.weight}
              onChange={handleChange}
              className="input-form"
            />
            <span>Weight: </span>
          </label>
        </div>

        <div className="container-types-create">
          <span>Types: </span>
          <div className="types-checkbox">
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
          </div>
        </div>
        {errors.types && <p className="danger">{errors.types}</p>}

        <button type="submit" className={!isFormValid ? "submit-disabled" : "submit"} disabled={!isFormValid}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;

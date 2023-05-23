/* eslint-disable react-hooks/exhaustive-deps */
import "./Form-update.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addTypes } from "../../redux/actions";
import axios from "axios";

const FormUpdate = () => {
  const { id } = useParams();
  const endpointUpdate = `pokemons/update/${id}`;
  const endpointGetById = `pokemons/${id}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Types = useSelector((state) => state.types);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pokemonUpdate, setPokemonUpdate] = useState({});

  useEffect(() => {
    dispatch(addTypes());
    try {
      axios
        .get(endpointGetById)
        .then((response) => response.data)
        .then((data) => {
          setPokemonUpdate(data);
          setSelectedTypes(data.types)
        });
    } catch (error) {
      throw new Error(error.message);
    }
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemonUpdate((prevPokemon) => ({
      ...prevPokemon,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const type = event.target.value;

    if (event.target.checked) {
      setPokemonUpdate((prevPokemon) => ({
        ...prevPokemon,
        types: [...prevPokemon.types, type],
      }));
      setSelectedTypes([...selectedTypes, type]);
    } else {
      setSelectedTypes(selectedTypes.filter((selected) => selected !== type));
      setPokemonUpdate((prevPokemon) => ({
        ...prevPokemon,
        types: prevPokemon.types.filter((selected) => selected !== type),
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(endpointUpdate, pokemonUpdate);
      window.alert(data);
      navigate(`/detail/${id}`);
    } catch (error) {
      window.alert(error.response.data);
    }
  };

  return (
    <div className="container-update">
      <form onSubmit={handleSubmit} className="form-update">
        <p className="title">
          Edit{" "}
          {pokemonUpdate.name &&
            pokemonUpdate.name.charAt(0).toUpperCase() +
              pokemonUpdate.name.slice(1)}
        </p>

        <label htmlFor="">
          <input
            type="text"
            name="image"
            autoComplete="off"
            value={pokemonUpdate.image}
            onChange={handleChange}
            className="input-form"
          />
          <span>Image: </span>
        </label>

        <div className="flex">
          <label htmlFor="">
            <input
              type="number"
              name="hp"
              autoComplete="off"
              value={pokemonUpdate.hp}
            onChange={handleChange}
              className="input-form"
            />
            <span>Hp: </span>
          </label>

          <label htmlFor="">
            <input
              type="number"
              name="attack"
              autoComplete="off"
              value={pokemonUpdate.attack}
            onChange={handleChange}
              className="input-form"
            />
            <span>Attack: </span>
          </label>
        </div>

        <div className="flex">
          <label htmlFor="">
            <input
              type="number"
              name="defense"
              autoComplete="off"
              value={pokemonUpdate.defense}
            onChange={handleChange}
              className="input-form"
            />
            <span>Defense: </span>
          </label>

          <label htmlFor="">
            <input
              type="number"
              name="speed"
              autoComplete="off"
              value={pokemonUpdate.speed}
            onChange={handleChange}
              className="input-form"
            />
            <span>Speed: </span>
          </label>
        </div>

        <div className="flex">
          <label>
            <input
              type="number"
              name="height"
              autoComplete="off"
              value={pokemonUpdate.height}
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
              value={pokemonUpdate.weight}
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

        <button type="submit" className="submit-update">
          Update
        </button>
      </form>
    </div>
  );
};

export default FormUpdate;

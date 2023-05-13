/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemons } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Filter from "./Options/Filter/Filter";
import Order from "./Options/Order/Order";

const Card = () => {
  //Add pokemons
  const dispatch = useDispatch();
  const Pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(addPokemons());
  }, [dispatch]);

  //pagination
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const max = Math.ceil(Pokemons.length / perPage);

  return (
    <div>
      <Filter />
      <Order />
      <h1>Personajes</h1>
      {Array.isArray(Pokemons) && Pokemons?.slice(
        (page - 1) * perPage,
        (page - 1) * perPage + perPage
      ).map((pokemon) => {
        return (
          <NavLink key={pokemon.id} to={`/detail/${pokemon.id}`}>
            <div>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.image} alt={pokemon.name} />
              <h3>{pokemon.types?.join(", ")}</h3>
              <h3>{pokemon.id}</h3>
            </div>
          </NavLink>
        );
      })}
      <Pagination page={page} setPage={setPage} max={max} />
    </div>
  );
};

export default Card;

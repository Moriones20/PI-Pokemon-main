/* eslint-disable no-unused-vars */
import "./Card.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemons, addTypes } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import Filter from "./Options/Filter/Filter";

const Card = () => {
  //Add pokemons
  const dispatch = useDispatch();
  const Pokemons = useSelector((state) => state.pokemons);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    dispatch(addTypes());
    dispatch(addPokemons())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [dispatch]);

  //pagination
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const max = Math.ceil(Pokemons.length / perPage);

  return (
    <div className="Container-load-cards">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-cards">
          {<Filter setPage={setPage}/>}
          <h1>Pokemons</h1>
          <div className="pokemons">
            {Array.isArray(Pokemons) &&
              Pokemons?.slice(
                (page - 1) * perPage,
                (page - 1) * perPage + perPage
              ).map((pokemon) => {
                return (
                  <NavLink key={pokemon.id} to={`/detail/${pokemon.id}`}>
                    <div className="pokemon">
                      <img src={pokemon.image} alt={pokemon.name} />
                      <div className="text-container-detail">
                        <h2>{pokemon.name}</h2>
                        <h3>{pokemon.types?.join(", ")}</h3>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
          </div>
          <Pagination page={page} setPage={setPage} max={max} />
        </div>
      )}
    </div>
  );
};

export default Card;

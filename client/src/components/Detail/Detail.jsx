import "./Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Delete from "../Delete/Delete";
import Update from "../Update-pokemon/Update";

const Detail = () => {
  const { id } = useParams();
  const endpoint = `http://localhost:3001/pokemons/${id}`;
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get(endpoint)
        .then((response) => response.data)
        .then((data) => {
          setIsLoading(false);
          if (data.name) return setPokemon(data);
          window.alert("There aren't Pokemons with that ID!");
        });
    } catch (error) {
      throw new Error(error.message);
    }

    return setPokemon({});
  }, [endpoint, id]);

  return (
    <div className="container-load-detail">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-DelUpd">
          {pokemon.CreateBy && (
            <div className="del-upd">
              <Delete />
              <Update />
            </div>
          )}
          <div className="container-detail">
            <div className="detail-img">
              <p>{pokemon?.id}</p>
              <h1>{pokemon?.name}</h1>
              <img src={pokemon?.image} alt={pokemon?.name} />
            </div>
            <div className="detail-info">
              <h3>Hp: {pokemon?.hp}</h3>
              <h3>Attack: {pokemon?.attack}</h3>
              <h3>Defense: {pokemon?.defense}</h3>
              <h3>Speed: {pokemon?.speed}</h3>
              <h3>Height: {pokemon?.height}</h3>
              <h3>Weight: {pokemon?.weight}</h3>
              <h3>Type: {pokemon?.types?.join(", ")}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

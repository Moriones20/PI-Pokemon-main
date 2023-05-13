/* eslint-disable no-unused-vars */
import { ADD_POKEMONS, SEARCH_BY_ID, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  const loadTypes = "http://localhost:3001/types";
  return async (dispatch) => {
    try {
      const [typesResponse, pokemonsResponse] = await Promise.all([
        axios.get(loadTypes),
        axios.get(endpoint),
      ]);
      const pokemons = pokemonsResponse.data;
      return dispatch({
        type: ADD_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const searchById = (id) => {
  const endpoint = `http://localhost:3001/pokemons/${id}`;
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint);
      console.log(data);
      return dispatch({
        type: SEARCH_BY_ID,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const filterCards = (type) => {
  return {
    type: FILTER,
    payload: type,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

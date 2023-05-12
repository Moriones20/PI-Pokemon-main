import { ADD_POKEMONS, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: ADD_POKEMONS,
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

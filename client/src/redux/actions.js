/* eslint-disable no-unused-vars */
import {
  ADD_POKEMONS,
  SEARCH_BY_ID,
  SEARCH_BY_NAME,
  FILTER_TYPE,
  FILTER_CREATED,
  ORDER,
} from "./action-types";
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
      const types = typesResponse.data;
      const pokemons = pokemonsResponse.data;
      return dispatch({
        type: ADD_POKEMONS,
        payload: { pokemons, types },
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
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: SEARCH_BY_ID,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const searchByName = (name) => {
  const endpoint = `http://localhost:3001/pokemons/byname/?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const filterCardsType = (type) => {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
};

export const filterCardsCreated = (created) => {
  return {
    type: FILTER_CREATED,
    payload: created,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

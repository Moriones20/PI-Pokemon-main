/* eslint-disable no-unused-vars */
import {
  ADD_POKEMONS,
  ADD_TYPES,
  SEARCH_BY_ID,
  SEARCH_BY_NAME,
  FILTER_TYPE,
  FILTER_CREATED,
  ORDER,
  DELETE_POKEMON,
} from "./action-types";
import axios from "axios";

export const addPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const pokemonsResponse = await axios.get(endpoint);
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

export const addTypes = () => {
  const loadTypes = "http://localhost:3001/types";
  return async (dispatch) => {
    try {
      const typesResponse = await axios.get(loadTypes);
      const types = typesResponse.data;
      return dispatch({
        type: ADD_TYPES,
        payload: types,
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
      window.alert(error.response.data.message);
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
      window.alert(error.response.data.message);
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

export const deletePokemon = (id) => {
  const endpoint = `http://localhost:3001/pokemons/delete/${id}`;
  return async (dispatch) => {
    try {
      await axios.delete(endpoint);
      return dispatch({
        type: DELETE_POKEMON,
        payload: id,
      });
    } catch (error) {
      window.alert(error.response.data);
    }
  };
};

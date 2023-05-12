import { ADD_POKEMONS, FILTER, ORDER } from "./action-types";

const initialState = {
  pokemons: [],
  pokemonsAux: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        pokemonsByType: payload,
      };

    case FILTER:
      if (payload === "all") {
        return {
          ...state,
          pokemons: state.pokemonsByType,
        };
      }
      return {};

    case ORDER:
      return {};

    default:
      return { ...state };
  }
};

export default reducer;

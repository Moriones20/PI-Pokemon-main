import { ADD_POKEMONS, SEARCH_BY_ID, FILTER, ORDER } from "./action-types";

const initialState = {
  pokemons: [],
  pokemonsAux: [],
  pokemonsOrder: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        pokemonsAux: payload,
        pokemonsOrder: payload,
      };

    case SEARCH_BY_ID:
      const pokemons = [payload];
      return {
        ...state,
        pokemons: pokemons,
      };

    case FILTER:
      if (payload === "all") {
        return {
          ...state,
          pokemons: state.pokemonsAux,
          pokemonsOrder: state.pokemonsAux,
        };
      } else {
        const filteredPokemons = state.pokemonsAux.filter((pokemon) =>
          pokemon.types.some((type) => type === payload)
        );
        return {
          ...state,
          pokemons: filteredPokemons,
          pokemonsOrder: filteredPokemons,
        };
      }

    case ORDER:
      return {};

    default:
      return { ...state };
  }
};

export default reducer;

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

const initialState = {
  types: [],
  pokemons: [],
  pokemonsType: [],
  pokemonsCopy: [],
  pokemonsCreated: [],
  pokemonsOrder: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        pokemonsType: payload,
        pokemonsCopy: payload,
        pokemonsCreated: payload,
        pokemonsOrder: payload,
      };

    case ADD_TYPES:
      return {
        ...state,
        types: payload,
      };

    case SEARCH_BY_ID:
      const pokemonId = [payload];
      return {
        ...state,
        pokemons: pokemonId,
      };

    case SEARCH_BY_NAME:
      const pokemonName = [payload];
      return {
        ...state,
        pokemons: pokemonName,
      };

    case FILTER_TYPE:
      if (payload === "all") {
        return {
          ...state,
          pokemons: state.pokemonsCopy,
        };
      } else {
        const filteredPokemons = state.pokemonsType.filter((pokemon) =>
          pokemon.types.some((type) => type === payload)
        );
        return {
          ...state,
          pokemons: filteredPokemons,
          pokemonsCreated: filteredPokemons,
          pokemonsOrder: filteredPokemons,
        };
      }

    case FILTER_CREATED:
      if (payload === "all") {
        return {
          ...state,
          pokemons: state.pokemonsCopy,
        };
      } else {
        const filteredPokemons = state.pokemonsCreated.filter(
          (pokemon) => pokemon.CreateBy === payload
        );
        return {
          ...state,
          pokemons: filteredPokemons,
          pokemonsType: filteredPokemons,
          pokemonsOrder: filteredPokemons,
        };
      }

    case ORDER:
      if (payload === "ASC_NAME") {
        const ascName = [...state.pokemonsOrder].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          pokemons: ascName,
          pokemonsType: ascName,
          pokemonsCreated: ascName,
        };
      }
      if (payload === "DESC_NAME") {
        const descName = [...state.pokemonsOrder].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return {
          ...state,
          pokemons: descName,
          pokemonsType: descName,
          pokemonsCreated: descName,
        };
      }
      if (payload === "ASC_ATK") {
        const ascAtk = [...state.pokemonsOrder].sort(
          (a, b) => b.attack - a.attack
        );
        return {
          ...state,
          pokemons: ascAtk,
          pokemonsType: ascAtk,
          pokemonsCreated: ascAtk,
        };
      }
      if (payload === "DESC_ATK") {
        const descAtk = [...state.pokemonsOrder].sort(
          (a, b) => a.attack - b.attack
        );
        return {
          ...state,
          pokemons: descAtk,
          pokemonsType: descAtk,
          pokemonsCreated: descAtk,
        };
      }
      return {
        ...state,
      };

    case DELETE_POKEMON:
      const deletePokemon = state.pokemons.filter(
        (pokemon) => pokemon.id !== payload
      );
      return {
        ...state,
        pokemons: deletePokemon,
      };

    default:
      return { ...state };
  }
};

export default reducer;

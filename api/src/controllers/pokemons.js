require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");
const { Pokemon } = require("../db");

const pokemons = async (req, res) => {
  try {
    const dbPokemons = await Pokemon.findAll();

    const { data } = await axios.get(`${API_URL}/pokemon?limit=50`);
    const apiPokemons = data.results;
    const pokemonData = await Promise.all(
      apiPokemons.map((pokemon) => axios.get(pokemon.url))
    );
    const apiPokemonDetail = pokemonData.map((response) => {
      const pokemon = response.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types
          .map((obj) => {
            return {
              name: obj.type.name,
            };
          })
          .map((type) => type.name)
          .join(", "),
      };
    });

    const allPokemons = [...dbPokemons, ...apiPokemonDetail];

    res.status(200).json(allPokemons);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = pokemons;

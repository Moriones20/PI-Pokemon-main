require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");

const pokemons = async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/pokemon?limit=50`);
    const pokemons = data.results;
    const pokemonData = await Promise.all(
      pokemons.map((pokemon) => axios.get(pokemon.url))
    );
    const PokemonDetail = pokemonData.map((response) => {
      const pokemon = response.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types.map((obj) => {
          return {
            name: obj.type.name,
            url: obj.type.url,
          };
        }),
      };
    });

    res.status(200).json(PokemonDetail);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = pokemons;

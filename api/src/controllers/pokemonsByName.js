require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");
const { Pokemon } = require("../db");

const pokemonsByName = async (req, res) => {
  try {
    const name = req.query.name.toLowerCase();

    const pokemonFound = await Pokemon.findOne({
      where: {
        name,
      },
    });
    if (pokemonFound) return res.status(200).json(pokemonFound);

    const { data } = await axios.get(`${API_URL}/pokemon/${name}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      types: data.types
        .map((obj) => {
          return {
            name: obj.type.name,
          };
        })
        .map((type) => type.name)
        .join(", "),
    };

    res.status(200).json(pokemon);
  } catch (error) {
    error.response.status === 404
      ? res.status(404).json({ message: "Pokemon not found" })
      : res.status(500).send(error.message);
  }
};

module.exports = pokemonsByName;

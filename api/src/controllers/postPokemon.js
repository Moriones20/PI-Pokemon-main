require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");
const { Pokemon, Type } = require("../db");

let count = 0;
let nextLocalId = 0;

axios.get(`${API_URL}/pokemon`).then((response) => {
  count = response.data.count;
});

const postPokemon = async (req, res) => {
  try {
    const { image, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const name = req.body.name.toLowerCase();

    const dbTypes = await Type.findAll({
      where: {
        name: types,
      },
    });

    const isValidType = types.every((type) =>
      dbTypes.some((dbType) => dbType.name === type)
    );

    if (!isValidType) return res.status(401).json({ error: "Type invalid" });

    if (!name || !image || !hp || !attack || !defense || !types)
      return res.status(401).json({ error: "Missing data" });

    const dbPokemons = await Pokemon.findAll();
    const countPokemons = dbPokemons.length;
    nextLocalId = countPokemons;
    const id = count + nextLocalId;

    const [pokemon, created] = await Pokemon.findOrCreate({
      where: {
        name,
      },
      defaults: {
        id,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
      },
    });

    if (!created)
      return res.status(409).json({ message: "The character already exists" });
    

    await pokemon.setPokemonTypes(dbTypes);

    res.status(200).json({ message: "The Pokemon has been created!" });
    nextLocalId++;
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postPokemon;

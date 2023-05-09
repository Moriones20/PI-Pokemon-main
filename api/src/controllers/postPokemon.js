const { Pokemon } = require("../db");

const postPokemon = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;

    if (!name || !image || !hp || !attack || !defense || !types)
      return res.status(401).json({ error: "Missing data" });

    const [pokemon, created] = await Pokemon.findOrCreate({
      where: {
        name,
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
      return res.status(400).json({ message: "The character already exists" });

    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postPokemon;

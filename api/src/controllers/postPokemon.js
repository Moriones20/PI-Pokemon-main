const { Pokemon } = require("../db");

const postPokemon = async (req, res) => {
  try {
    const { id, name, image, hp, attack, defense, speed, height, weight } =
      req.body;

    if (!id || !name || !image || !hp || !attack || !defense)
      return res.status(401).json({ error: "Faltan datos" });

    const [pokemon, created] = await Pokemon.findOrCreate({
      where: {
        id,
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
      },
    });

    if (!created)
      return res.status(400).json({ message: "Personaje ya existe" });

    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postPokemon;

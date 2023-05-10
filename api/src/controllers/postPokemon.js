const { Pokemon, Type } = require("../db");

let id = 1300;

const postPokemon = async (req, res) => {
  try {
    const { image, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const name = req.body.name.toLowerCase()

    const dbTypes = await Type.findAll();

    const isValidType = types.every((type) =>
      dbTypes.some((dbType) => dbType.name === type)
    );

    if (!isValidType) return res.status(401).json({ error: "Type invalid" });

    if (!name || !image || !hp || !attack || !defense || !types)
      return res.status(401).json({ error: "Missing data" });

    const [pokemon, created] = await Pokemon.findOrCreate({
      where: {
        id: id++,
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types: types.join(", "),
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

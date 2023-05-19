const { Pokemon } = require("../db");

const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    const updatedTypes =
      update.types && update.types.length > 0 ? update.types : Pokemon.types;

    const pokemonUpdate = await Pokemon.update(
      {
        image: update.image || Pokemon.image,
        hp: update.hp || Pokemon.hp,
        attack: update.attack || Pokemon.attack,
        defense: update.defense || Pokemon.defense,
        speed: update.speed || Pokemon.speed,
        height: update.height || Pokemon.height,
        weight: update.weight || Pokemon.weight,
        types: updatedTypes,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!pokemonUpdate) return res.status(404).send("No pokemon found");
    res.status(200).json("The Pokemon has been modified");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = updatePokemon;
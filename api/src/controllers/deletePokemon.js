const { Pokemon } = require("../db");

const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePokemon = await Pokemon.destroy({
      where: {
        id,
      },
    });

    if (!deletePokemon)
      return res.status(404).send("No pokemon found with that ID");

    res.status(200).json("Pokemon has been deleted succesfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = deletePokemon;

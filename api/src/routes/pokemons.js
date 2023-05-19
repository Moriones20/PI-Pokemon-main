const { Router } = require("express");
const router = Router();

const pokemons = require("../controllers/pokemons");
const pokemonById = require("../controllers/pokemonById");
const pokemonsByName = require("../controllers/pokemonsByName");
const postPokemon = require("../controllers/postPokemon");
const updatePokemon = require("../controllers/updatePokemon");
const deletePokemon = require("../controllers/deletePokemon");

router.get("/byname/", pokemonsByName);
router.get("/:id", pokemonById);
router.get("/", pokemons);
router.post("/", postPokemon);
router.put("/update/:id", updatePokemon);
router.delete("/delete/:id", deletePokemon);

module.exports = router;

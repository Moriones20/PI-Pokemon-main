const { Router } = require("express");
const router = Router();

const pokemons = require("../controllers/pokemons");
const pokemonById = require("../controllers/pokemonById");
const pokemonsByName = require("../controllers/pokemonsByName");
const postPokemon = require("../controllers/postPokemon");

router.get("/byname/", pokemonsByName);
router.get("/:id", pokemonById);
router.get("/", pokemons);
router.post("/", postPokemon);

module.exports = router;

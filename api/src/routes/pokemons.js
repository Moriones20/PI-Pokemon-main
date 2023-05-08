const { Router } = require("express");
const router = Router();

const pokemons = require("../controllers/pokemons");
const pokemonById = require("../controllers/pokemonById");
const pokemonsByName = require("../controllers/pokemonsByName");
const postPokemon = require("../controllers/postPokemon");
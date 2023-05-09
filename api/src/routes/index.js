const { Router } = require("express");
const router = Router();

const pokemonsRouter = require("./pokemons");
const typesRouter = require("./types");

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;

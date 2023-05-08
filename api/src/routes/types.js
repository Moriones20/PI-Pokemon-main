const { Router } = require("express");
const router = Router();

const getTypes = require("../controllers/getTypes");

router.get("/", getTypes);

module.exports = router;

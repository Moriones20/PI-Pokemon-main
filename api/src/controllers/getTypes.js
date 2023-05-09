require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");
const { Type } = require("../db");

const getTypes = async (req, res) => {
  try {
    let arrTypes = [];
    const { data } = await axios.get(`${API_URL}/type`);
    data.results.map((type) => {
      return arrTypes.push({ name: type.name });
    });

    const createdTypes = await Type.bulkCreate(arrTypes);

    if (!createdTypes.length)
      return res.status(400).json({ message: "The types have been created" });

    res.status(200).json(createdTypes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = getTypes;

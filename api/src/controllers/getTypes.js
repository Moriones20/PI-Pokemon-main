require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");
const { Type } = require("../db");
const { Op } = require("sequelize");

const getTypes = async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/type`);

    if (!data || !data.results) {
      return res.status(500).send({ message: "Failed to fetch types from API" });
    }

    const arrTypes = data.results.map((type) => ({ name: type.name }));

    const types = await Type.findAll({
      where: { 
        [Op.or]: arrTypes 
      }
    });

    if (types.length) {
      return res.status(200).json(types);
    }

    const createdTypes = await Type.bulkCreate(arrTypes);

    res.status(200).json(createdTypes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = getTypes;

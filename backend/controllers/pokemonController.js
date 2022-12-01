// Models
const Pokemon = require('../models/pokemonModel');
const mongoose = require('mongoose');

// GET ALL Pokemon
const getAllPokemon = async (req, res) => {
  // Get All Pokemon
  const allPokemon = await Pokemon.find({});

  res.status(200).json(allPokemon);
};

// GET SINGLE Pokemon
const getPokemon = async (req, res) => {
  const { id } = req.params;

  // Check if params id exist
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Pokemon could not be found' });
  }

  // Get single pokemon by id
  const pokemon = await Pokemon.findById(id);

  if (!pokemon) {
    return res.status(404).json({ error: 'Pokemon could not be found' });
  }

  res.status(200).json(pokemon);
};

// CREATE new pokemon
const createPokemon = async (req, res) => {
  const {
    name,
    image,
    description,
    height,
    weight,
    category,
    abilities,
    types,
    weaknesses,
  } = req.body;

  // Add pokemon data to DB
  try {
    const pokemon = await Pokemon.create({
      name,
      image,
      description,
      height,
      weight,
      category,
      abilities,
      types,
      weaknesses,
    });
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE pokemon
const deletePokemon = async (req, res) => {
  const { id } = req.params;

  // Check if params id exist
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Pokemon could not be found' });
  }

  const pokemon = await Pokemon.findOneAndDelete({ _id: id });

  if (!pokemon) {
    return res.status(404).json({ error: 'Pokemon could not be found' });
  }

  res.status(200).json(pokemon);
};

// UPDATE pokemon
const updatePokemon = async (req, res) => {
  const { id } = req.params;

  // Check if params id exist
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Pokemon could not be found' });
  }

  const pokemon = await Pokemon.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!pokemon) {
    return res.status(404).json({ error: 'Pokemon could not be found' });
  }

  res.status(200).json(pokemon);
};

module.exports = {
  getAllPokemon,
  getPokemon,
  createPokemon,
  deletePokemon,
  updatePokemon,
};

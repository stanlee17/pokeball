const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  abilities: {
    type: String,
    required: true,
  },
  types: {
    type: [String],
    default: undefined,
    required: true,
  },
  weaknesses: {
    type: [String],
    default: undefined,
    required: true,
  },
});

module.exports = mongoose.model('Pokemon', pokemonSchema);

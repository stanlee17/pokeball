const express = require('express');
const router = express.Router();

// Controllers
const {
  getAllPokemon,
  getPokemon,
  createPokemon,
  deletePokemon,
  updatePokemon,
} = require('../controllers/pokemonController');

// GET ALL Pokemon
router.get('/', getAllPokemon);

// GET SINGLE Pokemon
router.get('/:id', getPokemon);

// POST NEW Pokemon
router.post('/', createPokemon);

// DELETE Pokemon
router.delete('/:id', deletePokemon);

// UPDATE Pokemon
router.patch('/:id', updatePokemon);

module.exports = router;

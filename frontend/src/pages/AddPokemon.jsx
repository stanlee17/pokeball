import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import components & utils
import AddForm from '../components/Form/AddForm';

const AddPokemon = () => {
  // React hooks
  const navigate = useNavigate();

  // Initial state
  const [pokemonData, setPokemonData] = useState({
    name: '',
    image: '',
    description: '',
    ndex: '',
    height: '',
    weight: '',
    category: '',
    abilities: '',
    stats: {
      hp: '',
      atk: '',
      def: '',
      sp_atk: '',
      sp_def: '',
      spd: '',
    },
    types: [],
    weaknesses: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    name,
    description,
    image,
    ndex,
    height,
    weight,
    category,
    abilities,
    stats,
    types,
    weaknesses,
  } = pokemonData;

  const handleTypes = (selectedOption) => {
    console.log(selectedOption);

    let types = [];
    selectedOption.map((option) => types.push(option.value));

    setPokemonData({
      ...pokemonData,
      types: types,
    });
  };

  const handleWeaknesses = (selectedOption) => {
    console.log(selectedOption);

    let weaknesses = [];
    selectedOption.map((option) => weaknesses.push(option.value));

    setPokemonData({
      ...pokemonData,
      weaknesses: weaknesses,
    });
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setPokemonData({
      ...pokemonData,
      [name]: value,
    });
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;

    setPokemonData({
      ...pokemonData,
      stats: {
        ...stats,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const pokemon = {
      name,
      description,
      image,
      ndex,
      height,
      weight,
      category,
      abilities,
      stats,
      types,
      weaknesses,
    };
    console.log(pokemon);

    const response = await fetch('/api/pokemon', {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }

    if (response.ok) {
      setError(null);
      console.log('new pokemon added', data);
      navigate('/');
    }

    setLoading(false);
  };

  return (
    <AddForm
      pokemonData={pokemonData}
      setPokemonData={setPokemonData}
      handleTextChange={handleTextChange}
      handleTypes={handleTypes}
      handleWeaknesses={handleWeaknesses}
      handleStatsChange={handleStatsChange}
      handleSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default AddPokemon;

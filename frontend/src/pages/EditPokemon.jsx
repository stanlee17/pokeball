import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Import components & utils
import PokemonForm from '../components/common/PokemonForm';
import { selectDefaultValue } from '../utils/utils';

const EditPokemon = () => {
  // React hooks
  const navigate = useNavigate();
  const params = useParams();

  const [pokemonData, setPokemonData] = useState({
    id: params.id,
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

  const [preview, setPreview] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    id,
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

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      fetchPokemon(id);
      setLoading(false);

      return () => {
        effectRan.current = true;
      };
    }
  }, [id]);

  // Fetches pokemon from api based on id
  async function fetchPokemon(id) {
    try {
      const response = await fetch('/api/pokemon/' + id);
      const data = await response.json();

      setPokemonData((pokemonData) => ({
        ...pokemonData,
        ...data,
      }));
    } catch (error) {
      console.log(error?.response);
      setError(true);
    }
  }

  const handleTypes = (selectedOption) => {
    let types = [];
    selectedOption.map((option) => types.push(option.value));

    setPokemonData({
      ...pokemonData,
      types: types,
    });
  };

  const handleWeaknesses = (selectedOption) => {
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

    const response = await fetch('/api/pokemon/' + id, {
      method: 'PATCH',
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
    }
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <PokemonForm
      pokemonData={pokemonData}
      setPokemonData={setPokemonData}
      error={error}
      typesDefault={selectDefaultValue(types)}
      weaknessesDefault={selectDefaultValue(weaknesses)}
      handleSubmit={handleSubmit}
      handleTextChange={handleTextChange}
      handleTypes={handleTypes}
      handleWeaknesses={handleWeaknesses}
      handleStatsChange={handleStatsChange}
    />
  );
};

export default EditPokemon;

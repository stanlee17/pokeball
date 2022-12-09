import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import FileBase64 from 'react-file-base64';

// Import components & utils
import FormCard from '../components/common/FormCard';
import Button from '../components/common/Button';
import { options, colorStyles } from '../utils/utils';

const animatedComponents = makeAnimated();

const StyledForm = styled(Form)`
  .form-control {
    background-color: var(--text-input);
    border: none;
    border-radius: 5px;
    padding: 0.6rem 1rem;
    color: var(--text-white);

    :focus {
      box-shadow: none !important;
    }

    ::placeholder {
      color: var(--text-placeholder);
    }
  }

  .types-select {
    background-color: red;
  }

  .stats-title {
    font-weight: 700;
  }
`;

const AddPokemon = () => {
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

  const handleFileChange = (e) => {
    const file = e.target.value;

    setPokemonData({
      ...pokemonData,
      image: file,
    });

    console.log(pokemonData.image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pokemon = {name, description, image, ndex, height, weight, category, abilities, stats, types, weaknesses}
    console.log(pokemon)

    

    const response = await fetch('/api/pokemon', {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      console.log('new pokemon added', json);
    }
  };

  return (
    <FormCard title="Add New Pokemon">
      <StyledForm onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        {/* GROUP 1: Name, National Dex No, Category  */}
        <Row className="mt-4">
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Pokemon Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>National Dex No.</Form.Label>
              <Form.Control
                type="number"
                placeholder="National Dex Number"
                name="ndex"
                value={ndex}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={category}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* GROUP 2: Weight, Height, Abilities  */}
        <Row className="mt-4">
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter weight (kg)"
                name="weight"
                value={weight}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter height (cm)"
                name="height"
                value={height}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Abilities</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter abilities"
                name="abilities"
                value={abilities}
                onChange={handleTextChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* GROUP 3: Types, Weaknesses  */}
        <Row className="mt-4">
          <Col lg={6} md={6} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Types</Form.Label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={handleTypes}
                isMulti
                options={options}
                styles={colorStyles}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Weaknesses</Form.Label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={handleWeaknesses}
                isMulti
                options={options}
                styles={colorStyles}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* GROUP 4: HP, Def, Atk  */}
        <div className="my-5">
          <h4 className="stats-title">Stats</h4>
          <Row className="my-3">
            <Col lg={4} md={4} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>HP</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insert HP..."
                  name="hp"
                  value={stats.hp}
                  onChange={handleStatsChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Attack</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insert attack..."
                  name="atk"
                  value={stats.atk}
                  onChange={handleStatsChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Defense</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insert defense..."
                  name="def"
                  value={stats.def}
                  onChange={handleStatsChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* GROUP 4: SP Atk, SP Def, Speed  */}
          <Row className="my-3">
            <Col lg={4} md={4} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Special Attack</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insert sp attack..."
                  name="sp_atk"
                  value={stats.sp_atk}
                  onChange={handleStatsChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Special Defense</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insert sp defense..."
                  name="sp_def"
                  value={stats.sp_def}
                  onChange={handleStatsChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Speed</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insert speed..."
                  name="spd"
                  value={stats.spd}
                  onChange={handleStatsChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>

        {/* GROUP 6: DESCRIPTION */}
        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="6"
            type="text"
            placeholder="Enter description..."
            name="description"
            value={description}
            onChange={handleTextChange}
          />
        </Form.Group>
        {/* GROUP 7: POKEMON IMAGE */}
        <Form.Group className="mb-4" controlId="image">
          <Form.Label>Pokemon Image</Form.Label>
          <FileBase64
            multiple={false}
            onDone={({base64}) => setPokemonData({...pokemonData, image: base64})}
          />
        </Form.Group>
        <Button className="my-2">Add Pokemon</Button>
        {error && <div>{error}</div>}
      </StyledForm>
    </FormCard>
  );
};

export default AddPokemon;

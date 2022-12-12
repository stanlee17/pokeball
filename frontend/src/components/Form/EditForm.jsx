import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import FileBase64 from 'react-file-base64';

// Import components & utils
import FormCard from '../common/FormCard';
import Button from '../common/Button';
import { options, colorStyles } from '../../utils/utils';

// React Select Animation
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

const EditForm = ({
  pokemonData,
  setPokemonData,
  typesDefault,
  weaknessesDefault,
  handleSubmit,
  handleTextChange,
  handleTypes,
  handleWeaknesses,
  handleStatsChange,
  error,
  loading,
  preview,
  setPreview,
}) => {
  return (
    <FormCard title="Edit Pokemon">
      <StyledForm onSubmit={handleSubmit} encType="multipart/form-data">
        {/* GROUP 1: Name, National Dex No, Category  */}
        <Row className="mt-4">
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-4">
              <Form.Label>Pokemon Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={pokemonData.name}
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
                value={pokemonData.ndex}
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
                value={pokemonData.category}
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
                value={pokemonData.weight}
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
                value={pokemonData.height}
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
                value={pokemonData.abilities}
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
                key={typesDefault}
                defaultValue={typesDefault}
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
                key={weaknessesDefault}
                defaultValue={weaknessesDefault}
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
                  value={pokemonData.stats.hp}
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
                  value={pokemonData.stats.atk}
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
                  value={pokemonData.stats.def}
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
                  value={pokemonData.stats.sp_atk}
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
                  value={pokemonData.stats.sp_def}
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
                  value={pokemonData.stats.spd}
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
            rows="8"
            type="text"
            placeholder="Enter description..."
            name="description"
            value={pokemonData.description}
            onChange={handleTextChange}
          />
        </Form.Group>

        {/* Pokemon Image Preview */}
        {preview && !loading && (
          <div className="text-center mt-2 mb-5">
            <h6>Current Pokemon Image</h6>
            <img src={pokemonData.image} alt="preview" />
          </div>
        )}

        {/* GROUP 7: POKEMON IMAGE */}
        <Form.Group className="mb-4" controlId="image">
          <Form.Label>Pokemon Image</Form.Label>
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => {
              setPokemonData({ ...pokemonData, image: base64 });
              setPreview(false);
            }}
          />
        </Form.Group>
        <Button className="my-2" loadingState={loading}>
          {loading ? '...' : 'Edit Pokemon'}
        </Button>
        {error && <div>{error}</div>}
      </StyledForm>
    </FormCard>
  );
};

export default EditForm;

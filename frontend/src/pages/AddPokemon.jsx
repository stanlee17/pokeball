import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// Import components
import FormCard from '../components/common/FormCard';
import Button from '../components/common/Button';

const StyledForm = styled(Form)`
  .form-control {
    border-radius: 0;
    background-color: var(--text-input);
    border: none;
    padding: 0.6rem 1rem;
    color: var(--text-white);

    :focus {
      box-shadow: none !important;
    }

    ::placeholder {
      color: var(--text-placeholder);
    }
  }

  .next-btn {
    display: flex;
    justify-content: right;
  }

  .next-btn button:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const AddPokemon = () => {
  const [page, setPage] = useState(0);

  const FormTitles = ['Basic Pokemon Info', 'Stats & Others'];

  return (
    <FormCard title="Add Pokemon" subtitle={FormTitles[page]}>
      <StyledForm>
        {/* GROUP 1: Name, National Dex No, Category  */}
        <Row className="mt-3">
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Pokemon Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>National Dex No.</Form.Label>
              <Form.Control type="number" placeholder="National Dex Number" />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter category" />
            </Form.Group>
          </Col>
        </Row>

        {/* GROUP 2: Weight, Height, Abilities  */}
        <Row className="mt-3">
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control type="number" placeholder="Enter weight (kg)" />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control type="number" placeholder="Enter height (cm)" />
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Abilities</Form.Label>
              <Form.Control type="text" placeholder="Enter abilities" />
            </Form.Group>
          </Col>
        </Row>
        {/* GROUP 3: DESCRIPTION */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            type="text"
            placeholder="Enter description..."
          />
        </Form.Group>
        {/* GROUP 5: POKEMON IMAGE */}
        <Form.Group className="mb-3" controlId="pokemon_image">
          <Form.Label>Pokemon Image</Form.Label>
          <Form.Control type="file" className="mb-4" />
        </Form.Group>
        <div className="next-btn">
          <Button
            disabled={page === 0}
            backgroundColor="#505050"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </Button>
          <Button
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </Button>
        </div>
      </StyledForm>
    </FormCard>
  );
};

export default AddPokemon;

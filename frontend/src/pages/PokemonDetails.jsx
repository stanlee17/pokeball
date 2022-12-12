import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const StyledButton = styled(Link)`
  display: inline-block;
  background-color: var(--brand-300);
  color: var(--text-black);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: 700;

  &:hover {
    color: var(--text-black);
  }
`;

const PokemonDetails = () => {
  const params = useParams();

  return (
    <div>
      PokemonDetails
      <StyledButton to={`/pokemon/edit/${params.id}`}>Edit</StyledButton>
    </div>
  );
};

export default PokemonDetails;

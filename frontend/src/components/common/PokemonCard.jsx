import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import utils
import { nationalDex } from '../../utils/utils';

const Card = styled.div`
  overflow: hidden;
  background-color: var(--primary-dark);
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 150ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardBody = styled.div`
  .card-img {
    margin-bottom: 5px;
  }

  .card-ndex {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-lgrey);
  }

  .card-title {
    margin-top: 0.8rem;
  }

  .card-types {
    margin-top: 0.6rem;
    font-size: 0.8rem;
    font-weight: 500;

    div:not(:last-child) {
      margin-right: 0.7rem;
    }
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    color: white;
  }
`;

const PokemonCard = ({ id, name, img, types, ndex }) => {
  return (
    <StyledLink to={`/pokemon/${id}`}>
      <Card key={id}>
        <CardBody>
          <img src={img} alt={name} className="card-img" />
          <div className="card-ndex">{nationalDex(ndex)}</div>
          <h4 className="card-title">{name}</h4>
          <div className="card-types">
            {types.map((type) => (
              <div className={`${type.toLowerCase()}-type`}>{type}</div>
            ))}
          </div>
        </CardBody>
      </Card>
    </StyledLink>
  );
};

export default PokemonCard;

import React from 'react';
import styled from 'styled-components';

// Import utilities
import { nationalDex } from '../utils/utils';

const Card = styled.div`
  overflow: hidden;
  background-color: var(--primary-dark);
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  max-width: 250px;
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
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-lgrey);
  }

  .card-title {
    margin-top: 0.8rem;
  }

  .card-types {
    margin-top: 0.6rem;
    font-size: 0.8rem;

    div:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

const InfoCard = ({ name, img, types, ndex }) => {
  return (
    <Card>
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
  );
};

export default InfoCard;

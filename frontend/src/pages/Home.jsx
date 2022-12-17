import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Import components & utils
import Type from '../components/common/Type';
import { nationalDex } from '../utils/utils';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  margin: 4rem 0;
`;

const StyledCard = styled.div`
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

const Home = () => {
  const [pokedex, setPokedex] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokedex = async () => {
      const response = await fetch('/api/pokemon');
      const data = await response.json();

      if (!response.ok) {
        setError(false);
      }

      if (response.ok) {
        setPokedex(data);
        setLoading(false);
      }
    };

    fetchPokedex();
  }, []);

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return <Container>Couldn't retrieve data at this time</Container>;
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <div className="home">
        <Wrapper>
          {pokedex.map((pokemon) => (
            <StyledLink to={`/pokemon/${pokemon._id}`}>
              <StyledCard>
                <CardBody>
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="card-img"
                  />
                  <div className="card-ndex">{nationalDex(pokemon.ndex)}</div>
                  <h4 className="card-title">{pokemon.name}</h4>
                  <div className="card-types">
                    {pokemon.types.map((type) => (
                      <Type type={type}>{type}</Type>
                    ))}
                  </div>
                </CardBody>
              </StyledCard>
            </StyledLink>
          ))}
        </Wrapper>
      </div>
    </Container>
  );
};

export default Home;

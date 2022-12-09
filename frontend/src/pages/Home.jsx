import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

// Components
import PokemonCard from '../components/common/PokemonCard';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  margin: 4rem 0;
`;

const Home = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    const fetchPokedex = async () => {
      const response = await fetch('/api/pokemon');
      const json = await response.json();

      if (response.ok) {
        setPokedex(json);
      }
    };

    fetchPokedex();
  }, []);

  return (
    <Container>
      <div className="home">
        <Wrapper>
          {pokedex &&
            pokedex.map((pokemon) => (
              <PokemonCard
                key={pokemon._id}
                ndex={pokemon.ndex}
                name={pokemon.name}
                img={pokemon.image}
                types={pokemon.types}
              />
            ))}
        </Wrapper>
      </div>
    </Container>
  );
};

export default Home;

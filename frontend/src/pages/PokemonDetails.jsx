import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

// Import components & utils
import Progress from '../components/common/Progress';
import { nationalDex, typeOptions } from '../utils/utils';

const Styles = styled.div`
  margin: 4rem 0;
`;

const Profile = styled.div`
  background-color: var(--primary-dark);
  border-radius: 10px;
  max-width: 40%;
  padding: 2rem;

  .pokemon-info {
    text-align: center;
    padding-bottom: 1.5rem;
  }

  .pokemon-image {
    max-width: 200px;
    margin-bottom: 0.5rem;
  }

  .pokemon-ndex {
    margin: 0;
    font-weight: 700;
    color: ${(props) => props.type};
    font-size: 1.2rem;
  }

  .pokemon-name {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const StyledStats = styled.div`
  div {
    display: flex;
    align-items: center;

    p {
      display: flex;
      width: 40%;
      margin: 0;
      font-weight: 700;
    }

    span {
      padding-left: 5px;
      font-weight: 400;
    }
  }
`;

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
  // HOOKS
  const params = useParams();

  // Initial states
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch('/api/pokemon/' + id);
      const data = await response.json();

      if (!response.ok) {
        setError(false);
      }

      if (response.ok) {
        setPokemonData(data);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  // Gets the first hex color type of pokemon
  const getTypeColor = (type) =>
    typeOptions.find((option) => option.name === type).color;

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return <Container className="text-center">Error</Container>;
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return <Container className="text-center">Loading...</Container>;
  }

  return (
    <Container>
      <Styles>
        <Profile type={getTypeColor(types[0])}>
          <div className="pokemon-info">
            <img className="pokemon-image" src={image} alt={name} />
            <p className="pokemon-ndex">{nationalDex(ndex)}</p>
            <p className="pokemon-name">{name}</p>
          </div>
          <div className="pokemon-stats">
            <h5>Stats</h5>
            <StyledStats>
              <div>
                <p>
                  HP: <span>{stats.hp}</span>
                </p>
                <Progress data={stats.hp} color={getTypeColor(types[0])} />
              </div>
              <div>
                <p>
                  ATK: <span>{stats.atk}</span>
                </p>
                <Progress data={stats.atk} color={getTypeColor(types[0])} />
              </div>
              <div>
                <p>
                  DEF: <span>{stats.def}</span>
                </p>
                <Progress data={stats.def} color={getTypeColor(types[0])} />
              </div>
              <div>
                <p>
                  SP ATK: <span>{stats.sp_atk}</span>
                </p>
                <Progress data={stats.sp_atk} color={getTypeColor(types[0])} />
              </div>
              <div>
                <p>
                  SP DEF: <span>{stats.sp_def}</span>
                </p>
                <Progress data={stats.sp_def} color={getTypeColor(types[0])} />
              </div>
              <div>
                <p>
                  SPD: <span>{stats.spd}</span>
                </p>
                <Progress data={stats.spd} color={getTypeColor(types[0])} />
              </div>
            </StyledStats>
          </div>
        </Profile>
      </Styles>
      {/* <StyledButton to={`/pokemon/edit/${params.id}`}>Edit</StyledButton> */}
    </Container>
  );
};

export default PokemonDetails;

import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
  BsFillPersonFill,
  BsFillBarChartFill,
  BsChevronDoubleDown,
} from 'react-icons/bs';
import { IoInformationCircleOutline, IoPricetag } from 'react-icons/io5';

// Import components & utils
import Progress from '../components/common/Progress';
import Type from '../components/common/Type';
import Weakness from '../components/common/Weakness';
import { nationalDex, typeOptions } from '../utils/utils';

const Styles = styled.div`
  margin: 4rem 0;
  display: flex;
`;

const Profile = styled.div`
  background-color: var(--primary-dark);
  border-radius: 10px;
  min-width: 35%;
  padding: 2rem;

  .heading {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    h5 {
      font-weight: 700;
      margin: 0;
    }
  }

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
    color: ${(props) => props.typeColor};
    font-size: 1.2rem;
  }

  .pokemon-name {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .pokemon-stats {
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

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 3rem;

  .heading {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;

    h4 {
      margin: 0;
      font-weight: 700;
    }
  }

  .description {
    p {
      color: var(--text-paragraph);
      font-weight: 300;
      line-height: 1.8;
    }
  }

  .details {
    display: flex;
    justify-content: center;
    background-color: var(--primary-dark);
    border-radius: 10px;
    padding: 2.5rem;

    .height,
    .weight,
    .category,
    .abilities {
      text-align: center;
      padding: 0 3rem;

      h5 {
        color: ${(props) => props.typeColor};
        font-weight: 700;
        margin: 0 0 5px 0;
      }

      p {
        font-weight: 500;
        margin: 0;
      }
    }
  }

  .types {
    .types-wrapper {
      div:not(:last-child) {
        margin-right: 1rem;
      }
    }

    .heading,
    .types-wrapper {
      margin: 1rem 0;
    }
  }

  .weaknesses {
    .weaknesses-wrapper {
      div:not(:last-child) {
        margin-right: 1rem;
      }
    }

    .heading,
    .weaknesses-wrapper {
      margin-top: 1rem;
    }
  }
`;

// const StyledButton = styled(Link)`
//   display: inline-block;
//   background-color: var(--brand-300);
//   color: var(--text-black);
//   border-radius: 5px;
//   padding: 0.5rem 1rem;
//   font-weight: 700;

//   &:hover {
//     color: var(--text-black);
//   }
// `;

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
        <Profile typeColor={getTypeColor(types[0])}>
          <div className="pokemon-info">
            <img className="pokemon-image" src={image} alt={name} />
            <p className="pokemon-ndex">{nationalDex(ndex)}</p>
            <p className="pokemon-name">{name}</p>
          </div>
          <div className="pokemon-stats">
            <div className="heading">
              <BsFillBarChartFill
                color={getTypeColor(types[0])}
                size="35px"
                style={{ paddingRight: '10px' }}
              />
              <h5>Stats</h5>
            </div>
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
        <StyledDetails typeColor={getTypeColor(types[0])}>
          {/* DESCRIPTION */}
          <div className="description">
            <div className="heading">
              <BsFillPersonFill
                color={getTypeColor(types[0])}
                size="40px"
                style={{ paddingRight: '10px' }}
              />
              <h4>Description</h4>
            </div>
            <p>{description}</p>
          </div>
          {/* INFO */}
          <div className="info">
            <div className="heading">
              <IoInformationCircleOutline
                color={getTypeColor(types[0])}
                size="40px"
                style={{ paddingRight: '10px' }}
              />
              <h4>Info</h4>
            </div>
            <div className="details">
              <div className="height">
                <h5>{height}cm</h5>
                <p>Height</p>
              </div>
              <div className="weight">
                <h5>{weight}kg</h5>
                <p>Weight</p>
              </div>
              <div className="category">
                <h5>{category}</h5>
                <p>Category</p>
              </div>
              <div className="abilities">
                <h5>{abilities}</h5>
                <p>Abilities</p>
              </div>
            </div>
          </div>
          {/* TYPES */}
          <div className="types">
            <div className="heading">
              <IoPricetag
                color={getTypeColor(types[0])}
                size="40px"
                style={{ paddingRight: '10px' }}
              />
              <h4>Types</h4>
            </div>
            <div className="types-wrapper">
              {types.map((type) => (
                <Type type={type} lg borderRadius>
                  {type}
                </Type>
              ))}
            </div>
          </div>
          {/* WEAKNESSES */}
          <div className="weaknesses">
            <div className="heading">
              <BsChevronDoubleDown
                color={getTypeColor(types[0])}
                size="40px"
                style={{ paddingRight: '10px' }}
              />
              <h4>Weaknesses</h4>
            </div>
            <div className="weaknesses-wrapper">
              {weaknesses.map((weakness) => (
                <Weakness weakness={weakness} lg borderRadius>
                  {weakness}
                </Weakness>
              ))}
            </div>
          </div>
        </StyledDetails>
      </Styles>
      {/* <StyledButton to={`/pokemon/edit/${params.id}`}>Edit</StyledButton> */}
    </Container>
  );
};

export default PokemonDetails;

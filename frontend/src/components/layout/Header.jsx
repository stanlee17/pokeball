import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Pokeball from '../../images/pokeball.svg';

const StyledHeader = styled.header`
  background-color: var(--primary-dark);
  padding: 1.2rem 0;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    display: flex;

    a {
      font-size: 1.1rem;
      font-weight: 500;
    }

    a:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
`;

const StyledLogo = styled(Link)`
  display: flex;
  font-size: 1.8rem;
  font-weight: 800;

  img {
    padding-right: 0.6rem;
  }

  &:hover {
    color: var(--text-white);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledLogo to="/">
            <img src={Pokeball} alt="" />
            Pokeball
          </StyledLogo>
          <div className="nav-links">
            <Link to="/pokemon/add">Add Pokemon</Link>
            {/* <Link to="/user/profile">Profile</Link> */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

export default Header;

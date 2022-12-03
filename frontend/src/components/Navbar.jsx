import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

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

    a:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledLink to="/">Pokeball</StyledLink>
          <div className="nav-links">
            <Link to="/pokemon/add">Add Pokemon</Link>
            <Link to="/user/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

export default Navbar;

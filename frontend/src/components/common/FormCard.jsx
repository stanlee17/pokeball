import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  .container {
    display: flex;
    flex-direction: column;
  }
  .lead-card {
    margin: auto;
    padding: 3rem;
    background-color: var(--primary-dark);
    min-width: ${(props) => (props.authform ? '40vw' : '60vw')};
  }
  .lead-card .card-title {
    font-size: 2rem;
    padding-bottom: 5px;
    font-weight: 600;
    text-align: center;
  }

  .card-subtitle {
    padding-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-lbrand);
    text-align: center;
  }
`;

const FormCard = ({ title, subtitle, authform, children }) => {
  return (
    <Styles authform={authform ? 1 : 0}>
      <Container>
        <div className="lead-card">
          <p className="card-title">{title}</p>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
          <div>{children}</div>
        </div>
      </Container>
    </Styles>
  );
};

export default FormCard;

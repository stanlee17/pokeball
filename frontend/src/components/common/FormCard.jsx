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
    padding: 4rem;
    border-radius: 0.5rem;
    background-color: var(--primary-dark);
    min-width: ${(props) => (props.authform ? '50%' : '100%')};
  }
  .lead-card .card-title {
    font-size: 2rem;
    padding-bottom: 5px;
    font-weight: 600;
    text-align: center;
  }
`;

const FormCard = ({ title, authform, children }) => {
  return (
    <Styles authform={authform ? 1 : 0}>
      <Container>
        <div className="lead-card">
          <p className="card-title mb-4">{title}</p>
          <div>{children}</div>
        </div>
      </Container>
    </Styles>
  );
};

export default FormCard;

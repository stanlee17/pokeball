import React from 'react';
import styled from 'styled-components';

// Import components & utils
import { typeOptions } from '../../utils/utils';

const StyledTypes = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  color: var(--background-dark);
  font-weight: 700;
  padding: ${(props) => (props.lg ? '0.5rem 1.5rem' : '0.3rem 0.8rem')};
  border-radius: ${(props) => (props.borderRadius ? '5rem' : '5px')};
`;

const Type = ({ type, lg, borderRadius, children }) => {
  const color = typeOptions.find((option) => option.name === type).color;

  return (
    <StyledTypes
      lg={lg ? 1 : 0}
      borderRadius={borderRadius ? 1 : 0}
      color={color}
      type={type}
    >
      {children}
    </StyledTypes>
  );
};

export default Type;

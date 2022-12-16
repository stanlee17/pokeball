import React from 'react';
import styled from 'styled-components';

// Import components & utils
import { typeOptions } from '../../utils/utils';

const StyledTypes = styled.div`
  display: inline-block;
  background-color: ${(props) => props.findType.color};
  color: var(--background-dark);
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
`;

const Types = ({ type, children }) => {
  const findType = typeOptions.find((option) => option.name === type);

  return (
    <StyledTypes findType={findType} type={type}>
      {children}
    </StyledTypes>
  );
};

export default Types;

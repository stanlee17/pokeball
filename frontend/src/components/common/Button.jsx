import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.backgroundColor || 'var(--brand-primary)'};
  color: var(--text-white);
  padding: 0.6rem 1.8rem;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s;

  :hover {
    transform: ${(props) => (props.disabled ? 'none' : 'scale(1.05)')};
  }

  :active {
    background-color: ${(props) => (props.disabled ? 'none' : '#881337')};
  }
`;

const Button = ({ backgroundColor, children, onClick, disabled }) => {
  return (
    <StyledButton
      onClick={onClick}
      type={onClick ? 'button' : 'submit'}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

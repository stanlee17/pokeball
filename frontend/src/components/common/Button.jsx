import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || 'var(--brand-300)'};
  color: var(--background-dark);
  min-width: 100%;
  padding: 0.7rem 1.8rem;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: transform 150ms ease-in;

  :hover {
    transform: ${(props) => (props.disabled ? 'none' : 'scale(1.01)')};
  }
`;

const Button = ({
  backgroundColor,
  children,
  loadingState,
  onClick,
  className,
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={onClick ? 'button' : 'submit'}
      disabled={loadingState}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

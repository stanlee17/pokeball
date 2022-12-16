import React, { useState } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  background-color: var(--progress-bg);
  border-radius: 5rem;
  margin: 1rem 0;
  width: 100%;
  height: 1rem;

  .progress-filled {
    background-color: ${(props) => props.color};
    border-radius: 5rem;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 1s ease 0.3s;
  }
`;

const Progress = ({ data, color }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${data}%`,
    };

    setStyle(newStyle);
  });

  return (
    <ProgressBar color={color}>
      <div className="progress-filled" style={style}></div>
    </ProgressBar>
  );
};

export default Progress;

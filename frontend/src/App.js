import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages & Components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const StyledPages = styled.div`
  flex: 1;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <StyledPages>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </StyledPages>
      <Footer />
    </div>
  );
}

export default App;

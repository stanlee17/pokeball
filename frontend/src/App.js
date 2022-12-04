import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages & Components
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddPokemon from './pages/AddPokemon';

const StyledPages = styled.div`
  flex: 1;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <StyledPages>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/add" element={<AddPokemon />} />
        </Routes>
      </StyledPages>
      <Footer />
    </div>
  );
}

export default App;

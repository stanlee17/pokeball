import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages & Components
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddPokemon from './pages/AddPokemon';
import EditPokemon from './pages/EditPokemon';
import PokemonDetails from './pages/PokemonDetails';

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
          <Route path="/pokemon/edit/:id" element={<EditPokemon />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </StyledPages>
      <Footer />
    </div>
  );
}

export default App;

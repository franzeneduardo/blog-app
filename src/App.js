import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import SharedHeader from './components/SharedHeader';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <SharedHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;

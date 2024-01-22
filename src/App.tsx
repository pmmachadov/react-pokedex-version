import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import Sidebar from './components/Sidebar';

function App () {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/pokemon/:id" element={ <PokemonDetails /> } />
            </Routes>
        </Router>
    );
}

export default App;

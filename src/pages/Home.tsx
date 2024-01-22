import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import { fetchPokemon } from '../services/PokemonService';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            fetchPokemon(searchTerm)
                .then(data => {
                    // Suponiendo que la respuesta es un array de Pokémon
                    setPokemons(data.results);
                })
                .catch(error => {
                    console.error(error);
                    setPokemons([]);
                });
        }
    }, [searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <SearchBar onSearch={ handleSearch } />
            <div>
                { pokemons.length > 0 ? (
                    pokemons.map(pokemon => (
                        <PokemonCard key={ pokemon.name } pokemon={ pokemon } />
                    ))
                ) : (
                    <p>No se encontraron Pokémon.</p>
                ) }
            </div>
        </div>
    );
};

export default Home;

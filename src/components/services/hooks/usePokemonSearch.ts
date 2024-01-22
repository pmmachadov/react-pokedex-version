// src/hooks/usePokemonSearch.ts

import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/PokemonService';

interface Pokemon {
    name: string;
    url: string;
    // Añade aquí más propiedades según tu API
}

const usePokemonSearch = (searchTerm: string) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchTerm) {
            setPokemons([]);
            return;
        }

        const fetchPokemons = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await fetchPokemon(searchTerm);
                // Asegúrate de adaptar esta línea según cómo tu API devuelve los datos
                setPokemons(data.results || []);
            } catch (err) {
                setError('Error al buscar Pokémon');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemons();
    }, [searchTerm]);

    return { pokemons, isLoading, error };
};

export default usePokemonSearch;

// src/components/PokemonCard.tsx

import React from 'react';

interface Pokemon {
    name: string;
    url: string;
    // Aquí puedes agregar más propiedades según tu API
}

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div>
            <h3>{ pokemon.name }</h3>
            {/* Suponiendo que la URL lleva a una imagen del Pokémon */ }
            <img src={ pokemon.url } alt={ pokemon.name } />
            {/* Agrega aquí más detalles si es necesario */ }
        </div>
    );
};

export default PokemonCard;

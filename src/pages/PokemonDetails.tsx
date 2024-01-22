// src/components/PokemonDetails.tsx

import React from 'react';

interface Pokemon {
    name: string;
    image: string; // URL de la imagen
    type: string[];
    abilities: string[];
    // Agrega aquí más propiedades según los datos de tu API
}

interface PokemonDetailsProps {
    pokemon: Pokemon;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
    return (
        <div>
            <h2>{ pokemon.name }</h2>
            <img src={ pokemon.image } alt={ pokemon.name } />
            <h3>Tipo</h3>
            <ul>
                { pokemon.type.map((type, index) => (
                    <li key={ index }>{ type }</li>
                )) }
            </ul>
            <h3>Habilidades</h3>
            <ul>
                { pokemon.abilities.map((ability, index) => (
                    <li key={ index }>{ ability }</li>
                )) }
            </ul>
            {/* Agrega aquí más detalles como estadísticas, movimientos, etc. */ }
        </div>
    );
};

export default PokemonDetails;

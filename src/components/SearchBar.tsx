// src/components/SearchBar.tsx

import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(term);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ term }
                onChange={ (e) => setTerm(e.target.value) }
                placeholder="Buscar Pokémon"
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;

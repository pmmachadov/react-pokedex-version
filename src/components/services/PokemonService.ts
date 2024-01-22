const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async (query: string) => {
    try {
        const response = await fetch(`${API_URL}${query}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
};

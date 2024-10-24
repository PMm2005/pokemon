import React, { useState } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
    const data = await response.json();
    const pokemonNames = data.results.map((pokemon) => pokemon.name);
    setPokemonList(pokemonNames);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

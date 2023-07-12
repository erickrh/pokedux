import { PokemonCard } from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon?.sprites?.other['official-artwork']?.front_default}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export { PokemonList };
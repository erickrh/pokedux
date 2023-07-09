import './PokemonList.css';
import PropTypes from 'prop-types';
import { PokemonCard } from './PokemonCard';

function PokemonList({ pokemons }) {
  return (
    <div className="PokemonList">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id}/>
      ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export { PokemonList };
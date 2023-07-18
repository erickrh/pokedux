import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { StarButton } from './StarButton';
import { setFavorite } from '../slices/dataSlice';
import './PokemonList.css';

const PokemonCard = ({ name, image, types , id, favorite }) => {
  const dispatch = useDispatch();

  // Capitalice function
  const capitalizeWord = word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Show pokemons type.
  const arrayPokemonTypes = types.map(type => type.type.name);
  const uppercaseTypes = arrayPokemonTypes.map(type => capitalizeWord(type));
  const pokemonTypes = uppercaseTypes.join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  };

  if (id === 249) image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png';

  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={pokemonTypes} />
    </Card>
  );
};

export { PokemonCard };

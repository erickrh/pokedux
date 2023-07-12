import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';

const PokemonCard = ({ name, image, types }) => {

  // Capitalice function
  const capitalizeWord = word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const arrayPokemonTypes = types.map(type => type.type.name);
  const uppercaseTypes = arrayPokemonTypes.map(type => capitalizeWord(type));
  const pokemonTypes = uppercaseTypes.join(', ');

  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description={pokemonTypes} />
    </Card>
  );
};

export { PokemonCard };

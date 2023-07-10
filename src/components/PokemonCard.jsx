import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StarOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function PokemonCard({ name }) {
  return (
    <Card
      title={name}
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='Ditto' />}
      extra={<StarOutlined />}
    >
      <Meta description='Normal, Mistery' />
    </Card>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
}

export { PokemonCard };
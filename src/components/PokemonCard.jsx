import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StarOutlined } from '@ant-design/icons';

function PokemonCard() {
  return (
    <Card
      title='Ditto'
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='Ditto' />}
      extra={<StarOutlined />}
    >
      <Meta description='Normal, Mistery' />
    </Card>
  );
}

export { PokemonCard };
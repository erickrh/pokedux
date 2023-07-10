import React from 'react';
import './App.css'
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col } from 'antd';
import { ReactComponent as Logo } from './statics/logo.svg';
import { usePokeAPI } from './usePokeAPI';

function App() {
  const { pokemons } = usePokeAPI();

  React.useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  return (
    <div className="app">
      <Col span={4} offset={10}>
        <Logo className='Logo' />
      </Col>

      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App

import React from 'react';
import { Col } from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { usePokeAPI } from './usePokeAPI';
import { Actions } from './actions';
import { ReactComponent as Logo } from './assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const { getPokemon } = usePokeAPI();

  const { getPokemonsWithDetails } = Actions();

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <Logo className='Logo' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}


export default App;

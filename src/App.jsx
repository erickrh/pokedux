/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { usePokeAPI } from './usePokeAPI';
import { setPokemons as setPokemonsActions } from './actions';
import { ReactComponent as Logo } from './assets/logo.svg';
import './App.css';

function App({ pokemons, setPokemons }) {
  const { getPokemon } = usePokeAPI();
  
  console.log(pokemons)
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  setPokemons: value => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

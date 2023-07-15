import React from 'react';
import { Col, Row, Spin } from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { usePokeAPI } from './usePokeAPI';
import { Actions } from './actions';
import { ReactComponent as Logo } from './assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const { getPokemon } = usePokeAPI();

  const { setLoading, getPokemonsWithDetails } = Actions();

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.get('pokemons')).toJS();
  const loading = useSelector(state => state.get('loading'));
  
  React.useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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

      {loading ? (
        <Row justify="center" align="middle" style={{ height: '50vh' }}>
          <Col>
            <Spin spinning size='large'/>
          </Col>
        </Row>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
      
      
    </div>
  );
}


export default App;

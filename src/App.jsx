import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { usePokeAPI } from './usePokeAPI';
import { Actions } from './actions';
import { PokemonList } from './components/PokemonList';
import { Col, Row, Spin } from 'antd';
import { Searcher } from './components/Searcher';
import { ReactComponent as Logo } from './assets/logo.svg';
import './App.css';

function App() {
  const { getPokemon } = usePokeAPI();

  const { setLoading, getPokemonsWithDetails } = Actions();

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual)).toJS();
  const loading = useSelector(state => state.getIn(['ui', 'loading']));
  
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

import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { PokemonList } from './components/PokemonList';
import { Col, Row, Spin } from 'antd';
import { Searcher } from './components/Searcher';
import { ReactComponent as Logo } from './assets/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual); // shallowEqual ayuda en las comparaciones, evita re renders.
  const loading = useSelector(state => state.ui.loading);
  
  React.useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
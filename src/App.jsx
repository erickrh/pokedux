import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Row, Spin } from 'antd';
import { Searcher } from './components/Searcher';
import { ReactComponent as Logo } from './assets/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import PaginatedItems from './components/PaginatedItems';
import Pagination from './components/Pagination';
import { PokemonList } from './components/PokemonList';
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
      <Col span={6} offset={9}>
        <Logo className='Logo' />
      </Col>
      <Col span={12} offset={6}>
        <Searcher />
      </Col>

      {loading ? (
        <Row justify="center" align="middle" style={{ height: '50vh' }}>
          <Col>
            <Spin spinning size='large'/>
          </Col>
        </Row>
      ) : (
      // <>
      //   <Pagination />
      //   <PaginatedItems itemsPerPage={20} pokemons={pokemons} />
      // </>
        
        <Pagination pokemons={pokemons}/>
      )}
    </div>
  );
}

export default App;
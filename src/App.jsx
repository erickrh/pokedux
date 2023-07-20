import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Row, Spin, Pagination } from 'antd';
import { Searcher } from './components/Searcher';
import { ReactComponent as Logo } from './assets/logo.svg';
import { fetchPokemonsWithDetails, setCurrentPage } from './slices/dataSlice';
import { PokemonList } from './components/PokemonList';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual); // shallowEqual ayuda en las comparaciones, evita re renders.
  const loading = useSelector(state => state.ui.loading);
  const currentPage = useSelector(state => state.data.currentPage);
  const count = useSelector(state => state.data.count);
  
  React.useEffect(() => {
    dispatch(fetchPokemonsWithDetails(currentPage));
  }, [currentPage]);

  const handlePageChange = page => {
    dispatch(setCurrentPage(page));
  };

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
        <>
          {/* Items */}
          <PokemonList pokemons={pokemons} />

          <Col offset={10}>
            <Pagination
              current={currentPage}
              total={count}
              pageSize={20}
              onChange={handlePageChange}
              size='small'
              showSizeChanger={false}
              showLessItems
              responsive
            />
          </Col>
        </>
      )}
    </div>
  );
}

export default App;
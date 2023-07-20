import { useState, useEffect } from 'react';
import { Pagination as AntPagination, Col } from 'antd';
import axios from 'axios';
import { getPokemonDetails } from '../usePokeAPI';
import { PokemonList } from './PokemonList';

function Pagination() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Función para obtener la lista de Pokémon desde la API
  const fetchPokemonList = async (page) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
      );
      const res = response.data.results;
      const chuzo = await Promise.all(
        res.map(pokemon => getPokemonDetails(pokemon))
      );
      setPokemonList(chuzo);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  // Llamar a fetchPokemonList cuando el componente se monte y cuando cambie la página
  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  // Función para manejar el cambio de página
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Items */}
      <PokemonList pokemons={pokemonList} />

      <Col offset={10}>
        {/* Paginación */}
        <AntPagination
          current={currentPage}
          total={1000}
          pageSize={20}
          onChange={handlePageChange}
          size='small'
          showSizeChanger={false}
          showLessItems
          responsive
        />
      </Col>
    </>
  );
}

export default Pagination;
import { useState, useEffect } from 'react';
import { Pagination as AntPagination } from 'antd';
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
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`
      );
      const res = response.data.results;
      const chuzo = await Promise.all(
        res.map(pokemon => getPokemonDetails(pokemon))
      );
      setPokemonList(chuzo);
      console.log(chuzo);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  // Llamar a fetchPokemonList cuando el componente se monte y cuando cambie la página
  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  // Función para manejar el cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Renderizar los elementos de la lista */}
      {/* <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul> */}

      <PokemonList pokemons={pokemonList} />

      {/* Paginación */}
      <AntPagination
        current={currentPage}
        total={1000} // Establece el número total de resultados (1000 en este ejemplo)
        pageSize={20} // Establece el número de resultados por página (10 en este ejemplo)
        onChange={handlePageChange}
        size='small'
        showSizeChanger={false}
        showLessItems
        responsive
      />
    </>
  );
}

export default Pagination;
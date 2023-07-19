/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactPaginate from 'react-paginate';
import { PokemonList } from './PokemonList';
import './PaginatedItems.css';

function PaginatedItems({ itemsPerPage, pokemons }) {
  const [itemOffset, setItemOffset] = React.useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pokemons.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        className='ulPaginate'
        pageClassName='liPaginate'
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
      <PokemonList pokemons={currentItems}/>
    </>
  );
}

export default PaginatedItems;
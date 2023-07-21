import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchValue, setPokemons } from '../slices/dataSlice';
import { setRefreshTrigger, setOnSearching } from '../slices/uiSlice';
import { getPokemonBySearch } from '../usePokeAPI';

function Searcher({
  searchValue,
  onSearching,
  refreshTrigger
}) {
  const dispatch = useDispatch();

  const handleChangeValue = value => {
    dispatch(setSearchValue(value))
  };

  const fetchSearchPokemon = async () => {
    if (searchValue.length > 0) {
      const pokemonToLowerCase = searchValue.toLowerCase();
      const resPokemon = await getPokemonBySearch(pokemonToLowerCase);
      if (resPokemon !== undefined) {
        const result = [{...resPokemon}];
        dispatch(setPokemons(result));
        dispatch(setOnSearching(true));
      } else {
        console.log('No found');
      }
    } else {
      console.log('Change placeholder');
    }
  }

  React.useEffect(()=> {
    if (!searchValue && onSearching) {
      dispatch(setRefreshTrigger(!refreshTrigger));
      dispatch(setOnSearching(false));
    }
  }, [searchValue])
  
  return (
    <Input.Search
      value={searchValue}
      placeholder='Search...'
      enterButton
      onChange={e => handleChangeValue(e.target.value)}
      onPressEnter={fetchSearchPokemon}
      onSearch={fetchSearchPokemon}
    />
  );
}

export { Searcher };
import { Input } from 'antd';
import { setSearchValue, setPokemons, setRefreshTrigger } from '../slices/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonBySearch } from '../usePokeAPI';

function Searcher({ searchValue }) {
  const dispatch = useDispatch();
  // const refreshTrigger = useSelector(state => state.data.refreshTrigger);

  const handleChangeValue = value => {
    dispatch(setSearchValue(value))
  };

  const fetchSearchPokemon = async () => {
    if (searchValue.length > 0) {
      const pokemonToLowerCase = searchValue.toLowerCase();
      const resPokemon = await getPokemonBySearch(pokemonToLowerCase);
      const result = [{...resPokemon}];
      dispatch(setPokemons(result));
    } else {
      console.log('Change placeholder');
    }
  }

  // {!searchValue && (
  //   dispatch(setRefreshTrigger(!refreshTrigger))
  // )}
  
  return (
    <Input.Search
      value={searchValue}
      placeholder='Search...'
      // addonBefore
      enterButton
      onChange={e => handleChangeValue(e.target.value)}
      onPressEnter={fetchSearchPokemon}
      onSearch={fetchSearchPokemon}
    />
  );
}

export { Searcher };
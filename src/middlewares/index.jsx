/* eslint-disable no-unused-vars */
const logger = store => next => action => {
  console.log(action);
  next(action)
};

const featuring  = store => next => actionInfo => {
  const featured = [{ name: 'Lugia', url: 'https://pokeapi.co/api/v2/pokemon/249'}, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
}

/* const counterCapitalize = store => next => actionInfo => {
  const originalPayload = [...actionInfo.action.payload];

  
  // // Capitalice function
  const capitalizeWord = word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const pokemonsWithIndex = originalPayload.map((pokemon, index) => {
    return {
      ...pokemon,
      name: `${index + 1}. ` + capitalizeWord(pokemon.name),
      url: pokemon.url,
    };
  });

  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: pokemonsWithIndex },
  };
  console.log(updatedActionInfo);
  next(actionInfo)
} */

const counterCapitalize = store => next => actionInfo => {
  if (Array.isArray(actionInfo.payload)) {
    const originalPayload = [...actionInfo.payload];
  
    // Capitalice function
    const capitalizeWord = word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  
    const pokemonsWithIndex = originalPayload.map((pokemon, index) => {
      return {
        ...pokemon,
        name: `${index + 1}. ` + capitalizeWord(pokemon.name),
      };
    });
  
    const updatedActionInfo = {
      ...actionInfo,
      payload: pokemonsWithIndex,
    };
  
    next(updatedActionInfo);
  } else {
    next(actionInfo);
  }
};

export { logger, featuring, counterCapitalize };
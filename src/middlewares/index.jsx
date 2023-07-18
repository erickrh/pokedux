/* eslint-disable no-unused-vars */
const logger = store => next => action => {
  // console.log(action);
  next(action)
};

const featuring  = store => next => actionInfo => {
  if (Array.isArray(actionInfo.payload)) {
    const featured = [{
      name: '0. Lugia',
      id: 249,
      types: [
        {type: { name: 'psychic' }},
        {type: { name: 'flying' }},
      ],
    },
    ...actionInfo.payload];
    const updatedActionInfo = {
      ...actionInfo,
      payload: featured,
    };
    next(updatedActionInfo);
  } else {
    next(actionInfo);
  }
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
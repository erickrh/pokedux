/* eslint-disable no-unused-vars */
const logger = store => next => action => {
  console.log(action);
  next(action)
};

const featuring  = store => next => actionInfo => {
  const featured = [{ name: 'Lugia'}, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
}

export { logger, featuring };
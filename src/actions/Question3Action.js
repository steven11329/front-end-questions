import { QUESTION3_ADD_ITEM_TO_LIST } from '../types';

export const addItemToArray = item => {
  return { type: QUESTION3_ADD_ITEM_TO_LIST, item };
};

export default {
  addItemToArray,
};

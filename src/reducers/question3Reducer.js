import { QUESTION3_ADD_ITEM_TO_LIST } from '../types';

const INITIAL_STATE = [{ name: 'item1' }, { name: 'item2' }];

export default function (state = INITIAL_STATE, action) {
  const newList = state;
  switch (action.type) {
    case QUESTION3_ADD_ITEM_TO_LIST:
      newList.push(action.item);
      return newList;
    default:
      return state;
  }
}

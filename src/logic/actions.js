import { TODO_ITEM } from './constants';

export const addItem = content => {
  return { type: TODO_ITEM.ADD_ITEM, content };
};

export const removeItem = id => {
  return { type: TODO_ITEM.REMOVE_ITEM, id };
};

export const toggleItem = id => {
  return { type: TODO_ITEM.TOGGLE_ITEM, id };
};

export const onToggleVisibility = () => {
  return { type: TODO_ITEM.TOGGLE_VISIBILITY };
};

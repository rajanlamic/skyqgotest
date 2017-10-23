import { TODO_ITEM } from './constants';

export const initialState = {
  isCheckedHideCompleted: false,
  items: [
    { id: 1, content: 'Call mum', completed: false},
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {


    case TODO_ITEM.ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;

      return {
        ...state,
        ...{
          items: [...state.items, {
            id: nextId,
            content: action.content,
          }]
        }
      }

    case TODO_ITEM.REMOVE_ITEM:
      return {
        ...state,
        ...{
          items : state.items.filter((item) => {
            return item.id !== action.id
          })
        }
      }

    case TODO_ITEM.TOGGLE_ITEM:
      return {
        ...state,
        ...{
          items : state.items.map((item) => {
            return {
              id: item.id,
              content: item.content,
              completed: action.id === item.id ? !item.completed : item.completed
            }
          })
        }
      }

    case TODO_ITEM.TOGGLE_VISIBILITY:
      return {
        ...state,
        ...{
          isCheckedHideCompleted: !state.isCheckedHideCompleted
        }
      }

    default:
      return state;
  }
};

export default reducer;

import reducer, { initialState } from '../reducer';
import { addItem, removeItem, toggleItem, onToggleVisibility } from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on TODO_ITEM.ADD_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should remove a item on TODO_ITEM.REMOVE_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
    const mockAction = removeItem(1);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
  });

  it('should toggle item on TODO_ITEM.TOGGLE_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first', completed: false }
      ]
    }
    const mockAction = toggleItem(1);
    const result = reducer(state, mockAction);
    expect(result.items[0].completed).toEqual(true);
  });

  it('should toggle visibility on TODO_ITEM.TOGGLE_VISIBILITY', () => {
    const state = {
      isCheckedHideCompleted: false,
      items: [
        { id: 1, content: 'first', completed: false }
      ]
    }
    const mockAction = onToggleVisibility();
    const result = reducer(state, mockAction);
    expect(result.isCheckedHideCompleted).toEqual(true);
  });

});

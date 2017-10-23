import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, onToggleVisibility } from '../../logic/actions';
import './styles.css';

export const ItemCreator = ({ onAdd, onToggleVisibility, isCheckedHideCompleted }) => {
  let inputField;

  return (
    <div className={'itemCreator'}>
      <input
        ref={input => {
          inputField = input;
        }}
        className={'itemCreator-input'}
        type="text"
        placeholder={'What do you need to do?'}
      />
      <input
        className={'itemCreator-button'}
        type="button"
        value={'Add Task'}
        onClick={() => {
          inputField.value && onAdd(inputField.value);
          inputField.value = '';
        }}
      />

      <label htmlFor="showCompleted">{ 'Hide Completed' }</label>
      <input
        className={'itemCreator-button-visibility'}
        type="checkbox"
        id="showCompleted"
        checked={isCheckedHideCompleted}
        onChange={() => {
          onToggleVisibility();
        }}
      />

    </div>
  );
};

ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onToggleVisibility: PropTypes.func,
  isCheckedHideCompleted: PropTypes.bool
};

const mapStateToProps = state => ({
  isCheckedHideCompleted: state.todos.isCheckedHideCompleted
});

const mapDispatchToProps = dispatch => ({
  onAdd: newItem => dispatch(addItem(newItem)),
  onToggleVisibility: check => dispatch(onToggleVisibility(check)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);

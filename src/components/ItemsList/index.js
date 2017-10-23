import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Item } from './item';
import { removeItem, toggleItem } from '../../logic/actions';

import './styles.css';

export const ItemsList = ({ items, onRemoveItem, onToggleItem, isCheckedHideCompleted }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {
          items.map(item => {
            return <Item key={item.id} item={item} onRemoveItem={onRemoveItem} onToggleItem={onToggleItem} isCheckedHideCompleted={isCheckedHideCompleted} />
          })
        }
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  isCheckedHideCompleted: PropTypes.bool,
  onRemoveItem: PropTypes.func,
  onToggleItem: PropTypes.func,
};

ItemsList.defaultProps = {
  items: [],
  isCheckedHideCompleted: false
}

const mapStateToProps = state => {
  return { 
    items: state.todos.items,
    isCheckedHideCompleted: state.todos.isCheckedHideCompleted
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    onRemoveItem: id => dispatch(removeItem(id)),
    onToggleItem: id => dispatch(toggleItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);

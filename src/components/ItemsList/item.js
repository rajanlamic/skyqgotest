import React from 'react';
import PropTypes from 'prop-types';

export const Item = ( {item, onRemoveItem, onToggleItem, isCheckedHideCompleted} ) => {
	return (<div>
		<li key={item.id} style={
				{display: item.completed && isCheckedHideCompleted ? 'none': ''}
			}>
			<span onClick={() => onToggleItem(item.id)} style={
					{textDecoration: item.completed ? 'line-through' : 'none'}
				}>
				{item.content}
			</span>
			<button onClick={() => onRemoveItem(item.id)}>
				Remove
			</button>
		</li>
	</div>)
}

Item.propTypes = {
  item: PropTypes.object,
  onRemoveItem: PropTypes.func,
  onToggleItem: PropTypes.func,
  isCheckedHideCompleted: PropTypes.bool
}

Item.defaultProps = {
  item: {},
  isCheckedHideCompleted: false
}

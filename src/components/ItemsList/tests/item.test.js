import React from 'react';
import { shallow, mount } from 'enzyme';
import { Item } from '../item';

describe('Item componnet', () => {
	let defaultProps;

	beforeEach(() => {
		defaultProps = {
			item: {
				id: 0,
				completed: false
			}
		}
	})

	afterEach(() => {
		defaultProps = null;
	})

	it('should render item without crashing', () => {
		shallow(<Item />);
	})

	it('should call onToggleItem with span click', () => {
    const onToggleItem = jest.fn();
    const renderedItem = mount(
      <Item {...defaultProps} onToggleItem={onToggleItem} />
    );
    renderedItem.find('li span').simulate('click');
    expect(onToggleItem.mock.calls.length).toBe(1);
  });

	it('should call onRemoveItem with button click', () => {
    const onRemoveItem = jest.fn();
    const renderedItem = mount(
      <Item {...defaultProps} onRemoveItem={onRemoveItem} />
    );
    renderedItem.find('button').simulate('click');
    expect(onRemoveItem.mock.calls.length).toBe(1);
  });

})
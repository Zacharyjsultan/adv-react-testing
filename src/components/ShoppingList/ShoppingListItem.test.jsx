// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react';
import ShoppingListItem from './ShoppingListItem.jsx';

describe('List Item', () => {
  test('rendrz item n quant', () => {
    const shoppingItem = {
      item: 'Manteca',
      quantity: '99',
    };
    render(<ShoppingListItem shoppingItem={shoppingItem} />);
    screen.queryByTestId('shopping-item');
    expect(shoppingItem.item).toBe('Manteca');
    expect(shoppingItem.quantity).toBe('99');
  });
});

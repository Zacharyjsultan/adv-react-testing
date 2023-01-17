import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList.jsx';

describe('Shopping List', () => {
  test('render shopping list name', () => {
    const choppingList = {
      id: 1,
      name: 'Eggos List',
      shoppingItems: [{ id: 1, name: 'Eggos', quantity: 2000 }],
    };
    render(<ShoppingList shoppingList={choppingList} />);
    const list = screen.getByText(choppingList.name);
    expect(list).toBeInTheDocument();
  });
});

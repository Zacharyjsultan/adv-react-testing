// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList.jsx';

describe('Shopping List', () => {
  test('render shopping list name', () => {
    const shoppingList = {
      id: 1,
      name: 'Eggos List',
      shoppingItems: [{ id: 1, name: 'Eggos', quantity: 200 }],
    };
    render(<ShoppingList shoppingList={shoppingList} />);
    const listName = screen.getByText(shoppingList.name);
    expect(listName).toBeInTheDocument();
  });
  //   test('create new shopping item', () => {
  //     const choppingList = {
  //       id: 1,
  //       name: 'Eggos List',
  //       shoppingItems: [{ id: 1, name: 'Eggos', quantity: 2000 }],
  //     };
  //     const onCreateShoppingItem = jest.fn();
  //     render(
  //       <ShoppingList
  //         shoppingList={choppingList}
  //         onCreateShoppingItem={onCreateShoppingItem}
  //       />
  //     );
  //     const submitButton = screen.getByText('submit');
  //     fireEvent.click(submitButton);
  //     expect(onCreateShoppingItem).toHaveBeenCalled();
  //   });
});

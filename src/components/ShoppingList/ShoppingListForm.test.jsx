import { fireEvent, render, screen } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('Shopping List Form', () => {
  test('submits on click', () => {
    const onSubmit = jest.fn();

    const aShoppingList = {
      id: null,
      name: 'gamer fuel',
      shoppingItems: [],
    };

    render(<ShoppingListForm id="test" onSubmit={onSubmit} />);

    const input = screen.getByTestId('shopping-list-form-name-test');
    fireEvent.change(input, { target: { value: 'gamer fuel' } });

    const submitButton = screen.getByTestId(
      'shopping-list-form-submit-button-test'
    );
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith(aShoppingList);
  });
  test('formbyid', () => {
    render(<ShoppingListForm id="test" />);

    const form = screen.getByTestId('shopping-list-form-test');

    expect(form).toBeInTheDocument();
  });
});

// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm';

describe('CHOPPING LIST FORM', () => {
  test('', () => {
    // mock it out my guy
    const onSubmit = jest.fn();

    render(<ShoppingListItemForm onSubmit={onSubmit} />);
    const input = screen.queryByTestId('shopping-list-item-input');
    fireEvent.change(input, { target: { value: 'milk' } });
    expect(input.value).toBe('milk');
  });
});

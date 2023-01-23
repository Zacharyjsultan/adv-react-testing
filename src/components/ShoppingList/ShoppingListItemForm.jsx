import { useState } from 'react';

export default function ShoppingListItemForm({ onSubmit }) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ item, quantity });
  };

  const handleDelete = () => {
    setItem('');
    setQuantity('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          data-testid={'shopping-list-item-input'}
          placeholder="Add Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  );
}

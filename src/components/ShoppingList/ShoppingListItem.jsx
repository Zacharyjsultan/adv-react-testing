export default function ShoppingListItem({ item, quantity }) {
  return (
    <>
      <div>
        <span data-testid={'shopping-item'}>
          Item: {item}, Amount: {quantity}
          <button>delete</button>
        </span>
      </div>
    </>
  );
}

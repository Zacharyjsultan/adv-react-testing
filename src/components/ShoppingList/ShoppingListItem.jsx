export default function ShoppingListItem({ item, quantity }) {
  return (
    <>
      <div>
        <span>
          Item: {item}, Amount: {quantity}
          <button>delete</button>
        </span>
      </div>
    </>
  );
}

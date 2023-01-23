import { screen, render } from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('CHOPPIN LIST', () => {
  test('gimme the list!', () => {
    const shoppingLists = [
      {
        id: 1,
        name: 'Velveeta & Chowder',
        shoppingItems: [
          {
            id: 1,
            name: 'Mayo',
          },
        ],
      },
      {
        id: 2,
        name: 'Kale Salad',
        shoppingItems: [
          {
            id: 1,
            name: 'butter',
          },
        ],
      },
    ];
    render(<ShoppingLists shoppingLists={shoppingLists} />);

    const list = screen.queryByTestId('shopping-lists');
    expect(list).not.toBe(null);
    expect(list).toMatchInlineSnapshot(`
      <ol
        data-testid="shopping-lists"
      >
        <li>
          <div>
            <div
              data-testid="shopping-list-name-1"
            >
              Velveeta & Chowder
            </div>
            <form>
              <input
                data-testid="shopping-list-item-input"
                placeholder="Add Item"
                value=""
              />
              <input
                placeholder="Quantity"
                value=""
              />
              <button
                type="submit"
              >
                Add
              </button>
            </form>
            <ol
              data-testid="shopping-list-1"
            >
              <li>
                <div>
                  <span
                    data-testid="shopping-item"
                  >
                    Item: 
                    , Amount: 
                    <button>
                      delete
                    </button>
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </li>
        <li>
          <div>
            <div
              data-testid="shopping-list-name-2"
            >
              Kale Salad
            </div>
            <form>
              <input
                data-testid="shopping-list-item-input"
                placeholder="Add Item"
                value=""
              />
              <input
                placeholder="Quantity"
                value=""
              />
              <button
                type="submit"
              >
                Add
              </button>
            </form>
            <ol
              data-testid="shopping-list-2"
            >
              <li>
                <div>
                  <span
                    data-testid="shopping-item"
                  >
                    Item: 
                    , Amount: 
                    <button>
                      delete
                    </button>
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </li>
      </ol>
    `);
  });
});

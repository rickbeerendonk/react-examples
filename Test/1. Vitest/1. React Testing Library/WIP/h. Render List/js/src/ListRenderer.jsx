/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default function ListRenderer({ items }) {
  return (
    <div>
      <h2>Item List</h2>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id} data-testid={`item-${item.id}`}>
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p data-testid="empty-list">No items available</p>
      )}
    </div>
  );
}

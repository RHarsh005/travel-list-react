import { useState } from "react";
import Item from "./Item.js";

export function PackagingList({ items, removeItem, onToggleItem, clearItem }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  else sortedItems = items;

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} removeItem={removeItem} onToggleItem={onToggleItem} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">sort by input order</option>
          <option value="description"> sort by description order</option>
          <option value="packed"> sort by packed order</option>
        </select>
        <button onClick={clearItem}> clear list</button>
      </div>
    </div>
  );
}

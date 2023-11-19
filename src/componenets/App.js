import { useState } from "react";
import Logo from "./Logo.js";
import { Form } from "./Form.js";
import { PackagingList } from "./PackagingList.js";
import { Stats } from "./Stats.js";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    const confirm = window.confirm("are sure to delete all items ? ");
    if (confirm) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackagingList
        items={items}
        removeItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        clearItem={handleClearItems}
      />
      <Stats
        details={{
          total: items.length,
          packed: items.filter((item) => item.packed === true).length,
        }}
      />
    </>
  );
}

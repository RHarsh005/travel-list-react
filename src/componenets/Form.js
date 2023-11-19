import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantitiy] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const obj = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItems(obj);

    setDescription("");
    setQuantitiy(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h5> What do you want for your trip🌴 ? </h5>
      <select value={quantity} onChange={(e) => setQuantitiy(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        placeholder="item..."
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

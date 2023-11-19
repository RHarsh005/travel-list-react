export function Stats({ details }) {
  // const packedList = items.filter((item) => item.packed === true).length;
  return (
    <footer className="stats">
      <em>
        💼 You have {details.total} items on your list and your already packed {details.packed}(
        {((details.packed / details.total) * 100).toFixed(2)}%)
      </em>
    </footer>
  );
}

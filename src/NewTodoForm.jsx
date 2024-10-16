import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newitem === "") return;
    onsubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new__item-form">
      <div className="form__row">
        <label htmlFor="item" className="new__item">
          New Item
        </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        ></input>
      </div>
      <button className="add__button" onSubmit={handleSubmit}>
        Add
      </button>
    </form>
  );
}

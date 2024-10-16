import { useState } from "react";
import "./index.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="page">
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
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="button delete__button"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

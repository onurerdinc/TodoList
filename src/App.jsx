import "./index.css";

export default function App() {
  return (
    <div className="page">
      <form className="new__item-form">
        <div className="form__row">
          <label htmlFor="item" className="new__item">
            New Item
          </label>
          <input type="text" id="item"></input>
        </div>
        <button className="add__button">Add</button>
      </form>
      <h1 className="header__">Todo List</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="button delete__button">Delete</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 2
          </label>
          <button className="button delete__button">Delete</button>
        </li>
      </ul>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // Import the trash icon

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      {/* Replace the button with FontAwesomeIcon for the delete icon */}
      <FontAwesomeIcon
        icon={faTrash}
        className="delete__icon"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
}

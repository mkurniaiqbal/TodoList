import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      {todos.map((todo, index) => (
        <li className="list-item" key={index}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />

          <div>
            <button
              className="button-complete"
              onClick={() => handleComplete(todo)}
            >
              Complete
            </button>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              Edit
            </button>
            <button
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default TodoList;

import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodoHandler = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  const renderTodos = () => {
    return todos.length === 0 ? (
      <p>add some todos</p>
    ) : (
      todos.map((todo) => (
        <Todo
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
          key={todo.id}
        />
      ))
    );
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm submitTodoHandler={editTodoHandler} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;

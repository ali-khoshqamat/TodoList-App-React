import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
  return todos.length === 0 ? (
    <p>add some todos</p>
  ) : (
    todos.map((todo) => (
      <Todo
        todo={todo}
        onComplete={() => onComplete(todo.id)}
        onDelete={() => onDelete(todo.id)}
        key={todo.id}
      />
    ))
  );
};

export default TodoList;

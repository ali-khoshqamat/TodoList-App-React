import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return todos.length === 0 ? (
    <p>add some todos</p>
  ) : (
    todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
  );
};

export default TodoList;

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  //! state global: todos
  return (
    <div className="container">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;

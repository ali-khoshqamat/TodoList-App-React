import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");
  useEffect(() => {
    filterTodos(selectedOption);
  }, [todos, selectedOption]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodoHandler = (id) => {
    // find index
    const index = todos.findIndex((todo) => todo.id === id);
    // clone: Do Not MUTATE
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    // clone todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    // setState
    setTodos(updatedTodos);
  };
  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updatedTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const filterTodos = (selectedOption) => {
    return selectedOption === "completed"
      ? setFilteredTodos(todos.filter((todo) => todo.isCompleted))
      : selectedOption === "uncompleted"
      ? setFilteredTodos(todos.filter((todo) => !todo.isCompleted))
      : setFilteredTodos(todos);
  };
  const selectHandler = (e) => {
    setSelectedOption(e.value);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <NavBar
        unCompletedTodosLength={
          todos.filter((todo) => !todo.isCompleted).length
        }
        selectedOption={selectedOption}
        onChange={selectHandler}
      />
      <TodoForm submitTodoHandler={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodoHandler}
        onDelete={deleteTodoHandler}
        onUpdate={updatedTodo}
      />
    </div>
  );
};

export default TodoApp;

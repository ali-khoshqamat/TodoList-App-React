import { useState } from "react";

const TodoForm = ({ addTodoHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // add entered todo to todos =>
    return !inputValue
      ? alert("Please Enter todo!")
      : (addTodoHandler(inputValue), setInputValue(""));
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;

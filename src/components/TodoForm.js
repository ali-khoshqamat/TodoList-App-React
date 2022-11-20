import { useEffect, useRef, useState } from "react";

const TodoForm = ({ submitTodoHandler, edit }) => {
  const [inputValue, setInputValue] = useState(edit ? edit.text : "");
  const inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // add entered todo to todos =>
    return !inputValue
      ? alert("Please Enter todo!")
      : (submitTodoHandler(inputValue), setInputValue(""));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        ref={inputRef}
        placeholder={edit ? edit.text : "add new todo.."}
      />
      <button type="submit">{edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;

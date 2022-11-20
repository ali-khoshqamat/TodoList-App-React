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
      <div className="formControl">
        <input
          type="text"
          value={inputValue}
          onChange={changeHandler}
          ref={inputRef}
          placeholder={edit ? edit.text : "add new todo.."}
        />
        <button className={`btn ${edit ? "" : "addTodo"}`} type="submit">
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

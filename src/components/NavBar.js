import SelectTodo from "./SelectTodo";

const NavBar = ({ unCompletedTodosLength, onChange, selectedOption }) => {
  return (
    <header>
      {unCompletedTodosLength ? (
        <>
          <h2>you have not completed your todos!</h2>
          <span>{unCompletedTodosLength}</span>
          <SelectTodo onChange={onChange} selectedOption={selectedOption} />
        </>
      ) : (
        <>
          <h2>set your today todos!</h2>
          <SelectTodo onChange={onChange} selectedOption={selectedOption} />
        </>
      )}
    </header>
  );
};

export default NavBar;

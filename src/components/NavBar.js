const NavBar = ({ unCompletedTodosLength }) => {
  return (
    <header>
      {unCompletedTodosLength ? (
        <>
          <h2>you have not completed your todos!</h2>
          <span>{unCompletedTodosLength}</span>
        </>
      ) : (
        <h2>set your today todos!</h2>
      )}
    </header>
  );
};

export default NavBar;

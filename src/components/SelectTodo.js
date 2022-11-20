import Select from "react-select";

const SelectTodo = ({ onChange, selectedOption }) => {
  const options = [
    { value: "all", label: "All" },
    { value: "completed", label: "Completed" },
    { value: "uncompleted", label: "Uncompleted" },
  ];

  return (
    <Select
      defaultValue={selectedOption}
      onChange={onChange}
      options={options}
      className="select"
    />
  );
};

export default SelectTodo;

const Search = ({ value, handleChange, placeholder }) => {
  const searchStyles = {
    border: "2px solid red",
    padding: "10px",
    borderRadius: "8px",
    borderColor: "grey",
    borderWidth: "2px",
    outline: "none",
    fontSize: "1.1rem",
  };

  return (
    <input
      type={"text"}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={searchStyles}
      className={"fontFamily"}
    />
  );
};

export default Search;

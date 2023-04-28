const Search = ({ value, placeholder }) => {
  return (
    <div className="search-container d-flex">
      <input
        type={"text"}
        value={value}
        placeholder={placeholder}
        className="form-control searchInput"
      />
    </div>
  );
};

export default Search;

const Search = ({ onChange }) => {
  const handleInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    onChange(searchQuery);
  };

  return (
    <div className="search-container d-flex">
      <input
        type={"text"}
        placeholder={"Search..."}
        className="form-control searchInput"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;

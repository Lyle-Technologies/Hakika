import { TextField, Stack, Autocomplete } from "@mui/material";

const top100Films = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    link: "https://example.com/movie1",
  },
  { title: "The Godfather", year: 1972, link: "https://example.com/movie2" },
  {
    title: "The Godfather: Part II",
    year: 1974,
    link: "https://example.com/movie3",
  },
  { title: "The Dark Knight", year: 2008, link: "https://example.com/movie3" },
];

const SearchInput = () => {
  const textFieldStyles = {
    backgroundColor: "white",
    borderRadius: "7px",
  };
  const inputStyles = {
    outlineColor: "red",
  };

  const renderOption = (option) => (
    <a href={option.link} target="_blank" rel="noreferrer">
      {option.title}
    </a>
  );

  return (
    <Stack spacing={2} sx={{ width: 500 }}>
      <Autocomplete
        freeSolo
        id="free-solo"
        disableClearable
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            style={textFieldStyles}
            InputProps={{
              style: inputStyles,
            }}
            {...params}
            label="Search"
            // InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
        renderOption={renderOption}
      />
    </Stack>
  );
};

export default SearchInput;

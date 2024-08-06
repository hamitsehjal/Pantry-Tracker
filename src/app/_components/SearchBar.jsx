import { TextField } from '@mui/material';

export default function SearchBar({ query, setQuery }) {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
      <TextField
        label="Search Pantries"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleSearch}
      />
    </>
  );
}

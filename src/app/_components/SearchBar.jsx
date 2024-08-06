import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const DarkTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#ccc',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ccc',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#555',
    },
    '&:hover fieldset': {
      borderColor: '#ccc',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ccc',
    },
  },
});

export default function SearchBar({ query, setQuery }) {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
      <DarkTextField
        label="Search Pantries"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleSearch}
        sx={{ marginBottom: 2 }}
      />
    </>
  );
}

import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import SortOrderButton from './SortOrderButton';
import SortDropdown from './SortDropdown';
import FilterDropdown from './FilterDropdown';
import SearchBar from '@/app/_components/SearchBar';
import AddNewItemButton from '@/app/_components/AddNewItemButton';

export default function Header({
  category,
  setCategory,
  sortBy,
  setSortBy,
  search,
  setSearch,
}) {
  return (
    <AppBar position="static">
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 2,
          }}
        >
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Pantry Tracker
          </Typography>
        </Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <SearchBar query={search} setQuery={setSearch} />
          <FilterDropdown category={category} onCategoryChange={setCategory} />
          <AddNewItemButton>Add New Item</AddNewItemButton>
          {/*<SortDropdown sortBy={sortBy} onSortByChange={setSortBy} />*/}
          {/*<SortOrderButton />*/}
        </Box>
      </Container>
    </AppBar>
  );
}

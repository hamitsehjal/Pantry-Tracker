import {
  AppBar,
  Box,
  Container,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import SortOrderButton from './SortOrderButton';
import SortDropdown from './SortDropdown';
import FilterDropdown from './FilterDropdown';
import SearchBar from '@/app/_components/SearchBar';
import { query } from '@firebase/firestore';

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
            justifyContent: 'center',
          }}
        >
          <FilterDropdown category={category} onCategoryChange={setCategory} />
          <SortDropdown sortBy={sortBy} onSortByChange={setSortBy} />
          <SortOrderButton />
          <SearchBar query={search} setQuery={setSearch} />
        </Box>
      </Container>
    </AppBar>
  );
}

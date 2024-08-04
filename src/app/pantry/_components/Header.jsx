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

export default function Header() {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
          <FilterDropdown />
          <SortDropdown />
          <SortOrderButton />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            sx={{ ml: 2, bgcolor: 'background.paper' }}
          />
        </Box>
      </Container>
    </AppBar>
  );
}

import { Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import PantryList from './pantry/_components/PantryList';
import Header from './pantry/_components/Header';

export default function Home() {
  return (
    <Container>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <Header />
        </Grid2>
        <Grid2 xs={12}>
          <PantryList />
        </Grid2>
      </Grid2>
    </Container>
  );
}

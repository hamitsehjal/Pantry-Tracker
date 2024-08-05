'use client';
import { Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import PantryList from './_components/PantryList';
import Header from './_components/Header';
import { useGetPantryItems } from '@/hooks/getPantryItems';
import { useGetPantryItemsOptions } from '@/hooks/getPantryItemsOptions';

export default function Home() {
  const { options, selectedCategory, selectedSortBy, selectedSortOrder } =
    useGetPantryItemsOptions();
  const { items, loading, error } = useGetPantryItems(options);
  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error.message}</Typography>;
  if (items.length > 0) {
    console.log(items[0].getPantryItem());
  }

  return (
    <Container>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <Header />
        </Grid2>
        <Grid2 xs={12}>
          <PantryList items={items} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

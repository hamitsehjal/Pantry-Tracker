'use client';
import { Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import PantryList from './_components/PantryList';
import Header from './_components/Header';
import { useGetPantryItems } from '@/hooks/getPantryItems';

import { useMemo, useState } from 'react';
import { Category } from '@/models/PantryItem';
import { GetPantryItemsOptions } from '@/use-cases/pantry-management/getPantryItems/contract/GetPantryItemsContract';
import { useSearchPantryItems } from '@/hooks/searchPantryItems';

export type SortBy = GetPantryItemsOptions['sortBy'];
export type SortOrder = GetPantryItemsOptions['sortOrder'];

export default function Home() {
  const [selectedCategory, setCategory] = useState<Category | undefined>(
    undefined
  );
  const [selectedSortOrder, setSortOrder] = useState<SortOrder>(undefined);
  const [selectedSortBy, setSortBy] = useState<SortBy>(undefined);

  const options = useMemo(
    () => ({
      category: selectedCategory,
      sortBy: selectedSortBy,
      sortOrder: selectedSortOrder,
    }),
    [selectedCategory, selectedSortBy, selectedSortOrder]
  );
  const { items, loading, error, refetch } = useGetPantryItems(options);
  const [query, setQuery] = useState('');
  const searchedItems = useSearchPantryItems(items, query);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error.message}</Typography>;

  return (
    <Container>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <Header
            category={selectedCategory}
            setCategory={setCategory}
            sortBy={selectedSortBy}
            setSortBy={setSortBy}
            search={query}
            setSearch={setQuery}
          />
        </Grid2>
        <Grid2 xs={12}>
          <PantryList items={searchedItems} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

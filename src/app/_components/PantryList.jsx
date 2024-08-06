import Grid2 from '@mui/material/Unstable_Grid2';

import PantryItem from './PantryItem';

export default function PantryList({ items }) {
  return (
    <Grid2 container spacing={2}>
      {items.map((item, index) => (
        <Grid2 xs={12} sm={6} md={4} key={index}>
          <PantryItem item={item} />
        </Grid2>
      ))}
    </Grid2>
  );
}

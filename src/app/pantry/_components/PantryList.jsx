import Grid2 from '@mui/material/Unstable_Grid2';

import PantryItem from './PantryItem';

export default function PantryList() {
  // This would be replaced with actual data from your state management
  const items = [
    { id: 1, name: 'Apple', quantity: 5, category: 'Fruit', unit: 'piece' },
    { id: 2, name: 'Bread', quantity: 2, category: 'Bakery', unit: 'piece' },
    { id: 3, name: 'Milk', quantity: 1, category: 'Dairy', unit: 'litres' },
  ];

  return (
    <Grid2 container spacing={2}>
      {items.map((item) => (
        <Grid2 item xs={12} sm={6} md={4} key={item.id}>
          <PantryItem item={item} />
        </Grid2>
      ))}
    </Grid2>
  );
}

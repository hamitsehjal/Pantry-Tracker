import { Card, CardContent, Typography, CardMedia } from '@mui/material';

export default function PantryItem({ item, onDelete, onDetail }) {
  const url = item.getImageURL();
  const pantryItem = item.getPantryItem();
  return (
    <Card>
      <CardMedia component="img" image={url} alt={pantryItem.category} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pantryItem.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {`${pantryItem.quantity} ${pantryItem.unit}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

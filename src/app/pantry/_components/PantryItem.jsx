import { Card, CardContent, Typography, CardMedia } from '@mui/material';

export default function PantryItem({ item, onDelete, onDetail }) {
  return (
    <Card>
      {/*<CardMedia*/}
      {/*  component="img"*/}
      {/*  height="140"*/}
      {/*  image={`/images/${item.category.toLowerCase()}.jpg`}*/}
      {/*  alt={item.category}*/}
      {/*/>*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {`${item.quantity} ${item.unit}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

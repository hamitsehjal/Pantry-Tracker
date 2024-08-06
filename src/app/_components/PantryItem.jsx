import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  Box,
} from '@mui/material';

import { format } from 'date-fns';

export default function PantryItem({ item, onDelete, onDetail }) {
  const url = item.getImageURL();
  const pantryItem = item.getPantryItem();
  return (
    <Card
      onClick={onDetail}
      sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            {url && (
              <Avatar
                src={url}
                alt={pantryItem.category}
                sx={{ width: 24, height: 24, mr: 1 }}
              />
            )}
            <Typography variant="h6" component="div">
              {pantryItem.name}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Quantity: {`${pantryItem.quantity} ${pantryItem.unit}`}
          </Typography>
          {pantryItem.expirationDate && (
            <Typography variant="body2" color="text.secondary">
              Expires: {format(pantryItem.expirationDate, 'MMM dd, yyyy')}
            </Typography>
          )}
        </CardContent>
      </Box>
    </Card>
  );
}

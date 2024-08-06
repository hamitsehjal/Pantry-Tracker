import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  styled,
} from '@mui/material';
import { Unit } from '@/models/PantryItem';

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
}));
export default function AddNewItemModal({ modalOpen, handleModalClose }) {
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    unit: '',
    notes: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <ModalContent>
          <Typography variant="h6" component="h2" gutterBottom>
            Add New Item
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Quantity"
            name="quantity"
            type="number"
            value={newItem.quantity}
            onChange={handleInputChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Unit</InputLabel>
            <Select
              name="unit"
              value={newItem.unit}
              onChange={handleInputChange}
            >
              {Object.values(Unit).map((unit, index) => (
                <MenuItem key={index} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleModalClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            {/*<StyledButton onClick={onSubmit}>Add Item</StyledButton>*/}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

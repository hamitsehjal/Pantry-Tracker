'use client';
import React, { useState } from 'react';
import { styled, Button } from '@mui/material';
import AddNewItemModal from '@/app/_components/AddNewItemModal';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
}));
export default function AddNewItemButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <StyledButton onClick={handleModalOpen}>Add New Item</StyledButton>
      <AddNewItemModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

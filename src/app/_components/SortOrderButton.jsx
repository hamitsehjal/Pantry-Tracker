'use client';
import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useState } from 'react';

export default function SortOrderButton() {
  const [ascending, setAscending] = useState(true);
  const toggleSortOrder = () => {
    setAscending(!ascending);
  };
  return (
    <IconButton color="inherit" onClick={toggleSortOrder}>
      {ascending ? (
        <>
          <ArrowUpward sx={{ mr: 0.5 }} />
          <Typography variant="caption">ASC</Typography>
        </>
      ) : (
        <>
          <ArrowDownward />
          <Typography variant="caption">DSC</Typography>
        </>
      )}
    </IconButton>
  );
}

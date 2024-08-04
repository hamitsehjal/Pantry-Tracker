'use client';
import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

export default function SortDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Sort By
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClick}>Name</MenuItem>
        <MenuItem onClick={handleClick}>Quantity</MenuItem>
        <MenuItem onClick={handleClick}>Expiration Date</MenuItem>
        <MenuItem onClick={handleClick}>Purchase Date</MenuItem>
      </Menu>
    </>
  );
}

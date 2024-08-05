'use client';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useState } from 'react';
export default function FilterDropdown(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Category
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

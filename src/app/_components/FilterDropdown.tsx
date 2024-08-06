'use client';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Category } from '@/models/PantryItem';

interface FilterDropdownProps {
  category: Category | undefined;
  onCategoryChange: (category: Category | undefined) => void;
}

export default function FilterDropdown({
  category,
  onCategoryChange,
}: FilterDropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (selectedCategory: Category | undefined) => {
    onCategoryChange(selectedCategory);
    handleClose();
  };
  const buttonText = category ? `Category: (${category})` : 'Category';
  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        {buttonText}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {category && (
          <MenuItem onClick={() => handleMenuItemClick(undefined)}>
            ❌ Remove Filter
          </MenuItem>
        )}

        {Object.values(Category).map((categoryValue) => (
          <MenuItem
            key={categoryValue}
            onClick={() => {
              handleMenuItemClick(categoryValue);
            }}
          >
            {categoryValue}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

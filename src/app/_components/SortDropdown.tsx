'use client';

import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { SortBy } from '@/app/page';

interface SortDropdownProps {
  sortBy: SortBy;
  onSortByChange: (sortBy: SortBy) => void;
}

export default function SortDropdown({
  sortBy,
  onSortByChange,
}: SortDropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (sortingCriteria: SortBy) => {
    onSortByChange(sortingCriteria);
    handleClose();
  };
  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Sort By
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {sortBy && (
          <MenuItem onClick={() => handleMenuItemClick(undefined)}>
            ❌ Remove Sort By
          </MenuItem>
        )}
        <MenuItem onClick={() => handleMenuItemClick('name')}>Name</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('quantity')}>
          Quantity
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('expirationDate')}>
          Expiration Date
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('purchaseDate')}>
          Purchase Date
        </MenuItem>
      </Menu>
    </>
  );
}

'use client';
import {
  Button,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  styled,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Category } from '@/models/PantryItem';

// Exportable StyledButton
export const StyledButton = styled(Select)<SelectProps<string>>(
  ({ theme }) => ({
    backgroundColor: '#ff0000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#cc0000',
    },
    '& .MuiSelect-select': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  })
);
interface FilterDropdownProps {
  category: Category | undefined;
  onCategoryChange: (category: Category | undefined) => void;
}

export default function FilterDropdown({
  category,
  onCategoryChange,
}: FilterDropdownProps) {
  const buttonText = category ? `Category: (${category})` : 'Category';
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    onCategoryChange(value === '' ? undefined : (value as Category));
  };

  return (
    <>
      <StyledButton
        value={category || ''}
        onChange={handleChange}
        displayEmpty
        renderValue={(value: unknown) => {
          const stringValue = String(value);
          return stringValue ? `Category: (${stringValue})` : 'Category';
        }}
      >
        <MenuItem value="">
          <em>All Categories</em>
        </MenuItem>
        {Object.values(Category).map((categoryValue) => (
          <MenuItem key={categoryValue} value={categoryValue}>
            {categoryValue}
          </MenuItem>
        ))}
      </StyledButton>
    </>
  );
}

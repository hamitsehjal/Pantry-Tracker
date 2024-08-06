import { useState } from 'react';
import { GetPantryItemsOptions } from '@/use-cases/pantry-management/getPantryItems/contract/GetPantryItemsContract';
import { Category } from '@/models/PantryItem';
type SortBy = GetPantryItemsOptions['sortBy'];
type SortOrder = GetPantryItemsOptions['sortOrder'];
export const useGetPantryItemsOptions = () => {
  const [selectedCategory, setCategory] = useState<Category | undefined>(
    undefined
  );
  const [selectedSortOrder, setSortOrder] = useState<SortOrder>(undefined);
  const [selectedSortBy, setSortBy] = useState<SortBy>(undefined);

  const options: GetPantryItemsOptions = {
    category: selectedCategory,
    sortBy: selectedSortBy,
    sortOrder: selectedSortOrder,
  };

  return { options, setCategory, setSortBy, setSortOrder };
};

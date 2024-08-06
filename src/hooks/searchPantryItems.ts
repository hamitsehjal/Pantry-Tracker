import { PantryItem } from '@/models/PantryItem';
import { useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';

export const useSearchPantryItems = (items: PantryItem[], query?: string) => {
  const [searchedItems, setSearchedItems] = useState<PantryItem[]>(items);
  const fuse = useMemo(() => {
    return new Fuse(items, {
      keys: ['name'],
    });
  }, [items]);

  useEffect(() => {
    if (query) {
      const result = fuse.search(query);
      setSearchedItems(result.map(({ item }) => item));
    } else {
      setSearchedItems(items);
    }
  }, [fuse, items, query]);

  return searchedItems;
};

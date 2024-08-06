import { useEffect, useState, useRef, useCallback } from 'react';
import { getPantryItemsUseCaseInstance } from '@/config/usecases';
import {
  GetPantryItemsOptions,
  PantryItemResponse,
} from '@/use-cases/pantry-management/getPantryItems/contract/GetPantryItemsContract';

export const useGetPantryItems = (data: GetPantryItemsOptions) => {
  const [items, setItems] = useState<PantryItemResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      console.log(`Options for Query: ${JSON.stringify(data)}`);
      const results = await getPantryItemsUseCaseInstance.execute(data);
      setItems(results.items);
    } catch (error) {
      setError(
        error instanceof Error
          ? error
          : new Error('An Error occurred while fetching items.')
      );
    } finally {
      setLoading(false);
    }
  }, [data]);
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { items, loading, error, refetch: fetchItems };
};

import { useEffect, useState } from 'react';
import { getPantryItemsUseCaseInstance } from '@/config/usecases';
import {
  GetPantryItemsOptions,
  PantryItemResponse,
} from '@/use-cases/pantry-management/getPantryItems/contract/GetPantryItemsContract';

export const useGetPantryItems = (data: GetPantryItemsOptions) => {
  const [items, setItems] = useState<PantryItemResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(null);

    getPantryItemsUseCaseInstance
      .execute(data)
      .then((result) => {
        if (isMounted) {
          setItems(result.items);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(
            error instanceof Error ? error : new Error('An Error Occurred')
          );
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [data.category, data.sortBy, data.sortOrder]);

  return { items, loading, error };
};

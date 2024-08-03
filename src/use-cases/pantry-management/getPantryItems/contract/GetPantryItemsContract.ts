import { Category, PantryItem, Unit } from '@/models/PantryItem';

export interface GetPantryItemsOptions {
  userId: string;
  category?: Category;
  orderBy?: Array<{
    field: 'name' | 'expirationDate' | 'purchaseDate' | 'quantity';
    direction: 'asc' | 'desc';
  }>;
}

export class PantryItemResponse extends PantryItem {
  constructor(
    private pantryItem: PantryItem,
    private imageURL?: string
  ) {
    super(
      pantryItem.userId,
      pantryItem.name,
      pantryItem.quantity,
      pantryItem.unit,
      pantryItem.category,
      pantryItem.expirationDate,
      pantryItem.purchaseDate,
      pantryItem.createdAt,
      pantryItem.updatedAt,
      pantryItem.imagePath,
      pantryItem.notes
    );
  }
}
export interface GetPantryItemsResponse {
  items: PantryItemResponse[];
  totalCount: number;
}

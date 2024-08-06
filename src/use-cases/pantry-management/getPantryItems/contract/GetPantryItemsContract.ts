import { Category, PantryItem } from '@/models/PantryItem';

export interface GetPantryItemsOptions {
  category?: Category;
  sortBy?: 'name' | 'expirationDate' | 'purchaseDate' | 'quantity';
  sortOrder?: 'asc' | 'desc';
}

export class PantryItemResponse extends PantryItem {
  constructor(
    private pantryItem: PantryItem,
    private imageURL: string
  ) {
    super(
      pantryItem.name,
      pantryItem.quantity,
      pantryItem.unit,
      pantryItem.category,
      pantryItem.expirationDate,
      pantryItem.imagePath,
      pantryItem.notes
    );
  }

  public getPantryItem(): PantryItem {
    return this.pantryItem;
  }
  public getImageURL(): string {
    return this.imageURL;
  }
}
export interface GetPantryItemsResponse {
  items: PantryItemResponse[];
  totalCount: number;
}

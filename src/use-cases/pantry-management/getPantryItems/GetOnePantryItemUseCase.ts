import { FirestoreService } from '@/services/FirestoreService';
import { PantryItemResponse } from '@/use-cases/pantry-management/getPantryItems/contract/GetPantryItemsContract';
import { StorageService } from '@/services/StorageService';

export class GetOnePantryItemUseCase {
  // constructor
  constructor(
    private firestoreService: FirestoreService,
    private storageService: StorageService
  ) {}

  // getPantryItems
  async execute(itemId: string): Promise<PantryItemResponse | null> {
    const pantryItem = await this.firestoreService.getItem(itemId);

    if (!pantryItem) {
      throw new Error(`No Item for ${itemId} exits`);
    }

    const imageURL = await this.storageService.getImageURL(
      pantryItem.imagePath
    );

    return new PantryItemResponse(pantryItem, imageURL);
  }
}

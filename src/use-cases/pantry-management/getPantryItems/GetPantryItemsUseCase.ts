import { FirestoreService } from '@/services/FirestoreService';
import {
  GetPantryItemsOptions,
  GetPantryItemsResponse,
  PantryItemResponse,
} from '@/use-cases/pantry-management/getPantryItems/contract/GetPantryItemsContract';
import { StorageService } from '@/services/StorageService';

export class GetPantryItemsUseCase {
  // constructor
  constructor(
    private firestoreService: FirestoreService,
    private storageService: StorageService
  ) {}

  // getPantryItems
  async execute(data: GetPantryItemsOptions): Promise<GetPantryItemsResponse> {
    const retrievedItems = await this.firestoreService.getAllItems(data);

    const pantryItemsWithImageURL: PantryItemResponse[] = [];
    for (const item of retrievedItems) {
      const imageURL = await this.storageService.getImageURL(item.imagePath);

      const pantryItem = new PantryItemResponse(item, imageURL);
      pantryItemsWithImageURL.push(pantryItem);
    }

    return {
      items: pantryItemsWithImageURL,
      totalCount: pantryItemsWithImageURL.length,
    };
  }
}

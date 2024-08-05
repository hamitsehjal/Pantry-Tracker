import { FirestoreService } from '@/services/FirestoreService';
import {
  GetPantryItemsOptions,
  GetPantryItemsResponse,
  PantryItemResponse,
} from '@/use-cases/pantry-management/getPantryItems/contract/GetPantryItemsContract';
import { StorageService } from '@/services/StorageService';

export class GetPantryItemsUseCase {
  private static instance: GetPantryItemsUseCase;
  // constructor
  constructor(
    private firestoreService: FirestoreService,
    private storageService: StorageService
  ) {}

  public static getInstance(
    firestoreService: FirestoreService,
    storageService: StorageService
  ): GetPantryItemsUseCase {
    if (!GetPantryItemsUseCase.instance) {
      GetPantryItemsUseCase.instance = new GetPantryItemsUseCase(
        firestoreService,
        storageService
      );
    }
    return GetPantryItemsUseCase.instance;
  }

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

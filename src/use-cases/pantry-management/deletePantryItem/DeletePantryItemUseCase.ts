import { FirestoreService } from '@/services/FirestoreService';
import { StorageService } from '@/services/StorageService';
import DeletePantryItemContract from '@/use-cases/pantry-management/deletePantryItem/contracts/DeletePantryItemContract';

export class DeletePantryItemUseCase {
  // constructor
  constructor(
    private firestoreService: FirestoreService,
    private storageService: StorageService
  ) {}

  async execute(item: DeletePantryItemContract): Promise<void> {
    // Verify item belongs to user

    const itemToBeDeleted = await this.firestoreService.getItem(item.itemId);

    if (!itemToBeDeleted) {
      throw new Error(`Item with id: ${item.itemId} doesn't exist`);
    }
    if (itemToBeDeleted.userId !== item.userId) {
      throw new Error(`Not Authorized to delete this item`);
    }

    // Verification Completed
    if (itemToBeDeleted.imagePath) {
      // Delete corresponding image from storage if it exists
      await this.storageService.deletePantryItemImage(
        itemToBeDeleted.imagePath
      );
    }
    // Delete document from database
    await this.firestoreService.deleteItem(item.itemId);
  }
}

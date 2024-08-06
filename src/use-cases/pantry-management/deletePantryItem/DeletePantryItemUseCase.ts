import { FirestoreService } from '@/services/FirestoreService';
import { StorageService } from '@/services/StorageService';
import DeletePantryItemContract from '@/use-cases/pantry-management/deletePantryItem/contracts/DeletePantryItemContract';

export class DeletePantryItemUseCase {
  // constructor
  constructor(private firestoreService: FirestoreService) {}

  async execute(item: DeletePantryItemContract): Promise<void> {
    // Verify item belongs to user

    const itemToBeDeleted = await this.firestoreService.getItem(item.itemId);

    if (!itemToBeDeleted) {
      throw new Error(`Item with id: ${item.itemId} doesn't exist`);
    }

    // Delete document from database
    await this.firestoreService.deleteItem(item.itemId);
  }
}

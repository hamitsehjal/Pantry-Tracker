import { FirestoreService } from '@/services/FirestoreService';
import { StorageService } from '@/services/StorageService';
import ValidatorService from '@/services/ValidatorService';
import UpdatePantryItemContract from '@/use-cases/pantry-management/updatePantryItem/contracts/UpdatePantryItemContract';
import { Category, PantryItem, Unit } from '@/models/PantryItem';

export class UpdatePantryItemUseCase {
  // constructor
  constructor(
    private firestoreService: FirestoreService,
    private storageService: StorageService,
    private validatorService: ValidatorService
  ) {}

  // Update pantry item
  async execute(item: UpdatePantryItemContract): Promise<string> {
    const pantryItem = await this.firestoreService.getItem(item.itemId);
    if (!pantryItem) {
      throw new Error(`No existing pantry item with id: ${item.itemId}`);
    }
    this.validate(item);
    if (item.itemImage) {
      // Delete existing image if it exists

      if (pantryItem.imagePath) {
        await this.storageService.deletePantryItemImage(pantryItem.imagePath);
      }
      // Upload new version of Image
      pantryItem.imagePath = await this.storageService.uploadPantryItemImage(
        item.itemImage,
        item.userId
      );
    }
    // Updated PantryItem
    const updatedPantryItem = new PantryItem(
      item.userId,
      item.name ?? pantryItem.name,
      item.quantity ?? pantryItem.quantity,
      (item.unit as Unit) ?? pantryItem.unit,
      (item.category as Category) ?? pantryItem.category,
      item.expirationDate ?? pantryItem.expirationDate,
      item.purchaseDate ?? pantryItem.purchaseDate,
      pantryItem.createdAt,
      pantryItem.updatedAt,
      pantryItem.imagePath,
      item.notes ?? pantryItem.notes
    );
    // Update Database
    return await this.firestoreService.updateItem(
      item.itemId,
      updatedPantryItem
    );
  }

  // validate incoming data
  private validate(item: UpdatePantryItemContract): void {
    if (item.unit) {
      this.validatorService.isValidUnit(item.unit);
    }
    if (item.category) {
      this.validatorService.isValidCategory(item.category);
    }
  }
}

import { StorageService } from '@/services/StorageService';
import { FirestoreService } from '@/services/FirestoreService';
import { Category, PantryItem, Unit } from '@/models/PantryItem';
import AddPantryItemContract from '@/use-cases/pantry-management/addPantryItem/contracts/AddPantryItemContract';
import ValidatorService from '@/services/ValidatorService';

export class AddPantryItemUseCase {
  // constructor
  constructor(
    private storageService: StorageService,
    private firestoreService: FirestoreService,
    private validatorService: ValidatorService
  ) {}

  // Add pantry item
  async execute(item: AddPantryItemContract): Promise<PantryItem> {
    // validate the data
    this.validate(item);

    // Upload the image to Cloud Storage if exits
    let imagePath: string | undefined = undefined;
    if (item.itemImage) {
      imagePath = await this.storageService.uploadPantryItemImage(
        item.itemImage,
        item.userId
      );
    }

    // Save the item to database

    const pantryItem = new PantryItem(
      item.userId,
      item.name,
      item.quantity,
      item.unit as Unit,
      item.category as Category,
      item.expirationDate,
      item.purchaseDate,
      new Date(),
      new Date(),
      imagePath,
      item.notes
    );
    const itemAdded = await this.firestoreService.addItem(pantryItem);

    return pantryItem;
  }

  private validate(data: AddPantryItemContract) {
    this.validatorService.isValidUnit(data.unit);
    this.validatorService.isValidCategory(data.category);
  }
}

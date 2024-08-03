import { StorageService } from '@/services/StorageService';
import { FirestoreService } from '@/services/FirestoreService';
import { Category, PantryItem, Unit } from '@/models/PantryItem';
import AddPantryItemContract from '@/use-cases/pantry-management/addPantryItem/contracts/AddPantryItemContract';
import ValidatorService from '@/services/ValidatorService';

export const categoryToImageMap = new Map<Category, string>([
  [Category.Vegetable, 'shared-assets/images/category/vegetable_icon.png'],
  [Category.Fruit, 'shared-assets/images/category/fruit_icon.png'],
  [Category.Dairy, 'shared-assets/images/category/dairy_icon.png'],
  [Category.Meat, 'shared-assets/images/category/meat_icon.png'],
  [Category.Beverage, 'shared-assets/images/category/beverage_icon.png'],
  [Category.Grain, 'shared-assets/images/category/grain_icon.png'],
  [Category.Condiment, 'shared-assets/images/category/condiment_icon.png'],
]);
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
    // let imagePath: string | undefined = undefined;
    // if (item.itemImage) {
    //   imagePath = await this.storageService.uploadPantryItemImage(
    //     item.itemImage,
    //     item.userId
    //   );
    // }

    // Save the item to database
    // set imagePath based on category
    const imagePath = categoryToImageMap.get(item.category as Category)!;
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

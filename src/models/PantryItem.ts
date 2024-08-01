import {
  DocumentSnapshot,
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
  FirestoreDataConverter,
} from '@firebase/firestore';

enum Category {
  Vegetable = 'Vegetable',
  Fruit = 'Fruit',
  Dairy = 'Dairy',
  Meat = 'Meat',
  Beverage = 'Beverage',
  Grain = 'Grain',
  Condiment = 'Condiment',
}
enum Unit {
  Kilogram = 'kg',
  Gram = 'g',
  Liter = 'l',
  Milliliter = 'ml',
  Piece = 'piece',
}
export class PantryItem {
  constructor(
    public userId: string,
    public name: string,
    public quantity: number,
    public unit: Unit,
    public category: Category,
    public expirationDate: Date,
    public purchaseDate: Date,
    public imageURL: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public notes?: string
  ) {}
}

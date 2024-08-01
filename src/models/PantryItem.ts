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

  toFirestore() {
    return {
      userId: this.userId,
      name: this.name,
      quantity: this.quantity,
      unit: this.unit,
      category: this.category,
      expirationDate: Timestamp.fromDate(this.expirationDate),
      purchaseDate: Timestamp.fromDate(this.purchaseDate),
      imageURL: this.imageURL,
      createdAt: Timestamp.fromDate(this.createdAt),
      updatedAt: Timestamp.fromDate(this.updatedAt),
      notes: this.notes,
    };
  }

  static fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): PantryItem {
    const data = snapshot.data(options);
    return new PantryItem(
      data.userId,
      data.name,
      data.quantity,
      data.unit,
      data.category,
      data.expirationDate.toDate(),
      data.purchaseDate.toDate(),
      data.imageURL,
      data.notes,
      data.createdAt,
      data.updatedAt
    );
  }
}

// // Firestore data convertor
// const pantryItemConvertor: FirestoreDataConverter<PantryItem> = {
//   toFirestore: (item: PantryItem) => {
//     return {
//       userId: item.userId,
//       name: item.name,
//       quantity: item.quantity,
//       unit: item.unit,
//       category: item.category,
//       expirationDate: item.expirationDate,
//       purchaseDate: item.purchaseDate,
//       imageURL: item.imageURL,
//       notes: item.notes,
//       createdAt: item.createdAt,
//       updatedAt: item.updatedAt,
//     };
//   },
//   fromFirestore: (
//     snapshot: QueryDocumentSnapshot,
//     options: SnapshotOptions
//   ) => {
//     const data = snapshot.data(options);
//     {
//       return new PantryItem(
//         data.userId,
//         data.name,
//         data.quantity,
//         data.unit,
//         data.category,
//         data.expirationDate.toDate(),
//         data.purchaseDate.toDate(),
//         data.imageURL,
//         data.notes,
//         data.createdAt,
//         data.updatedAt
//       );
//     }
//   },
// };

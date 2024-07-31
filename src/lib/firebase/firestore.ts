import {
  getFirestore,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDoc,
  DocumentSnapshot,
  SnapshotOptions,
  query,
  collection,
  where,
  getDocs,
  deleteDoc,
} from '@firebase/firestore';

import app from '@/lib/firebase/firebase';

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

class PantryItem {
  userId: string;
  name: string;
  quantity: number;
  unit: Unit;
  category: Category;
  expirationDate: Date;
  purchaseDate: Date;
  imageURL: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    userId: string,
    name: string,
    quantity: number,
    unit: Unit,
    category: Category,
    expirationDate: Date,
    purchaseDate: Date,
    imageURL: string,
    createdAt: Date,
    updatedAt: Date,
    notes?: string
  ) {
    this.userId = userId;
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
    this.category = category;
    this.expirationDate = expirationDate;
    this.purchaseDate = purchaseDate;
    this.imageURL = imageURL;
    this.notes = notes;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

// Add a pantry item
async function addPantryItem(item: PantryItem) {
  const itemToAdd = {
    ...item,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const docRef = doc(db, 'pantryItems').withConverter(pantryItemConvertor);
  const itemAdded = await setDoc(docRef, itemToAdd);

  console.log(`New Item added to Pantry: ${docRef.id}`);
}

// Update a pantry item
async function updatePantryItem(itemId: string, item: PantryItem) {
  // Get reference to Document
  const docRef = doc(db, 'pantryItems', itemId).withConverter(
    pantryItemConvertor
  );

  // update the document
  await updateDoc(docRef, {
    ...item,
    updatedAt: serverTimestamp(),
  });
}

// Retrieve a pantry item
async function getPantryItem(itemId: string) {
  const docRef = doc(db, 'pantryItems', itemId).withConverter(
    pantryItemConvertor
  );

  const itemRetrieved = await getDoc(docRef);

  if (itemRetrieved.exists()) {
    return itemRetrieved;
  } else {
    return `No Item Exists for {itemId}`;
  }
}

// Retrieve all pantry items for users
async function getAllPantryItems(user: string) {
  const queryAllItemsForUser = query(
    collection(db, 'pantryItems'),
    where('userId', '==', user)
  );
  const querySnapshot = await getDocs(queryAllItemsForUser);
  querySnapshot.forEach((doc) => {
    console.log(`{doc.id} => {doc.data()}`);
  });
}

// Delete a pantry item
async function deletePantryItem(itemId: string, userId: string) {
  // Verify Item Ownership
  const docRef = doc(db, 'pantryItems', itemId).withConverter(
    pantryItemConvertor
  );
  const itemDoc = await getDoc(docRef);
  if (!itemDoc.exists()) {
    throw new Error("Item doesn't exist");
  }
  const itemData = itemDoc.data();
  if (itemData && itemData.userId !== userId) {
    throw new Error('You are not authorized to delete this pantry item');
  }

  // Ownership confirmed (Delete the Document)
  await deleteDoc(docRef);
  console.log('Item deleted Successfully');
}
const db = getFirestore(app);
export default db;

// Firestore data convertor
const pantryItemConvertor = {
  toFirestore: (item: PantryItem) => {
    return {
      userId: item.userId,
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      category: item.category,
      expirationDate: item.expirationDate,
      purchaseDate: item.purchaseDate,
      imageURL: item.imageURL,
      notes: item.notes,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    if (snapshot.exists() && data) {
      return new PantryItem(
        data.userId,
        data.name,
        data.quantity,
        data.unit,
        data.category,
        data.expirationDate,
        data.purchaseDate,
        data.imageURL,
        data.notes,
        data.createdAt,
        data.updatedAt
      );
    }
    return null;
  },
};

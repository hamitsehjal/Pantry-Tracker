import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
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

interface pantryItem {
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
}

// Add a pantry item
async function addPantryItem(item: pantryItem) {
  const itemAdded = await addDoc(collection(db, 'pantryItems'), item);

  console.log(`New Item added to Pantry: ${itemAdded.id}`);
}

// Update a pantry item
async function updatePantryItem(itemId: string, item: pantryItem) {
  // Get reference to Document
  const docRef = doc(db, 'pantryItems', itemId);

  // update the document
  await updateDoc(docRef, {
    ...item,
    updatedAt: serverTimestamp(),
  });
}

// Retrieve a pantry item

// Retrieve all pantry items for users

// Delete a pantry item

const db = getFirestore(app);
export default db;

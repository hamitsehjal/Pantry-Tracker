import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from '@firebase/firestore';

import { db } from '@/lib/firebase/firebase';
import { PantryItem } from '@/models/PantryItem';

export class FirestoreService {
  private pantryCollection = collection(db, 'pantry');

  // add a new item
  async addItem(item: PantryItem): Promise<string> {
    const docRef = await addDoc(this.pantryCollection, {
      ...item.toFirestore(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    console.log(`New Item Added Successfully - {docRef.id}`);
    return docRef.id;
  }

  // update an existing item
  async updateItem(itemId: string, item: PantryItem): Promise<string> {
    // Get a reference to the Document
    const docRef = doc(this.pantryCollection, itemId);

    // Update the document
    await updateDoc(docRef, {
      ...item.toFirestore(),
      updatedAt: serverTimestamp(),
    });

    console.log(`Item with id - {docRef.id} updated Successfully`);
    return docRef.id;
  }

  // retrieve a pantry item

  // retrieve multiple item

  // Delete an item
}

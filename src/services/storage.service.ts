import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

import { firebaseStorage } from '@/lib/firebase';

export class StorageService {
  private storage = firebaseStorage;

  private async uploadFile(file: File, path: string): Promise<string> {
    const fileExtension = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    const fullPath = `${path}/${fileName}`;
    const fileRef = ref(this.storage, fullPath);

    // Upload File
    await uploadBytes(fileRef, file);
    console.log('File Successfully Uploaded');

    // Get uploaded File's URL
    return fileRef.fullPath;
  }

  private async deleteFile(path: string): Promise<void> {
    // Create a reference to the file to delete
    const fileRef = ref(this.storage, path);

    // Delete the File
    await deleteObject(fileRef);
    console.log('File Deleted Successfully');
  }
  // uploadPantryItemImage
  async uploadPantryItemImage(file: File, userId: string): Promise<string> {
    return await this.uploadFile(file, `users/${userId}/pantry/`);
  }

  // deletePantryItemImage
  async deletePantryItemImage(imagePath: string): Promise<void> {
    return await this.deleteFile(imagePath);
  }
  // getImageURL
  async getImageURL(imagePath: string): Promise<string> {
    const fileRef = ref(this.storage, imagePath);
    return await getDownloadURL(fileRef);
  }
}

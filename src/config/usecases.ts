import { GetPantryItemsUseCase } from '@/use-cases/pantry-management/getPantryItems/GetPantryItemsUseCase';
import { FirestoreService } from '@/services/FirestoreService';
import { StorageService } from '@/services/StorageService';

const firestoreService = new FirestoreService();
const storageService = new StorageService();
export const getPantryItemsUseCaseInstance: GetPantryItemsUseCase =
  GetPantryItemsUseCase.getInstance(firestoreService, storageService);

import { Category, Unit } from '@/models/PantryItem';

export default class ValidatorService {
  isValidUnit(unit: string): void {
    if (!Object.values(Unit).includes(unit as Unit)) {
      throw new Error(`${unit} is not a valid Unit`);
    }
    console.log('Valid Unit');
  }
  isValidCategory(category: string): void {
    if (!Object.values(Category).includes(category as Category)) {
      throw new Error(`${category} is not a valid Category`);
    }
    console.log('Valid Category');
  }
}

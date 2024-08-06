export default interface UpdatePantryItemContract {
  itemId: string;
  name?: string;
  quantity?: number;
  unit?: string;
  category?: string;
  expirationDate?: Date;
  notes?: string;
}

export default interface UpdatePantryItemContract {
  itemId: string;
  userId: string;
  name?: string;
  quantity?: number;
  unit?: string;
  category?: string;
  expirationDate?: Date;
  purchaseDate?: Date;
  notes?: string;
}

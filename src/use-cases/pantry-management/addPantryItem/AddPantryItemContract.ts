export default interface AddPantryItemContract {
  userId: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expirationDate: Date;
  purchaseDate: Date;
  itemImage?: File;
  notes?: string;
}

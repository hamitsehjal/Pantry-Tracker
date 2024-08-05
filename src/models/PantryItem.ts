export enum Category {
  Vegetable = 'Vegetable',
  Fruit = 'Fruit',
  Dairy = 'Dairy',
  Meat = 'Meat',
  Beverage = 'Beverage',
  Grain = 'Grain',
  Condiment = 'Condiment',
}
export enum Unit {
  Kilogram = 'kg',
  Gram = 'g',
  Liter = 'l',
  Milliliter = 'ml',
  Piece = 'piece',
}
export class PantryItem {
  constructor(
    public name: string,
    public quantity: number,
    public unit: Unit,
    public category: Category,
    public expirationDate: Date,
    public purchaseDate: Date,
    public createdAt: Date,
    public updatedAt: Date,
    public imagePath: string,
    public notes?: string
  ) {}
}

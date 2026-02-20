// src/types.ts

export type Category = 'Beef' | 'Chicken' | 'Vegetarian' | 'Seafood' | 'Pork';

export type MenuItem = {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  spicy: boolean;
};
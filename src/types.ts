// src/types.ts

export type Category = 'Beef' | 'Chicken' | 'Vegetarian' | 'Seafood' | 'Pork';

export type MenuItem = {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  spicy: boolean;
  image: string;
};

// adding controls for the menu item 
export type SortOrder = 'none' | 'low-high' | 'high-low';

// drinks category
export type DrinkCategory = 'Cold' | 'Hot' | 'Alcoholic' | 'Smoothie';

// drink item type 
export type DrinkItem = {
  id: number;
  name: string;
  category: DrinkCategory;
  price: number;
  description: string;
  image: string;
};
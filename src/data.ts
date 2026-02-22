// src/data.ts

import type { MenuItem, Category, DrinkItem, DrinkCategory } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: 1,  name: 'Beef Burger',          category: 'Beef',       price: 12.99, description: 'Juicy beef patty with lettuce, tomato and cheese.',      spicy: false, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: 2,  name: 'Ribeye Steak',         category: 'Beef',       price: 24.99, description: 'Grilled ribeye with herb butter and fries.',              spicy: false, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400' },
  { id: 3,  name: 'Beef Tacos',           category: 'Beef',       price: 10.99, description: 'Spiced ground beef in crispy shells with salsa.',         spicy: true,  image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400' },
  { id: 4,  name: 'Beef Stew',            category: 'Beef',       price: 13.99, description: 'Slow-cooked beef with root vegetables and gravy.',        spicy: false, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400' },
  { id: 5,  name: 'Grilled Chicken',      category: 'Chicken',    price: 11.99, description: 'Marinated chicken breast with roasted vegetables.',       spicy: false, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400' },
  { id: 6,  name: 'Chicken Wings',        category: 'Chicken',    price: 9.99,  description: 'Crispy wings with buffalo sauce and blue cheese dip.',    spicy: true,  image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400' },
  { id: 7,  name: 'Chicken Caesar Wrap',  category: 'Chicken',    price: 8.99,  description: 'Grilled chicken, romaine, parmesan in a flour wrap.',     spicy: false, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400' },
  { id: 8,  name: 'Chicken Curry',        category: 'Chicken',    price: 12.99, description: 'Tender chicken in a rich spiced tomato sauce.',           spicy: true,  image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400' },
  { id: 9,  name: 'Veggie Burger',        category: 'Vegetarian', price: 10.99, description: 'Black bean patty with avocado and chipotle mayo.',        spicy: false, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400' },
  { id: 10, name: 'Margherita Pizza',     category: 'Vegetarian', price: 11.99, description: 'Classic tomato, fresh mozzarella and basil.',             spicy: false, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
  { id: 11, name: 'Mushroom Risotto',     category: 'Vegetarian', price: 12.49, description: 'Creamy arborio rice with wild mushrooms and parmesan.',   spicy: false, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400' },
  { id: 12, name: 'Spicy Tofu Stir-Fry', category: 'Vegetarian', price: 9.99,  description: 'Crispy tofu with peppers and chili sauce over rice.',     spicy: true,  image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400' },
  { id: 13, name: 'Grilled Salmon',       category: 'Seafood',    price: 18.99, description: 'Atlantic salmon with lemon butter and asparagus.',        spicy: false, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400' },
  { id: 14, name: 'Prawn Linguine',       category: 'Seafood',    price: 16.99, description: 'King prawns in garlic white wine sauce with linguine.',   spicy: false, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400' },
  { id: 15, name: 'Fish & Chips',         category: 'Seafood',    price: 13.99, description: 'Beer-battered cod with chunky chips and mushy peas.',     spicy: false, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400' },
  { id: 16, name: 'Pork Ribs',            category: 'Pork',       price: 19.99, description: 'Slow-roasted ribs glazed with BBQ sauce and coleslaw.',   spicy: false, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
  { id: 17, name: 'Pulled Pork Sandwich', category: 'Pork',       price: 11.99, description: 'Tender pulled pork with pickles and jalapeños.',          spicy: true,  image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=400' },
  { id: 18, name: 'Pork Dumplings',       category: 'Pork',       price: 8.99,  description: 'Pan-fried pork dumplings with ginger soy dipping sauce.', spicy: false, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400' },
];

export const ALL_CATEGORIES: Category[] = [
  'Beef',
  'Chicken',
  'Vegetarian',
  'Seafood',
  'Pork',
];

// Drinks data — separate from food, uses DrinkItem type
export const DRINK_ITEMS: DrinkItem[] = [
  { id: 1, name: 'Coca Cola',      category: 'Cold',      price: 2.99, description: 'Ice cold classic Coca Cola.',             image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400' },
  { id: 2, name: 'Cappuccino',     category: 'Hot',       price: 3.99, description: 'Rich espresso with steamed milk foam.',   image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400' },
  { id: 3, name: 'Craft Beer',     category: 'Alcoholic', price: 5.99, description: 'Local craft beer, crisp and refreshing.', image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400' },
  { id: 4, name: 'Mango Smoothie', category: 'Smoothie',  price: 4.99, description: 'Fresh mango blended with yoghurt.',       image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400' },
  { id: 5, name: 'Lemonade',       category: 'Cold',      price: 3.49, description: 'Freshly squeezed lemon with mint.',       image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400' },
  { id: 6, name: 'Green Tea',      category: 'Hot',       price: 2.99, description: 'Soothing Japanese green tea.',            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
];

export const ALL_DRINK_CATEGORIES: DrinkCategory[] = [
  'Cold',
  'Hot',
  'Alcoholic',
  'Smoothie',
];
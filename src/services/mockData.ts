
// Mock Shop categories
export const categories = [
  { id: 1, name: "Grocery", icon: "shopping-cart" },
  { id: 2, name: "Pharmacy", icon: "shopping-cart" },
  { id: 3, name: "Electronics", icon: "shopping-cart" },
  { id: 4, name: "Convenience", icon: "shopping-cart" },
  { id: 5, name: "Pets", icon: "shopping-cart" },
];

// Mock Shops
export const shops = [
  {
    id: 1,
    name: "Fresh Market",
    category: 1,
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    deliveryTime: "15-20 min",
    deliveryFee: 2.99,
    description: "Fresh produce and groceries delivered to your door",
    address: "123 Market St.",
    distance: "1.2 miles"
  },
  {
    id: 2,
    name: "QuickMeds Pharmacy",
    category: 2,
    image: "https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    description: "Medications and health products",
    address: "456 Health Ave.",
    distance: "0.8 miles"
  },
  {
    id: 3,
    name: "TechZone",
    category: 3,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    deliveryTime: "25-40 min",
    deliveryFee: 4.99,
    description: "Latest gadgets and electronics",
    address: "789 Tech Blvd.",
    distance: "2.1 miles"
  },
  {
    id: 4,
    name: "Corner Convenience",
    category: 4,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.1,
    deliveryTime: "10-15 min",
    deliveryFee: 1.49,
    description: "Everyday essentials and snacks",
    address: "101 Quick St.",
    distance: "0.5 miles"
  },
  {
    id: 5,
    name: "PetStore Plus",
    category: 5,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    deliveryTime: "20-35 min",
    deliveryFee: 3.49,
    description: "Everything for your furry friends",
    address: "202 Pet Lane",
    distance: "1.7 miles"
  },
  {
    id: 6,
    name: "City Grocers",
    category: 1,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    description: "Urban grocery with local products",
    address: "303 City Ave.",
    distance: "1.0 miles"
  },
];

// Mock Products for shop with id 1 (Fresh Market)
export const products = [
  {
    id: 1,
    shopId: 1,
    name: "Organic Bananas",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Bunch of fresh organic bananas",
    category: "Fruits",
    inStock: true
  },
  {
    id: 2,
    shopId: 1,
    name: "Avocado",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Ripe Hass avocado",
    category: "Fruits",
    inStock: true
  },
  {
    id: 3,
    shopId: 1,
    name: "Whole Milk",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "1 gallon of fresh whole milk",
    category: "Dairy",
    inStock: true
  },
  {
    id: 4,
    shopId: 1,
    name: "Sourdough Bread",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1585478259715-4ddc051975b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Freshly baked artisan sourdough",
    category: "Bakery",
    inStock: true
  },
  {
    id: 5,
    shopId: 1,
    name: "Organic Eggs",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1518569656728-22de52764deb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "12 large free-range organic eggs",
    category: "Dairy",
    inStock: true
  },
  {
    id: 6,
    shopId: 1,
    name: "Bell Peppers",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Pack of 3 mixed bell peppers",
    category: "Vegetables",
    inStock: true
  },
  {
    id: 7,
    shopId: 1,
    name: "Strawberries",
    price: 4.29,
    image: "https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "16 oz package of fresh strawberries",
    category: "Fruits",
    inStock: true
  },
  {
    id: 8,
    shopId: 1,
    name: "Chicken Breast",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "1 lb boneless skinless chicken breast",
    category: "Meat",
    inStock: true
  },
];

// Mock Cart
export const cart = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  deliveryFee: 2.99,
  tax: 0,
  total: 0,
  shop: null
};


import { createContext, useState, ReactNode, useContext } from "react";
import { toast } from "sonner";

interface CartItem {
  id: number;
  shopId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Shop {
  id: number;
  name: string;
  deliveryFee: number;
}

interface CartContextType {
  items: CartItem[];
  shop: Shop | null;
  addToCart: (product: any, shopId: number, shopName: string, deliveryFee: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [shop, setShop] = useState<Shop | null>(null);

  const calculateTotals = () => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = shop?.deliveryFee || 0;
    const tax = subtotal * 0.08; // Assuming 8% tax rate
    const total = subtotal + deliveryFee + tax;

    return { totalItems, subtotal, deliveryFee, tax, total };
  };

  const addToCart = (product: any, shopId: number, shopName: string, deliveryFee: number) => {
    // If cart has items from another shop, ask user if they want to clear cart
    if (shop && shop.id !== shopId && items.length > 0) {
      if (window.confirm("Your cart contains items from another shop. Would you like to clear your cart and add this item?")) {
        setItems([]);
      } else {
        return;
      }
    }

    // Set current shop
    setShop({
      id: shopId,
      name: shopName,
      deliveryFee: deliveryFee
    });

    // Check if product is already in cart
    const existingItem = items.find(item => item.id === product.id);

    if (existingItem) {
      // Update quantity if product is already in cart
      setItems(items.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      // Add new item to cart
      setItems([
        ...items,
        {
          id: product.id,
          shopId,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }
      ]);
    }

    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId: number) => {
    setItems(items.filter(item => item.id !== productId));
    
    // If no items left, clear shop as well
    if (items.length <= 1) {
      setShop(null);
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(items.map(item => 
      item.id === productId 
        ? { ...item, quantity } 
        : item
    ));
  };

  const clearCart = () => {
    setItems([]);
    setShop(null);
  };

  const { totalItems, subtotal, deliveryFee, tax, total } = calculateTotals();

  return (
    <CartContext.Provider
      value={{
        items,
        shop,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        tax,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";

const CartItem = ({ item, onUpdateQuantity, onRemove }: any) => {
  return (
    <div className="flex items-center py-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
      <div className="flex-grow">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          -
        </Button>
        <span>{item.quantity}</span>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </Button>
      </div>
      <div className="ml-6 text-right">
        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { 
    items, 
    shop, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    subtotal,
    deliveryFee,
    tax,
    total
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-16 space-y-6">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <p className="text-gray-600">Looks like you haven't added any items to your cart yet.</p>
        <Link to="/shops">
          <Button>Browse Shops</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {shop && (
        <div className="mb-6">
          <p className="text-lg">
            Items from <span className="font-semibold">{shop.name}</span>
          </p>
          <div className="flex justify-between items-center mt-2">
            <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
            <Link to={`/shops/${shop.id}`}>
              <Button variant="ghost">Add More Items</Button>
            </Link>
          </div>
        </div>
      )}
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="space-y-4 divide-y">
            {items.map((item) => (
              <CartItem 
                key={item.id} 
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Link to="/checkout">
            <Button className="w-full">Proceed to Checkout</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;

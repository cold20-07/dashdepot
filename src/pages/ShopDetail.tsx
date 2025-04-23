
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { shops, products } from "@/services/mockData";
import { useCart } from "@/contexts/CartContext";

const ProductCategories = ({ categories, activeCategory, onSelect }: any) => {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-2 min-w-max">
        <Button
          variant={activeCategory === 'all' ? "default" : "outline"}
          onClick={() => onSelect('all')}
          className="whitespace-nowrap"
        >
          All Items
        </Button>
        {categories.map((category: string) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onSelect(category)}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

const ShopDetail = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const shop = shops.find(s => s.id === parseInt(shopId || "0"));
  const shopProducts = products.filter(p => p.shopId === parseInt(shopId || "0"));
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(shopProducts);
  
  const { addToCart } = useCart();

  // Get unique categories
  const productCategories = Array.from(new Set(shopProducts.map(product => product.category)));
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(shopProducts);
    } else {
      setFilteredProducts(shopProducts.filter(product => product.category === activeCategory));
    }
  }, [activeCategory, shopProducts]);

  if (!shop) {
    return <div className="text-center py-12">Shop not found</div>;
  }

  const handleAddToCart = (product: any) => {
    addToCart(product, shop.id, shop.name, shop.deliveryFee);
  };

  return (
    <div className="space-y-6">
      {/* Shop Header */}
      <div className="relative h-64 overflow-hidden rounded-xl">
        <img 
          src={shop.image} 
          alt={shop.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-white">{shop.name}</h1>
              <p className="text-white/90">{shop.description}</p>
            </div>
            <div className="bg-white px-3 py-1 rounded-full text-sm font-medium">
              {shop.rating} ★
            </div>
          </div>
        </div>
      </div>

      {/* Shop Info */}
      <div className="flex flex-wrap gap-6 text-sm">
        <div className="flex items-center">
          <span className="font-medium mr-1">Delivery Time:</span>
          {shop.deliveryTime}
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-1">Delivery Fee:</span>
          ${shop.deliveryFee.toFixed(2)}
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-1">Distance:</span>
          {shop.distance}
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-1">Address:</span>
          {shop.address}
        </div>
      </div>

      {/* Product Categories */}
      <div className="pt-6 border-t">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ProductCategories 
          categories={productCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{product.name}</h3>
                  <span className="font-semibold">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="mt-4">
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;


import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { shops, categories } from "@/services/mockData";

const ShopListing = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category") ? parseInt(searchParams.get("category") || "") : null;
  
  const [filteredShops, setFilteredShops] = useState(shops);
  const [activeCategory, setActiveCategory] = useState<number | null>(categoryId);

  useEffect(() => {
    if (activeCategory) {
      setFilteredShops(shops.filter(shop => shop.category === activeCategory));
    } else {
      setFilteredShops(shops);
    }
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Shops Near You</h1>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-1" />
          <span>New York, NY</span>
        </div>
      </div>

      {/* Categories filter */}
      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-2 min-w-max">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            className="whitespace-nowrap"
          >
            All Shops
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Shop grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShops.map((shop) => (
          <Link key={shop.id} to={`/shops/${shop.id}`}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{shop.name}</h3>
                    <p className="text-sm text-gray-500">{shop.description}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {shop.rating} ★
                  </span>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  {shop.address} • {shop.distance}
                </div>
                <div className="flex justify-between text-sm mt-2 text-gray-500 pt-2 border-t">
                  <span>{shop.deliveryTime}</span>
                  <span>${shop.deliveryFee.toFixed(2)} delivery</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopListing;
